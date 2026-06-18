import Link from 'next/link'
import { ArrowRight, CheckCircle2, RadioTower, ShieldCheck, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const pillars = [
  { icon: RadioTower, title: 'Distribution-first experience', body: 'Pages are organized to spotlight releases, search, and public discovery without adding friction to the reading flow.' },
  { icon: ShieldCheck, title: 'Clearer trust signals', body: 'A more structured interface makes every announcement feel more polished, more credible, and easier to understand.' },
  { icon: Sparkles, title: 'Premium editorial rhythm', body: 'The visual system balances strong headlines, quiet supporting copy, and better spacing across every page.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[radial-gradient(circle_at_top_left,rgba(127,32,32,0.22),transparent_24%),linear-gradient(180deg,#06101c_0%,#0a1730_36%,#07111d_100%)] text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(90deg,#050d18_0%,#103767_58%,#0a1c35_100%)] px-6 py-10 shadow-[0_35px_100px_rgba(0,0,0,0.34)] sm:px-10 lg:px-14 lg:py-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35d7ff]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.3rem]">
                Premium distribution design for modern media visibility.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 sm:text-xl">{pagesContent.about.description}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
          <article className="rounded-[2.2rem] border border-white/10 bg-[#f6f3eb] p-7 text-[#08111d] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7f2020]">About {SITE_CONFIG.name}</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">{pagesContent.about.title}</h2>
            <div className="article-content mt-8 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>

          <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-[2rem] border border-white/10 bg-[rgba(10,18,34,0.82)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#35d7ff]/12 text-[#35d7ff]">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em]">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[var(--editable-container)] px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="rounded-[2.3rem] border border-white/10 bg-[rgba(10,18,34,0.82)] px-6 py-10 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#35d7ff]">Why it works</p>
              <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">A sharper front end gives every release more presence.</h2>
              <div className="mt-5 grid gap-3 text-sm text-white/72">
                {pagesContent.about.values.map((value) => (
                  <p key={value.title} className="inline-flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#24dfa8]" />
                    <span><strong className="text-white">{value.title}:</strong> {value.description}</span>
                  </p>
                ))}
              </div>
            </div>
            <Link href="/search" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0ebce7,#22c8f1)] px-7 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(14,188,231,0.24)] transition hover:brightness-110 lg:mt-0">
              Explore the archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
