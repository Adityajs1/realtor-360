import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { StageDevelopmentData } from '@/types'

interface StagesChartProps {
  data: StageDevelopmentData[]
  xAxisTitle?: string
}

export const StagesChart: React.FC<StagesChartProps> = ({
  data,
  xAxisTitle = 'Stage',
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between pt-1 select-none">
      <div className="w-full h-[330px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 15, bottom: 45 }}
            barSize={44}
          >
            <CartesianGrid
              vertical={false}
              stroke="#D8DCE0"
              strokeDasharray=""
              strokeWidth={1}
            />
            <YAxis
              domain={[0, 10]}
              ticks={[0, 2.5, 5, 7.5, 10]}
              axisLine={{ stroke: '#6B7280', strokeWidth: 1 }}
              tickLine={false}
              tick={{ fill: '#2C2C2C', fontSize: 13 }}
              label={{
                value: 'Record Count',
                angle: -90,
                position: 'insideLeft',
                offset: 5,
                style: {
                  fill: '#2C2C2C',
                  fontSize: '14px',
                  fontWeight: 500,
                  textAnchor: 'middle',
                },
              }}
            />
            <XAxis
              dataKey="stage"
              axisLine={{ stroke: '#6B7280', strokeWidth: 1 }}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              interval={0}
              height={55}
              tick={{ fill: '#777777', fontSize: 11 }}
            />
            {/* Stacked Bars from bottom to top */}
            <Bar
              dataKey="angelPlaza"
              stackId="a"
              fill="#D4AF37"
              radius={[0, 0, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="angelGarden"
              stackId="a"
              fill="#EEDFAF"
              radius={[0, 0, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="none"
              stackId="a"
              fill="#F6EFD7"
              radius={[0, 0, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Axis title and Custom Legend at bottom matching screenshot */}
      <div className="w-full flex flex-col items-center mt-[-10px]">
        <span className="text-[14px] font-medium text-text-primary mb-3">
          {xAxisTitle}
        </span>

        {/* Legend at bottom with circular dots */}
        <div className="w-full flex items-center justify-start gap-8 pl-12 text-[14px] text-text-primary">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-chart-goldSolid inline-block" />
            <span>Angel Plaza</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-chart-goldLight inline-block" />
            <span>Angel Garden</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-chart-goldCream inline-block" />
            <span>None</span>
          </div>
        </div>
      </div>
    </div>
  )
}
