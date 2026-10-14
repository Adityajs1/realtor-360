import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import React from 'react'
import {
  ActiveLeadsIcon,
  ActiveListingIcon,
  TotalClosedIcon,
  TotalRevenueIcon,
} from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { StatCardData, StatIconType } from '@/types'

const renderIcon = (type: StatIconType) => {
  switch (type) {
    case 'listing':
      return <ActiveListingIcon className="w-7 h-7 text-gold" />
    case 'leads':
      return <ActiveLeadsIcon className="w-7 h-7 text-gold" />
    case 'closed':
      return <TotalClosedIcon className="w-7 h-7 text-gold" />
    case 'revenue':
      return <TotalRevenueIcon className="w-7 h-7 text-gold" />
  }
}

interface StatCardProps {
  data: StatCardData
}

export const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const isPositive = data.trendType === 'positive'

  return (
    <div className="bg-card-bg rounded-stat-card shadow-card p-6 min-h-stat-card flex flex-col justify-between border border-divider/40">
      {/* Top Row: Icon circle + Label */}
      <div className="flex items-center gap-4">
        <div className="w-stat-icon-size h-stat-icon-size rounded-full bg-page-bg flex items-center justify-center flex-shrink-0 shadow-inner">
          {renderIcon(data.icon)}
        </div>
        <span className="text-stat-label text-text-primary">
          {data.label}
        </span>
      </div>

      {/* Bottom Row: Large Value + Trend Pill */}
      <div className="flex items-center gap-3 mt-3">
        <span className="text-stat-value text-text-primary tracking-tight">
          {data.value}
        </span>
        <div
          className={cn(
            'inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full text-trend-pill font-medium',
            isPositive
              ? 'bg-trend-greenBg text-trend-greenText'
              : 'bg-trend-redBg text-trend-redText'
          )}
        >
          <span>{data.trend}</span>
          {isPositive ? (
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
        </div>
      </div>
    </div>
  )
}
