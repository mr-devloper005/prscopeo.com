'use client'

import Link from 'next/link'
import { Facebook, Linkedin, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const primaryRoute = SITE_CONFIG.tasks.find((task) => task.enabled)?.route || '/'
  const columns = [
   
   
    {
      title: 'News Center',
      links: [
        { label: 'Latest Stories', href: '/search' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#040b14] text-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-14 sm:px-6 lg:px-10 lg:pt-20">
        <section className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,22,39,0.9),rgba(6,16,28,0.95))] px-6 py-14 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">Ready to elevate your next release?</h2>
            <p className="mt-5 text-base leading-8 text-white/72 sm:text-xl">Open the distribution archive, explore recent coverage, or connect with the team to shape a stronger media presence.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[linear-gradient(135deg,#0ebce7,#22c8f1)] px-8 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(14,188,231,0.24)] transition hover:brightness-110">
                {session ? 'Publish Now' : 'Get Started Now'}
              </Link>
              <Link href='/search' className="rounded-full border border-white/15 px-8 py-4 text-sm font-black text-white transition hover:bg-white/5">
                Explore Releases
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-16">
          <div className="grid gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                <span className="shrink-0">
                  <img src={'/favicon.png'} width={'132px'} height={'132px'} alt='logo' className="h-24 w-24 object-contain sm:h-32 sm:w-32" />
                </span>
                <p className="whitespace-nowrap text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">{SITE_CONFIG.name}</p>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">{SITE_CONFIG.description}</p>
            </div>
           
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-black tracking-[-0.03em] text-white">{column.title}</h3>
                <div className="mt-5 grid gap-4">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="text-sm font-medium text-white/72 transition hover:text-[#35d7ff]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
            {session ? (
              <>
                <Link href="/create" className="transition hover:text-white">Create</Link>
                <button onClick={logout} className="text-left transition hover:text-white">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="transition hover:text-white">Login</Link>
                <Link href="/signup" className="transition hover:text-white">Sign Up</Link>
              </>
            )}
          </div>
          <p>© {year} {SITE_CONFIG.name}. Media distribution and newsroom discovery.</p>
        </div>
      </div>
    </footer>
  )
}
