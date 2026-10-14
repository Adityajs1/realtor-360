import React from 'react'
import { cn } from '@/lib/utils'
import { ContactStatus } from '@/types'

interface StatusBadgeProps {
  status: ContactStatus
  className?: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStyles = (status: ContactStatus) => {
    switch (status) {
      case 'Active':
        return 'bg-badge-activeBg border-badge-activeBorder text-badge-activeText'
      case 'In Progress':
        return 'bg-badge-inProgressBg border-badge-inProgressBorder text-badge-inProgressText'
      case 'Cold':
        return 'bg-badge-coldBg border-badge-coldBorder text-badge-coldText'
      case 'Converted':
        return 'bg-badge-convertedBg border-badge-convertedBorder text-badge-convertedText'
      case 'Not Interested':
        return 'bg-badge-notInterestedBg border-badge-notInterestedBorder text-badge-notInterestedText'
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700'
    }
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-4 py-1.5 text-[15px] font-medium border rounded-status-badge min-w-[110px] text-center select-none shadow-sm',
        getStyles(status),
        className
      )}
    >
      {status}
    </span>
  )
}
