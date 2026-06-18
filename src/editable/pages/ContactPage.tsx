'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Share release drafts, story angles, corrections, or publication context that needs a more hands-on review.' },
  { icon: Megaphone, title: 'Distribution planning', body: 'Discuss campaigns, launch timing, media distribution strategy, and how your newsroom surface should feel publicly.' },
  { icon: Mail, title: 'General support', body: 'Get help with accounts, submissions, page issues, or anything else tied to the site experience.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[radial-gradient(circle_at_top_left,rgba(127,32,32,0.22),transparent_24%),linear-gradient(180deg,#06101c_0%,#0a1730_36%,#07111d_100%)] text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(90deg,#050d18_0%,#103767_58%,#0a1c35_100%)] px-6 py-10 shadow-[0_35px_100px_rgba(0,0,0,0.34)] sm:px-10 lg:px-14 lg:py-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35d7ff]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.1rem]">{pagesContent.contact.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 sm:text-xl">{pagesContent.contact.description}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-16">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <article key={desk.title} className="rounded-[2rem] border border-white/10 bg-[rgba(10,18,34,0.82)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#35d7ff]/12 text-[#35d7ff]">
                    <desk.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em]">{desk.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/68">{desk.body}</p>
              </article>
            ))}
          </aside>

          <div className="rounded-[2.2rem] border border-white/10 bg-[#f6f3eb] p-7 text-[#08111d] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7f2020]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">{pagesContent.contact.formTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#344155]">Use the form below to share what you are publishing, adjusting, or planning. The existing contact flow stays the same, only the presentation has changed.</p>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
