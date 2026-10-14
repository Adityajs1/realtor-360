import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#C59F2A',
          active: '#B28F20',
          light: '#EEDFAF',
          medium: '#EBD17D',
          lightest: '#F6EFD7',
          subtle: '#FAF6E8',
        },
        page: {
          bg: '#F6F8FA',
        },
        card: {
          bg: '#FFFFFF',
        },
        sidebar: {
          bg: '#FFFFFF',
        },
        text: {
          primary: '#2C2C2C',
          secondary: '#777777',
          muted: '#8E8E93',
          inactive: '#2C2C2C',
        },
        input: {
          bg: '#F3F4F6',
          border: '#E5E7EB',
          placeholder: '#8E8E93',
        },
        trend: {
          greenBg: '#DAFFF7',
          greenText: '#00A389',
          redBg: '#FEF0F2',
          redText: '#C02547',
        },
        badge: {
          activeBg: '#E9F7EF',
          activeBorder: '#23D528',
          activeText: '#1E824C',
          inProgressBg: '#FFF9E6',
          inProgressBorder: '#F2D26D',
          inProgressText: '#B8860B',
          coldBg: '#F4F4F4',
          coldBorder: '#B9BABB',
          coldText: '#555555',
          convertedBg: '#E8F4FD',
          convertedBorder: '#3B82F6',
          convertedText: '#2563EB',
          notInterestedBg: '#FEECEB',
          notInterestedBorder: '#EF4444',
          notInterestedText: '#DC2626',
        },
        chart: {
          goldSolid: '#D4AF37',
          goldLight: '#EEDFAF',
          goldCream: '#F6EFD7',
          goldMedium: '#EBD17D',
        },
        divider: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'nav-item': ['18px', { lineHeight: '24px', fontWeight: '500' }],
        'stat-label': ['18px', { lineHeight: '24px', fontWeight: '500' }],
        'stat-value': ['38px', { lineHeight: '46px', fontWeight: '600' }],
        'trend-pill': ['13px', { lineHeight: '18px', fontWeight: '500' }],
        'card-title': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'sidebar-title': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'sidebar-section': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'sidebar-label': ['22px', { lineHeight: '30px', fontWeight: '400' }],
        'page-title': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'table-header': ['21px', { lineHeight: '28px', fontWeight: '600' }],
        'row-title': ['22px', { lineHeight: '30px', fontWeight: '700' }],
        'row-subtitle': ['16px', { lineHeight: '22px', fontWeight: '400' }],
        'row-cell': ['19px', { lineHeight: '26px', fontWeight: '400' }],
        'chart-label': ['13px', { lineHeight: '18px', fontWeight: '400' }],
      },
      spacing: {
        'nav-h': '95px',
        'active-tab-w': '95px',
        'active-tab-h': '62px',
        'content-px': '26px',
        'card-gap': '22px',
        'stat-icon-size': '58px',
        'sidebar-w': '440px',
        'card-p': '34px',
        'row-h': '137px',
      },
      borderRadius: {
        'stat-card': '24px',
        'chart-card': '24px',
        'active-tab': '12px',
        'create-btn': '8px',
        'table-header': '16px',
        'status-badge': '10px',
        'filter-input': '12px',
        'checkbox': '6px',
      },
      boxShadow: {
        'navbar': '0 2px 10px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 24px 0 rgba(0, 0, 0, 0.04)',
        'header-card': '0 2px 8px 0 rgba(0, 0, 0, 0.03)',
      },
      width: {
        'stat-card': '390px',
        'chart-card': '800px',
        'sidebar': '440px',
      },
      height: {
        'stat-card': '150px',
        'chart-card': '500px',
      },
    },
  },
  plugins: [],
}

export default config
