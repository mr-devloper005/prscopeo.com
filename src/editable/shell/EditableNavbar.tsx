'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'


export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const primaryRoute = SITE_CONFIG.tasks.find((task) => task.enabled)?.route || '/'
  const navLinks = useMemo(
    () => [
      { label: 'Distributions', href:'/search' },
      { label: 'About', href: '/about' },
      
      
    ],
    [primaryRoute],
  )
 
  const mobileLinks = [
    ...navLinks,
    { label: 'Archive', href: '/search' },
    ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Get Started', href: '/signup' }]),
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,16,28,0.88)] text-white backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        <div className="grid min-h-[92px] grid-cols-[auto_1fr_auto] items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link href="/" className="min-w-0">
              <div className="flex items-center gap-3">
               <img src='/favicon.png' width="160px" height={"200px"}/>
                <div className="min-w-0">
                  <p className="truncate text-2xl font-black tracking-[-0.05em] text-white sm:text-4xl">{SITE_CONFIG.name}</p>
                  <p className="hidden truncate text-xs font-medium text-[#c9caac] sm:block">{SITE_CONFIG.tagline || 'Premium media distribution'}</p>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-xl font-medium tracking-[-0.03em] text-white/92 transition hover:text-[#35d7ff]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <form action="/search" className="hidden items-center overflow-hidden rounded-full border border-white/12 bg-white/5 xl:flex">
              <Search className="ml-4 h-4 w-4 text-white/55" />
              <input name="q" type="search" placeholder="Search releases" className="w-40 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/35" />
            </form>
            {session ? (
              <>
                <Link href="/create" className="hidden rounded-full border border-[#35d7ff] px-7 py-3 text-sm font-black text-white transition hover:bg-[#35d7ff]/10 md:inline-flex">
                  Publish
                </Link>
                <button type="button" onClick={logout} className="hidden rounded-full border border-white/12 px-7 py-3 text-sm font-black text-white/90 transition hover:bg-white/5 md:inline-flex">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden rounded-full border-2 border-[#0ebce7] px-7 py-3 text-sm font-black text-white transition hover:bg-[#0ebce7]/10 md:inline-flex">
                  Login
                </Link>
                <Link href="/signup" className="rounded-full bg-[linear-gradient(135deg,#0ebce7,#22c8f1)] px-6 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(14,188,231,0.24)] transition hover:brightness-110 md:px-9">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#08111d] px-4 py-5 lg:hidden">
          <div className="grid gap-2">
            {mobileLinks.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-[0.1em]"
              >
                {item.label}
              </Link>
            ))}
            {session ? (
              <button
                type="button"
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-black uppercase tracking-[0.1em]"
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
