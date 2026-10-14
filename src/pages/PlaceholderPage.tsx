import React from 'react'
import { useLocation } from 'react-router-dom'

export const PlaceholderPage: React.FC = () => {
  const location = useLocation()
  const pageName = location.pathname.replace('/', '').replace(/-/g, ' ')
  const formattedTitle = pageName
    ? pageName.charAt(0).toUpperCase() + pageName.slice(1)
    : 'Page'

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-12 text-center min-h-[calc(100vh-95px)]">
      <div className="bg-white rounded-stat-card shadow-card p-12 max-w-lg border border-divider/50 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-page-bg flex items-center justify-center text-gold mb-5">
          <span className="text-2xl font-bold">360</span>
        </div>
        <h1 className="text-3xl font-bold text-text-primary capitalize mb-2">
          {formattedTitle}
        </h1>
        <p className="text-text-secondary text-base max-w-sm mb-6">
          This section is currently under development. Please check back soon or visit Home and Contacts.
        </p>
      </div>
    </div>
  )
}
