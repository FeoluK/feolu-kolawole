import Link from 'next/link'

const items = [
  { label: 'Bio', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Publications', href: '/publications' },
  { label: 'Projects', href: '/projects' },
]

export default function Nav({ current }) {
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      {items.map((item) => {
        const isCurrent = item.label === current
        return isCurrent ? (
          <span key={item.label} className="text-foreground">
            {item.label} <span className="text-muted">(current)</span>
          </span>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-muted hover:text-accent transition-colors"
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
