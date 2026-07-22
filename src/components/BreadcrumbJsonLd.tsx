import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

interface BreadcrumbItem {
  name: string
  url: string
}

const buildBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://sealonline.co.id/' }
  ]

  let currentPath = ''
  const labelMap: Record<string, string> = {
    'seal-online': 'SEAL Online',
    'seal-online-indonesia': 'SEAL Online Indonesia',
    'seal-online-id': 'SEAL Online ID',
    'seal-online-eternal': 'SEAL Online Eternal',
    'garudapay': 'GarudaPay',
    'garudapay-reborn': 'GarudaPay Reborn',
    'download': 'Download',
    'register': 'Register',
    'top-up': 'Top Up',
    'news': 'News',
    'events': 'Events',
    'guides': 'Guides',
    'database': 'Database',
    'ranking': 'Ranking',
    'community': 'Community',
    'support': 'Support',
    'game': 'Game',
    'about': 'About',
    'contact': 'Contact',
    'terms': 'Terms of Service',
    'privacy': 'Privacy Policy',
  }

  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const name = labelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    breadcrumbs.push({ name, url: `https://sealonline.co.id${currentPath}` })
  })

  return breadcrumbs
}

const BreadcrumbJsonLd = () => {
  const location = useLocation()
  const breadcrumbs = useMemo(() => buildBreadcrumbs(location.pathname), [location.pathname])

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }), [breadcrumbs])

  if (breadcrumbs.length <= 1) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default BreadcrumbJsonLd
export { buildBreadcrumbs }
