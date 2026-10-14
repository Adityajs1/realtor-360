import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export const LeadSourceChart: React.FC = () => {
  // Ordered to match design visual clockwise starting from top:
  // Inbound Call (top-right ~37.87%)
  // Reference (bottom-right ~30.6%)
  // Facebook (bottom-left ~6.78%)
  // Website (top-left ~24.83%)
  const chartData = [
    { name: 'Inbound Call', value: 37.87, color: '#F6EFD7' },
    { name: 'Reference', value: 30.6, color: '#D4AF37' },
    { name: 'Facebook', value: 6.78, color: '#EBD17D' },
    { name: 'Website', value: 24.83, color: '#EEDFAF' },
  ]

  return (
    <div className="relative w-full h-[380px] flex items-center justify-center select-none">
      {/* Recharts Pie (Donut) Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={68}
            outerRadius={140}
            startAngle={75}
            endAngle={-285}
            paddingAngle={0}
            dataKey="value"
            stroke="#FFFFFF"
            strokeWidth={1}
            isAnimationActive={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* SVG Overlay for curved callout arrows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 700 380"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead-gray"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="#606060" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Top-Right Arrow (pointing to Inbound Call) */}
        <path
          d="M 505 180 C 475 170 450 185 435 195"
          fill="none"
          stroke="#606060"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-gray)"
        />

        {/* Bottom-Right Arrow (pointing to Reference) */}
        <path
          d="M 525 285 C 490 295 465 290 435 285"
          fill="none"
          stroke="#606060"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-gray)"
        />

        {/* Bottom-Left Arrow (pointing to Facebook) */}
        <path
          d="M 285 265 C 265 280 235 285 210 280"
          fill="none"
          stroke="#606060"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-gray)"
        />

        {/* Top-Left Arrow (pointing to Website) */}
        <path
          d="M 285 195 C 265 180 235 180 215 195"
          fill="none"
          stroke="#606060"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-gray)"
        />
      </svg>

      {/* External Callout Labels matching design exactly */}
      {/* 1. Website (Top Left) */}
      <div className="absolute top-[38%] left-[14%] text-center text-text-secondary text-[13px] leading-[18px]">
        <div className="font-normal">Website</div>
        <div className="font-normal">10 (24.83%)</div>
      </div>

      {/* 2. Facebook (Bottom Left) */}
      <div className="absolute bottom-[20%] left-[13%] text-center text-text-secondary text-[13px] leading-[18px]">
        <div className="font-normal">Facebook</div>
        <div className="font-normal">1 (6.78%)</div>
      </div>

      {/* 3. Inbound Call (Top Right) */}
      <div className="absolute top-[38%] right-[14%] text-center text-text-secondary text-[13px] leading-[18px]">
        <div className="font-normal">Inbound Call</div>
        <div className="font-normal">9 (37.87%)</div>
      </div>

      {/* 4. Reference (Bottom Right) */}
      <div className="absolute bottom-[20%] right-[13%] text-center text-text-secondary text-[13px] leading-[18px]">
        <div className="font-normal">Reference</div>
        <div className="font-normal">1 (30.6%)</div>
      </div>
    </div>
  )
}
