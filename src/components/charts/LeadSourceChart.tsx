import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export const LeadSourceChart: React.FC = () => {
  // Ordered to match design visual clockwise starting from top right:
  // 1. Inbound Call (top-right ~37.87%)
  // 2. Reference (bottom ~30.6%)
  // 3. Facebook (bottom-left ~6.78%)
  // 4. Website (top-left ~24.83%)
  const chartData = [
    { name: 'Inbound Call', value: 37.87, color: '#F6EFD7' },
    { name: 'Reference', value: 30.6, color: '#D4AF37' },
    { name: 'Facebook', value: 6.78, color: '#EBD17D' },
    { name: 'Website', value: 24.83, color: '#EEDFAF' },
  ]

  return (
    <div className="relative w-full h-[410px] flex items-center justify-center select-none">
      {/* Recharts Pie (Donut) Chart */}
      <div className="w-[380px] h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={72}
              outerRadius={145}
              startAngle={80}
              endAngle={-280}
              paddingAngle={0}
              dataKey="value"
              stroke="#FFFFFF"
              strokeWidth={1.5}
              isAnimationActive={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* SVG Overlay for curved callout arrows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 760 410"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Arrowhead marker styled exactly like the curved line sketch */}
          <marker
            id="arrowhead-curve"
            markerWidth="10"
            markerHeight="10"
            refX="7"
            refY="5"
            orient="auto"
          >
            <path
              d="M 2 2 L 8 5 L 2 8"
              fill="none"
              stroke="#555555"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Top-Right Arrow (from Inbound Call to top-right slice) */}
        <path
          d="M 525 210 C 495 200 470 215 452 225"
          fill="none"
          stroke="#555555"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-curve)"
        />

        {/* Bottom-Right Arrow (from Reference to bottom slice) */}
        <path
          d="M 540 320 C 500 335 465 330 432 322"
          fill="none"
          stroke="#555555"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-curve)"
        />

        {/* Bottom-Left Arrow (from Facebook to bottom-left slice) */}
        <path
          d="M 315 295 C 290 315 255 320 220 310"
          fill="none"
          stroke="#555555"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-curve)"
        />

        {/* Top-Left Arrow (from Website to top-left slice) */}
        <path
          d="M 315 220 C 290 205 255 205 225 220"
          fill="none"
          stroke="#555555"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrowhead-curve)"
        />
      </svg>

      {/* External Callout Labels matching design */}
      {/* 1. Website (Top Left) */}
      <div className="absolute top-[34%] left-[12%] text-center text-text-secondary text-[14px] leading-[19px]">
        <div className="font-normal text-text-secondary">Website</div>
        <div className="font-normal text-text-secondary">10 (24.83%)</div>
      </div>

      {/* 2. Facebook (Bottom Left) */}
      <div className="absolute bottom-[23%] left-[12%] text-center text-text-secondary text-[14px] leading-[19px]">
        <div className="font-normal text-text-secondary">Facebook</div>
        <div className="font-normal text-text-secondary">1 (6.78%)</div>
      </div>

      {/* 3. Inbound Call (Top Right) */}
      <div className="absolute top-[34%] right-[12%] text-center text-text-secondary text-[14px] leading-[19px]">
        <div className="font-normal text-text-secondary">Inbound Call</div>
        <div className="font-normal text-text-secondary">9 (37.87%)</div>
      </div>

      {/* 4. Reference (Bottom Right) */}
      <div className="absolute bottom-[23%] right-[12%] text-center text-text-secondary text-[14px] leading-[19px]">
        <div className="font-normal text-text-secondary">Reference</div>
        <div className="font-normal text-text-secondary">1 (30.6%)</div>
      </div>
    </div>
  )
}
