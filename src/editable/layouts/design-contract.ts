import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#06101c',
  '--slot4-page-text': '#f6f3eb',
  '--slot4-panel-bg': '#0b1627',
  '--slot4-surface-bg': '#101a2d',
  '--slot4-muted-text': '#d6d7cb',
  '--slot4-soft-muted-text': '#93a198',
  '--slot4-accent': '#7f2020',
  '--slot4-accent-fill': '#7f2020',
  '--slot4-accent-soft': '#c9caac',
  '--slot4-dark-bg': '#06101c',
  '--slot4-dark-text': '#f6f3eb',
  '--slot4-media-bg': '#15243a',
  '--slot4-cream': '#f6f3eb',
  '--slot4-warm': '#c9caac',
  '--slot4-lavender': '#869b7e',
  '--slot4-gray': '#23354e',
  '--slot4-body-gradient': 'radial-gradient(circle at top left, rgba(127,32,32,0.32), transparent 26%), radial-gradient(circle at 82% 10%, rgba(53,215,255,0.22), transparent 24%), linear-gradient(180deg, #07111d 0%, #0a1730 34%, #08111d 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent-soft)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-white/10',
  darkBorder: 'border-white/16',
  shadow: 'shadow-[0_18px_40px_rgba(0,0,0,0.24)]',
  shadowStrong: 'shadow-[0_28px_80px_rgba(0,0,0,0.38)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(6,16,28,0.08),rgba(6,16,28,0.88))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[230px] shrink-0 snap-start sm:w-[260px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-[5.1rem]',
    sectionTitle: 'text-3xl font-black leading-none tracking-[-0.045em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: 'inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#35d7ff,#139ec8)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110',
    secondary: 'inline-flex items-center justify-center gap-2 rounded-full border border-[#35d7ff]/65 bg-transparent px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#35d7ff]/10',
    accent: 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#9a2b2b]',
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(0,0,0,0.22)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a premium dark distribution look with red-wine accents, muted sage support tones, and luminous cyan action highlights.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with layered hero sections, varied cards, and generous spacing.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
