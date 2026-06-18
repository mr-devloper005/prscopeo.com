import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Premium media distribution and newsroom visibility',
    primaryLinks: [
      { label: 'Distributions', href: '/search' },
      { label: 'Solutions', href: '/about' },
      { label: 'News Center', href: '/search' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Get started', href: '/signup' },
      secondary: { label: 'Login', href: '/login' },
    },
  },
  footer: {
    tagline: 'Media distribution with a premium editorial feel',
    description: 'Explore releases, public updates, and newsroom-ready coverage through a more polished discovery surface built for modern distribution teams.',
    columns: [
      {
        title: 'Distribution',
        links: [
          { label: 'Latest Releases', href: '/search' },
          { label: 'Search Archive', href: '/search' },
          { label: 'Business Coverage', href: '/about' },
          { label: 'Media Desk', href: '/contact' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for elevated distribution, clearer discovery, and public-facing newsroom updates.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
