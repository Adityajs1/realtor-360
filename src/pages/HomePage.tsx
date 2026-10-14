import React from 'react'
import { ChartCard } from '@/components/charts/ChartCard'
import { LeadSourceChart } from '@/components/charts/LeadSourceChart'
import { StagesChart } from '@/components/charts/StagesChart'
import { StatCard } from '@/components/ui/StatCard'
import {
  PIPELINE_DATA,
  SALES_PEOPLE_DATA,
  STAGE_DEVELOPMENT_DATA,
  STAT_CARDS,
} from '@/data/mockData'

export const HomePage: React.FC = () => {
  return (
    <div className="w-full px-content-px py-6 max-w-[1920px] mx-auto flex flex-col space-y-card-gap">
      {/* Row 1: Four Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-card-gap">
        {STAT_CARDS.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      {/* Row 2: Deals by Lead Source & Deals by Stages by Development */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-card-gap">
        <ChartCard title="Deals by Lead Source">
          <LeadSourceChart />
        </ChartCard>

        <ChartCard title="Deals by Stages by Development">
          <StagesChart data={STAGE_DEVELOPMENT_DATA} xAxisTitle="Stage" />
        </ChartCard>
      </div>

      {/* Row 3: Matching chart style for Sales People and Pipeline */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-card-gap pb-10">
        <ChartCard title="Deals by Sales People by Development">
          <StagesChart data={SALES_PEOPLE_DATA} xAxisTitle="Sales Person" />
        </ChartCard>

        <ChartCard title="Deals in Pipeline by Development">
          <StagesChart data={PIPELINE_DATA} xAxisTitle="Pipeline Phase" />
        </ChartCard>
      </div>
    </div>
  )
}
