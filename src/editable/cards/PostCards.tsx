import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Lead release' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[2.25rem] border border-white/12 bg-[#091120] text-white shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
      <div className="relative min-h-[32rem] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,15,28,0.12),rgba(7,15,28,0.78)_58%,rgba(7,15,28,0.98))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
          <span className="inline-flex rounded-full border border-[rgba(52,215,255,0.35)] bg-[rgba(11,188,231,0.16)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#a5efff]">
            {label}
          </span>
          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-[0.93] tracking-[-0.055em] sm:text-6xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block w-[260px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(10,18,34,0.82)] p-4 text-white transition duration-300 hover:-translate-y-1 hover:border-[#35d7ff]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-[rgba(7,15,28,0.82)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#9fd0c6]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#35d7ff]">{getEditableCategory(post)}</p>
      </div>
      <h3 className="mt-4 line-clamp-4 text-xl font-black leading-[1.04] tracking-[-0.04em]">{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/70">{getEditableExcerpt(post, 150)}</p>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[44px_1fr] gap-4 border-b border-white/8 py-4 last:border-b-0">
      <span className="text-3xl font-black leading-none text-[#35d7ff]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#c9caac]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-black leading-tight tracking-[-0.03em] text-white transition group-hover:text-[#35d7ff]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function HorizontalPostCard({ post, href, badge }: { post: SitePost; href: string; badge?: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[1.85rem] border border-white/10 bg-[rgba(10,18,34,0.76)] p-5 text-white transition duration-300 hover:-translate-y-1 hover:border-[#35d7ff]/40 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[#35d7ff]/35 bg-[#35d7ff]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#b4f3ff]">
          {badge || getEditableCategory(post)}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">Dispatch</span>
      </div>
      <h3 className="mt-4 text-2xl font-black leading-[1.02] tracking-[-0.04em]">{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/72">{getEditableExcerpt(post, 170)}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#c9caac]">
        Read release <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}

export function ImageFirstPostCard({ post, href, label }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[1.85rem] border border-white/10 bg-[rgba(10,18,34,0.78)] p-5 text-white transition duration-300 hover:-translate-y-1 hover:border-[#7f2020]/60">
      <span className="inline-flex rounded-full bg-[#7f2020] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
        {label || getEditableCategory(post)}
      </span>
      <h3 className="mt-4 line-clamp-4 text-2xl font-black leading-[1.03] tracking-[-0.04em]">{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/72">{getEditableExcerpt(post, 150)}</p>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 overflow-hidden rounded-[1.85rem] border border-white/10 bg-[rgba(10,18,34,0.78)] text-white transition duration-300 hover:-translate-y-1 hover:border-[#35d7ff]/35 sm:grid-cols-[260px_minmax(0,1fr)]">
      <div className="relative min-h-[220px] overflow-hidden bg-[#091120]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08101d] via-transparent to-transparent" />
      </div>
      <div className="min-w-0 p-5 sm:p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#35d7ff]">
          {String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}
        </p>
        <h2 className="mt-3 line-clamp-3 text-3xl font-black leading-[1.02] tracking-[-0.05em] group-hover:text-[#c9caac]">{post.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/70">{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#c9caac]">
          Read story <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
