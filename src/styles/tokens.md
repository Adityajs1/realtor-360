# Realtor360 Design Tokens

Extracted from Figma design screens (Home Dashboard & All Contacts) for pixel-accurate replication.

## 1. Color Palette

### Brand & Primary
- **Primary Gold**: `#D4AF37` (used for active nav tab, buttons, logo mark, primary chart bar series "Angel Plaza", primary donut slice)
- **Primary Gold Hover**: `#C59F2A`
- **Primary Gold Active**: `#B28F20`
- **Chart Tint Light Gold**: `#EEDFAF` (used for "Angel Garden" bar series, donut slice)
- **Chart Tint Medium Gold**: `#EBD17D` (used for "Website" donut slice)
- **Chart Tint Lightest Cream**: `#F6EFD7` (used for "None" bar series, "Inbound Call" donut slice)
- **Subtle Gold Tint**: `#FAF6E8`

### Backgrounds & Surfaces
- **Page Background**: `#F6F8FA`
- **Card Background**: `#FFFFFF`
- **Sidebar Background**: `#FFFFFF`
- **Stat Icon Circle Background**: `#F6F8FA`
- **Input Background**: `#F3F4F6`

### Text Colors
- **Text Primary (Dark)**: `#2C2C2C` (Headings, active labels, table headers, contact names, stat numbers)
- **Text Secondary (Muted)**: `#777777` (Subheadings, emails, chart labels, legend labels)
- **Text Placeholder**: `#8E8E93`
- **Text Inactive Nav**: `#2C2C2C`

### Trend Indicator Pills
- **Positive / Up Trend**:
  - Background: `#DAFFF7`
  - Text: `#00A389`
  - Icon: ArrowUpRight
- **Negative / Down Trend**:
  - Background: `#FEF0F2`
  - Text: `#C02547`
  - Icon: ArrowDownRight

### Status Badges
- **Active**:
  - Background: `#E9F7EF`
  - Border: `#23D528`
  - Text: `#1E824C`
- **In Progress**:
  - Background: `#FFF9E6`
  - Border: `#F2D26D`
  - Text: `#B8860B`
- **Cold**:
  - Background: `#F4F4F4`
  - Border: `#B9BABB`
  - Text: `#555555`
- **Converted**:
  - Background: `#E8F4FD`
  - Border: `#3B82F6`
  - Text: `#2563EB`
- **Not Interested**:
  - Background: `#FEECEB`
  - Border: `#EF4444`
  - Text: `#DC2626`

---

## 2. Typography

Font Family: `Inter`, sans-serif (imported via `@fontsource/inter` weights 400, 500, 600, 700)

| Element | Font Size | Line Height | Weight | Color |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar Link** | 18px | 24px | Medium (500) | `#2C2C2C` / `#FFFFFF` on active |
| **Stat Card Label** | 18px | 24px | Medium (500) | `#2C2C2C` |
| **Stat Card Value** | 38px | 46px | SemiBold (600) | `#2C2C2C` |
| **Trend Pill Text** | 13px | 18px | Medium (500) | `#00A389` / `#C02547` |
| **Chart Card Title** | 28px | 36px | Medium (500) | `#2C2C2C` |
| **Sidebar Title (Filters)** | 36px | 44px | SemiBold (600) | `#2C2C2C` |
| **Sidebar Section Heading** | 32px | 40px | Medium (500) | `#2C2C2C` |
| **Sidebar Checkbox Label** | 22px | 30px | Regular (400) | `#2C2C2C` |
| **Page Title (All Contacts)**| 40px | 48px | Bold (700) | `#2C2C2C` |
| **Table Header** | 21px | 28px | SemiBold (600) | `#2C2C2C` |
| **Row Contact Name** | 22px | 30px | Bold (700) | `#2C2C2C` |
| **Row Email Subline** | 16px | 22px | Regular (400) | `#777777` |
| **Row Cell Text** | 19px | 26px | Regular (400) | `#2C2C2C` |
| **Chart External Callouts** | 13px | 18px | Regular (400) | `#777777` |

---

## 3. Spacing & Sizing

- **Navbar Height**: `95px`
- **Active Tab Dimensions**: `width: ~95px`, `height: 62px`, `border-radius: 12px`
- **Page Horizontal Padding**: `26px`
- **Grid Gap Between Cards**: `22px`
- **Stat Cards**:
  - Min height: `150px`
  - Border radius: `24px`
  - Inner padding: `22px`
  - Icon container size: `58px` circle
- **Chart Cards**:
  - Min height: `500px`
  - Border radius: `24px`
  - Inner padding: `34px`
- **Filter Sidebar**:
  - Width: `440px`
  - Padding: `32px`
- **Table Row Height**: `~137px`
- **Table Header Height**: `64px`, `border-radius: 16px`
- **Button "+ Create Contact"**: `height: 46px`, `border-radius: 8px`
- **Inputs**: `height: 50px`, `border-radius: 12px`

---

## 4. Shadows & Borders

- **Navbar Shadow**: `0 2px 10px 0 rgba(0, 0, 0, 0.04)`
- **Card Shadow**: `0 4px 24px 0 rgba(0, 0, 0, 0.04)`
- **Header Card Shadow**: `0 2px 8px 0 rgba(0, 0, 0, 0.03)`
- **Row Divider**: `1px solid #E5E7EB`
- **Sidebar Right Border**: `1px solid #E5E7EB`
