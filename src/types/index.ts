export type TrendType = 'positive' | 'negative'

export type StatIconType = 'listing' | 'leads' | 'closed' | 'revenue'

export interface StatCardData {
  id: string
  label: string
  value: string
  trend: string
  trendType: TrendType
  icon: StatIconType
}

export interface LeadSourceData {
  name: string
  count: number
  percentage: number
  color: string
}

export interface StageDevelopmentData {
  stage: string
  angelPlaza: number
  angelGarden: number
  none: number
}

export type ContactStatus = 'Active' | 'In Progress' | 'Converted' | 'Cold' | 'Not Interested'
export type ContactRole = 'Buyer' | 'Seller' | 'Investor' | 'Broker' | 'Developer'
export type AssignedAgent = 'Jessica' | 'Mohit' | 'Arjun'

export interface Contact {
  id: string
  name: string
  email: string
  company: string
  role: ContactRole
  phone: string
  dealStage: string
  status: ContactStatus
  assignedTo: AssignedAgent
}

export interface ContactFilterState {
  search: string
  tableSearch: string
  status: ContactStatus[]
  role: ContactRole[]
  assignedTo: AssignedAgent[]
}
