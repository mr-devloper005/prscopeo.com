import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Filter, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { pagesContent } from '@/editable/content/pages.content'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: pagesContent.search.metadata.title,
    description: pagesContent.search.metadata.description,
  })
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => typeof value === 'string' ? stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase() : ''
const getContent = (post: SitePost) => post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const compactRaw = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const summaryOf = (post: SitePost) => post.summary || compactRaw(getContent(post).description) || compactRaw(getContent(post).excerpt) || ''

const matches = (post: SitePost, query: string, category: string, task: string) => {
  const content = getContent(post)
  const typeText = compactText(content.type)
  if (typeText === 'comment') return false
  const derivedTask = getPostTaskKey(post) || typeText
  if (task && derivedTask !== task) return false
  const categoryText = compactText(content.category)
  const tagsText = compactText(Array.isArray(post.tags) ? post.tags.join(' ') : '')
  if (category && !(categoryText || tagsText).includes(category)) return false
  if (!query) return true
  return [post.title, post.summary, content.description, content.body, content.excerpt, content.category, Array.isArray(post.tags) ? post.tags.join(' ') : '']
    .some((value) => compactText(value).includes(query))
}

function SearchResultCard({ post, index }: { post: SitePost; index: number }) {
  const task = getPostTaskKey(post) as TaskKey | null
  const href = task ? buildPostUrl(task, post.slug) : `/article/${post.slug}`
  const summary = summaryOf(post)
  const taskLabel = SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Post'
  const strong = index % 5 === 0

  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[1.9rem] border border-white/10 ${strong ? 'bg-[linear-gradient(180deg,rgba(127,32,32,0.24),rgba(10,18,34,0.82))] md:col-span-2' : 'bg-[rgba(10,18,34,0.82)]'} p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#35d7ff]/35 sm:p-6`}
    >
      <span className="inline-flex rounded-full bg-[#35d7ff]/12 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#b4f3ff]">{taskLabel}</span>
      <h2 className="mt-4 line-clamp-3 text-2xl font-black leading-[1.03] tracking-[-0.035em] text-white">{post.title}</h2>
      {summary ? <p className="mt-4 line-clamp-3 text-sm font-semibold leading-7 text-white/68">{summary}</p> : null}
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#c9caac]">Open result <ArrowRight className="h-4 w-4" /></span>
    </Link>
  )
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }> }) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(useMaster ? 1000 : 300, useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined)
  const posts = feed?.posts?.length ? feed.posts : useMaster ? [] : SITE_CONFIG.tasks.filter((item) => item.enabled).flatMap((item) => getMockPostsForTask(item.key))
  const results = posts.filter((post) => matches(post, normalized, category, task)).slice(0, normalized ? 80 : 36)
  const enabledTasks = SITE_CONFIG.tasks.filter((item) => item.enabled)

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(127,32,32,0.22),transparent_24%),linear-gradient(180deg,#06101c_0%,#0a1730_36%,#07111d_100%)] text-white">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(90deg,#050d18_0%,#103767_58%,#0a1c35_100%)] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.34)] text-white sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35d7ff]">{pagesContent.search.hero.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.1rem]">{pagesContent.search.hero.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/75">{pagesContent.search.hero.description}</p>
            </div>
            <form action="/search" className="self-center rounded-[2.2rem] border border-white/10 bg-[#f6f3eb] p-6 text-[#08111d] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-10 lg:p-14">
              <input type="hidden" name="master" value="1" />
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7f2020]">Search controls</p>
              <label className="mt-4 flex items-center gap-3 rounded-full border border-[#d6cfbf] bg-white px-5 py-4">
                <Search className="h-5 w-5 opacity-45" />
                <input name="q" defaultValue={query} placeholder={pagesContent.search.hero.placeholder} className="min-w-0 flex-1 bg-transparent text-base font-bold outline-none placeholder:text-current/35" />
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="flex items-center gap-2 rounded-full border border-[#d6cfbf] bg-white px-4 py-3">
                  <Filter className="h-4 w-4 opacity-45" />
                  <input name="category" defaultValue={category} placeholder="Category" className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-current/35" />
                </label>
                <select name="task" defaultValue={task} className="rounded-full border border-[#d6cfbf] bg-white px-4 py-3 text-sm font-black outline-none">
                  <option value="">All content types</option>
                  {enabledTasks.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                </select>
              </div>
              <button className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#0ebce7,#22c8f1)] px-6 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:brightness-110" type="submit">Search</button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 rounded-[2rem] border border-white/10 bg-[rgba(10,18,34,0.82)] px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#35d7ff]">{results.length} results</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em]">{query ? `Results for "${query}"` : pagesContent.search.resultsTitle}</h2>
            </div>
            <Link href="/article" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-xs font-black uppercase text-white">Browse latest <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {results.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((post, index) => <SearchResultCard key={post.id || post.slug} post={post} index={index} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-white/20 bg-[rgba(10,18,34,0.82)] p-10 text-center">
              <p className="text-2xl font-black tracking-[-0.04em]">No matching posts found.</p>
              <p className="mt-3 text-sm font-semibold text-white/60">Try a different keyword, task type, or category.</p>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}
