import React from 'react'

export const RealtorLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Realtor360 Logo Icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer oval / rounded stadium shape */}
        <ellipse
          cx="19"
          cy="19"
          rx="17"
          ry="17"
          stroke="#D4AF37"
          strokeWidth="2.5"
        />
        {/* Center vertical bar */}
        <line
          x1="19"
          y1="5"
          x2="19"
          y2="33"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Left inner curved line / bar */}
        <path
          d="M 12 7.5 C 9 12 9 26 12 30.5"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Right inner curved line / bar */}
        <path
          d="M 26 7.5 C 29 12 29 26 26 30.5"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      {/* Wordmark */}
      <span className="text-[25px] font-bold tracking-tight text-text-primary uppercase font-sans">
        REALTOR360
      </span>
    </div>
  )
}

export const ActiveListingIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gold ${className}`}
  >
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
)

export const ActiveLeadsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gold ${className}`}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

export const TotalClosedIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gold ${className}`}
  >
    {/* Handshake icon */}
    <path d="M18.5 7.5c-.8 0-1.5.3-2 .8L15 9.8l-1.5-1.5c-.5-.5-1.2-.8-2-.8s-1.5.3-2 .8L8 9.8 4.2 6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.5 4.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.8-2.8 1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4 2.8 2.8c.2.2.4.3.7.3.3 0 .5-.1.7-.3l4.5-4.5c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L18.5 7.5zM20 14h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H6v2h2v-2z" />
  </svg>
)

export const TotalRevenueIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gold ${className}`}
  >
    {/* Two overlapping stacked coins */}
    <ellipse cx="9" cy="7" rx="6" ry="3" />
    <path d="M3 7v3c0 1.66 2.69 3 6 3s6-1.34 6-3V7c0 1.66-2.69 3-6 3S3 8.66 3 7z" />
    <ellipse cx="15" cy="14" rx="6" ry="3" />
    <path d="M9 14v3c0 1.66 2.69 3 6 3s6-1.34 6-3v-3c0 1.66-2.69 3-6 3s-6-1.34-6-3z" />
  </svg>
)
