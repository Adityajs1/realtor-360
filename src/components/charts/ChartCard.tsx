import React from 'react'
import { cn } from '@/lib/utils'

interface ChartCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-card-bg rounded-chart-card shadow-card p-card-p min-h-chart-card flex flex-col justify-between border border-divider/40',
        className
      )}
    >
      <h3 className="text-card-title text-text-primary mb-4 font-medium tracking-tight">
        {title}
      </h3>
      <div className="flex-1 w-full relative flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
