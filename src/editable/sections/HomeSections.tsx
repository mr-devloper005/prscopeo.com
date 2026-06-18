import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown, Mail, Megaphone, RadioTower, Search, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import {
  CompactIndexCard,
  getEditableExcerpt,
  HorizontalPostCard,
  ImageFirstPostCard,
  postHref,
  RailPostCard,
} from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function getFeedLabel(task: TaskKey) {
  return task === 'mediaDistribution' ? 'distribution archive' : `${taskLabel(task).toLowerCase()} archive`
}

const outletMarks = ['Market Brief', 'Wire Desk', 'Capital Signals', 'Media Ledger', 'Public Bulletin', 'Coverage Notes']

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const secondary = posts.slice(1, 3)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: premium media visibility and distribution.`

  return (
    <section className="luxury-shell border-b border-white/10">
      <div className={`${dc.shell.section} py-8 sm:py-10 lg:py-14`}>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(90deg,#050d18_0%,#103767_58%,#0a1c35_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.34)]">
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 xl:px-16">
            <div className="flex flex-col justify-center">
              <h1 className={`${dc.type.heroTitle} mt-6 max-w-[12ch] text-white`}>{heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-xl">{pagesContent.home.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href='/search' className={dc.button.secondary}>
                  Distribution Packages
                </Link>
                <Link href="/signup" className={dc.button.primary}>
                  Get Started Now
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[560px]">
              <div className="absolute left-4 top-10 hidden h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#39c9ec] bg-[rgba(7,17,29,0.6)] shadow-[0_0_0_12px_rgba(57,201,236,0.08)] sm:flex">
                <Megaphone className="h-11 w-11 text-[#dffcff]" />
              </div>
              <div className="absolute bottom-10 left-4 hidden h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#39c9ec] bg-[rgba(7,17,29,0.6)] shadow-[0_0_0_12px_rgba(57,201,236,0.08)] sm:flex">
                <Sparkles className="h-11 w-11 text-[#dffcff]" />
              </div>
              <div className="absolute right-4 top-14 hidden h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#39c9ec] bg-[rgba(7,17,29,0.6)] shadow-[0_0_0_12px_rgba(57,201,236,0.08)] sm:flex">
                <Mail className="h-11 w-11 text-[#dffcff]" />
              </div>
              <div className="absolute bottom-8 right-4 hidden h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#39c9ec] bg-[rgba(7,17,29,0.6)] shadow-[0_0_0_12px_rgba(57,201,236,0.08)] sm:flex">
                <RadioTower className="h-11 w-11 text-[#dffcff]" />
              </div>

              <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(114,180,255,0.95),rgba(87,65,255,0.28)_34%,rgba(143,57,255,0.54)_52%,rgba(35,114,255,0.26)_70%,rgba(0,0,0,0)_74%)] shadow-[0_0_90px_rgba(74,108,255,0.2)] sm:h-[370px] sm:w-[370px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.4),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(114,255,244,0.3),transparent_24%)] blur-[2px]" />
                <span className="relative text-7xl font-black tracking-[-0.08em] text-white sm:text-8xl">AI</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center text-2xl font-black tracking-[-0.04em] text-white sm:text-4xl">Get discovered across leading media workflows</h2>
              <div className="grid w-full gap-5 text-center text-white/75 sm:grid-cols-3 lg:grid-cols-6">
                {outletMarks.map((mark) => (
                  <div key={mark} className="text-lg font-semibold tracking-[-0.03em] text-white/72">{mark}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {lead ? (
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={postHref(primaryTask, lead, primaryRoute)}
              className="group block rounded-[2.25rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(10,18,34,0.96)_30%,rgba(10,18,34,1))] p-8 text-white shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:p-10"
            >
              <span className="inline-flex rounded-full border border-[#35d7ff]/35 bg-[#35d7ff]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#a5efff]">
                Featured release
              </span>
              <h2 className="mt-6 max-w-5xl text-4xl font-black leading-[0.93] tracking-[-0.055em] sm:text-6xl">{lead.title}</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/76">{getEditableExcerpt(lead, 220)}</p>
            </Link>
            <div className="grid gap-5">
              {secondary.map((post, index) => (
                <HorizontalPostCard
                  key={post.id || post.slug || post.title}
                  post={post}
                  href={postHref(primaryTask, post, primaryRoute)}
                 
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 11).length ? posts.slice(3, 11) : posts
  const latestPosts = posts.slice(0, 5)
  if (!railPosts.length) return null

  return (
    <section className="border-b border-white/8">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.2)] sm:p-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">Featured services</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Coverage lanes built for modern distribution</h2>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: 'AI-guided release distribution',
                  description: 'Organize announcements and stories in a surface that feels sharp, current, and easier to scan.',
                  tagA: 'US Media',
                  tagB: 'International',
                },
                {
                  title: 'Investor and market visibility',
                  description: 'Highlight updates meant for public markets, business reporters, and time-sensitive distribution cycles.',
                  tagA: 'IR Suite',
                  tagB: 'Disclosures',
                },
                {
                  title: 'Newsroom publishing flow',
                  description: 'Move quickly from discovery to detail pages with stronger hierarchy, image support, and archive navigation.',
                  tagA: 'Media Desk',
                  tagB: 'Press Center',
                },
              ].map((item, index) => (
                <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#1d3554] bg-[linear-gradient(180deg,rgba(11,43,67,0.9),rgba(15,64,98,0.88))] p-5 text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1bd0f5]/18 text-[#c9f7ff]">
                    {index === 0 ? <Sparkles className="h-6 w-6" /> : index === 1 ? <RadioTower className="h-6 w-6" /> : <Megaphone className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-[1.08] tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-5 text-sm leading-8 text-white/74">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-[#35d7ff]/40 px-4 py-2 text-xs font-black text-[#d4fbff]">{item.tagA}</span>
                    <span className="rounded-full border border-[#35d7ff]/40 px-4 py-2 text-xs font-black text-[#d4fbff]">{item.tagB}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2.2rem] border border-[#0f6b8c] bg-[linear-gradient(180deg,rgba(7,23,38,0.94),rgba(15,59,88,0.82))] p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.2)] sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <h2 className="text-3xl font-black tracking-[-0.05em]">Latest News</h2>
              <span className="rounded-full bg-[#0ebce7] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">Live</span>
            </div>
            <div className="mt-4">
              {latestPosts.map((post, index) => (
                <CompactIndexCard key={post.id || post.slug || post.title} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              ))}
            </div>
            <Link href={'/search'} className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[#07111d] transition hover:bg-[#35d7ff]">
              Visit Newsroom
            </Link>
          </aside>
        </div>

        <div className="mt-8 rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">Trending now</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Rapid-fire releases and public updates</h2>
            </div>
            <Link href={'/search'} className="hidden text-sm font-black text-[#c9caac] transition hover:text-white lg:inline-flex">
              See full {getFeedLabel(primaryTask)} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className={`${dc.layout.rail}`}>
            {railPosts.map((post, index) => (
              <RailPostCard key={post.id || post.slug || post.title} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const spotlight = posts[8] || posts[0]
  const gallery = posts.slice(9, 13).length ? posts.slice(9, 13) : posts.slice(2, 6)
  if (!spotlight) return null

  return (
    <section className="border-b border-white/8">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">Editorial focus</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Story-led visibility for every release cycle</h2>
              </div>
            </div>
            <HorizontalPostCard post={spotlight} href={postHref(primaryTask, spotlight, primaryRoute)}  />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {gallery.map((post, index) => (
                <ImageFirstPostCard
                  key={post.id || post.slug || post.title}
                  post={post}
                  href={postHref(primaryTask, post, primaryRoute)}
                  label={index % 2 === 0 ? 'Visual coverage' : 'Release brief'}
                />
              ))}
            </div>
          </div>

          <aside className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white">Learn More</h2>
            <div className="mt-6 grid gap-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Journalists and distributors', href: primaryRoute },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold text-white transition hover:border-[#35d7ff]/35 hover:bg-[#35d7ff]/8">
                  <CheckCircle2 className="h-5 w-5 text-[#24dfa8]" />
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-[1.75rem] border border-[#7f2020]/45 bg-[linear-gradient(180deg,rgba(127,32,32,0.22),rgba(127,32,32,0.08))] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#c9caac]">Built for visibility</p>
              <p className="mt-4 text-lg leading-8 text-white/76">This layout pairs strong featured storytelling with fast archive access, so distributors can move from headlines to detail pages with less friction.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(4)
  const lead = source[0] || posts[0]
  const briefs = source.slice(1, 5)

  return (
    <section className="border-b border-white/8">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">Frequently asked questions</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Answers for teams planning their next distribution push</h2>
            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#0ebce7]/30">
              {[
                `How do I publish to the ${getFeedLabel(primaryTask)}?`,
                'How quickly can a release be prepared for public viewing?',
                'Can posts include images, summaries, and supporting links?',
                'What kinds of announcements fit best on this site?',
                'How do categories and search help readers find content?',
              ].map((question, index) => (
                <div
                  key={question}
                  className={`flex items-center justify-between gap-4 px-5 py-5 text-white ${index % 2 === 0 ? 'bg-[rgba(6,16,28,0.92)]' : 'bg-[rgba(4,12,22,0.98)]'} ${index ? 'border-t border-white/8' : ''}`}
                >
                  <p className="text-lg font-black leading-tight tracking-[-0.03em] sm:text-2xl">{question}</p>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12c7ed] text-white">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {lead ? (
              <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">Spotlight story</p>
                <Link href={postHref(primaryTask, lead, primaryRoute)} className="group mt-5 block rounded-[1.85rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#35d7ff]/30">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c9caac]">{taskLabel(primaryTask)}</p>
                  <h3 className="mt-3 text-2xl font-black leading-[1.05] tracking-[-0.04em] text-white">{lead.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{getEditableExcerpt(lead, 170)}</p>
                </Link>
              </div>
            ) : null}

            <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#35d7ff]">
                <Search className="h-4 w-4" /> Search archive
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">Find releases, companies, topics, and categories faster</h3>
              <form action="/search" className="mt-6 flex overflow-hidden rounded-full border border-white/10 bg-white">
                <input name="q" placeholder="Search the archive" className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-[#07111d] outline-none" />
                <button className="bg-[linear-gradient(135deg,#0ebce7,#22c8f1)] px-6 text-xs font-black uppercase tracking-[0.14em] text-white">Search</button>
              </form>
              <div className="mt-6 grid gap-3">
                {briefs.map((post, index) => (
                  <CompactIndexCard key={post.id || post.slug || post.title} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section>
      <div className={`${dc.shell.section} py-14 sm:py-16 lg:py-20`}>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,23,40,0.88),rgba(5,13,24,0.95))] px-6 py-14 text-center shadow-[0_35px_100px_rgba(0,0,0,0.32)] sm:px-10 lg:px-16">
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">A premium front end for modern media distribution</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/74 sm:text-xl">Browse coverage, open detail pages, and move through the archive with the kind of structure distribution teams expect from a polished public-facing site.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/signup" className={dc.button.primary}>Get Started Now</Link>
            <Link href="/contact" className={dc.button.secondary}>Talk to the Team</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
