import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[radial-gradient(circle_at_top_left,rgba(127,32,32,0.22),transparent_24%),linear-gradient(180deg,#06101c_0%,#0a1730_36%,#07111d_100%)] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center rounded-[2.3rem] border border-white/10 bg-[linear-gradient(90deg,#050d18_0%,#103767_58%,#0a1c35_100%)] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.34)] sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35d7ff]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/74 sm:text-base">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: ShieldCheck, text: 'Secure member access for publishing and account activity.' },
                { icon: Sparkles, text: 'A cleaner interface aligned with the site’s premium distribution feel.' },
                { icon: CheckCircle2, text: 'The same existing local-auth logic, now presented with stronger visual hierarchy.' },
              ].map((item) => (
                <p key={item.text} className="inline-flex items-start gap-3 text-sm text-white/72">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#24dfa8]" />
                  <span>{item.text}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2.2rem] border border-white/10 bg-[#f6f3eb] p-7 text-[#08111d] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7f2020]">Member access</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-6 border-t border-[#d7cfbf] pt-6 text-sm text-[#445165]">
              New here? <Link href="/signup" className="font-black text-[#7f2020] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link>
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0e8db1]">
              Need help signing in? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
