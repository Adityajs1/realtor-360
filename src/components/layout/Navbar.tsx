import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { RealtorLogo } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  path: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Developments', path: '/developments' },
  { name: 'Buildings', path: '/buildings' },
  { name: 'Units', path: '/units' },
  { name: 'Leads', path: '/leads' },
  { name: 'Companies', path: '/companies' },
  { name: 'Contacts', path: '/contacts' },
  { name: 'Deals', path: '/deals' },
  { name: 'Activities', path: '/activities' },
  { name: 'Attorney Firms', path: '/attorney-firms' },
  { name: 'Reports', path: '/reports' },
]

export const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-navbar h-nav-h flex items-center px-content-px border-b border-divider/40">
      <div className="w-full flex items-center justify-between">
        {/* Left: Realtor360 Logo */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
          <RealtorLogo />
        </Link>

        {/* Center / Right: Nav links */}
        <nav className="flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'flex items-center justify-center font-medium transition-all duration-150',
                  isActive
                    ? 'bg-gold text-white rounded-active-tab h-active-tab-h px-6 text-nav-item shadow-sm'
                    : 'text-text-primary hover:text-gold px-3.5 py-2.5 text-nav-item rounded-lg'
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
