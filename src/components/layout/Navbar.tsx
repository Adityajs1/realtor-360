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
      <div className="w-full flex items-center gap-7 2xl:gap-10">
        {/* Left: Realtor360 Logo */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-90 flex-shrink-0 mr-2">
          <RealtorLogo />
        </Link>

        {/* Nav links right next to logo with consistent gap */}
        <nav className="flex items-center gap-2 xl:gap-3 2xl:gap-5 flex-wrap">
          {NAV_ITEMS.map((item) => {
            const isHome = item.path === '/'
            const isActive =
              isHome
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)

            if (isHome) {
              // Home always retains the yellow background rounded rectangle pill
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center justify-center font-medium transition-all duration-150 select-none text-[18px] bg-gold !text-white rounded-active-tab h-active-tab-h px-6 min-w-[95px] shadow-sm hover:bg-gold-hover"
                >
                  {item.name}
                </Link>
              )
            }

            // Tabs after Home: no yellow background, just affect the text
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'flex items-center justify-center transition-all duration-150 select-none text-[18px] px-3.5 py-2.5 rounded-lg',
                  isActive
                    ? 'text-gold font-semibold'
                    : 'text-text-primary hover:text-gold font-medium'
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
