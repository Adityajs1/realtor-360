import {
  Contact,
  LeadSourceData,
  StageDevelopmentData,
  StatCardData,
} from '@/types'

export const STAT_CARDS: StatCardData[] = [
  {
    id: 'active-listing',
    label: 'Active Listing',
    value: '23',
    trend: '-12%',
    trendType: 'negative',
    icon: 'listing',
  },
  {
    id: 'active-leads',
    label: 'Active Leads',
    value: '120',
    trend: '+12%',
    trendType: 'positive',
    icon: 'leads',
  },
  {
    id: 'total-closed',
    label: 'Total Closed',
    value: '42',
    trend: '+12%',
    trendType: 'positive',
    icon: 'closed',
  },
  {
    id: 'total-revenue',
    label: 'Total Revenue',
    value: 'Rs.22Cr.',
    trend: '+12%',
    trendType: 'positive',
    icon: 'revenue',
  },
]

export const LEAD_SOURCE_DATA: LeadSourceData[] = [
  {
    name: 'Inbound Call',
    count: 9,
    percentage: 37.87,
    color: '#F6EFD7',
  },
  {
    name: 'Website',
    count: 10,
    percentage: 24.83,
    color: '#EBD17D',
  },
  {
    name: 'Facebook',
    count: 1,
    percentage: 6.78,
    color: '#EEDFAF',
  },
  {
    name: 'Reference',
    count: 1,
    percentage: 30.6,
    color: '#D4AF37',
  },
]

export const STAGE_DEVELOPMENT_DATA: StageDevelopmentData[] = [
  {
    stage: 'Interested',
    angelPlaza: 3.0,
    angelGarden: 2.6,
    none: 2.3,
  },
  {
    stage: 'Site Visit Done',
    angelPlaza: 3.8,
    angelGarden: 3.3,
    none: 2.9,
  },
  {
    stage: 'Unit Shortlisted',
    angelPlaza: 3.5,
    angelGarden: 3.1,
    none: 2.6,
  },
  {
    stage: 'Contracts Signed',
    angelPlaza: 3.8,
    angelGarden: 3.3,
    none: 2.9,
  },
  {
    stage: 'Offer Initiated',
    angelPlaza: 3.1,
    angelGarden: 2.8,
    none: 2.4,
  },
  {
    stage: 'Offer Accepted',
    angelPlaza: 3.8,
    angelGarden: 3.3,
    none: 2.9,
  },
]

export const SALES_PEOPLE_DATA: StageDevelopmentData[] = [
  {
    stage: 'Jessica M.',
    angelPlaza: 4.2,
    angelGarden: 3.1,
    none: 2.1,
  },
  {
    stage: 'Mohit S.',
    angelPlaza: 3.5,
    angelGarden: 3.6,
    none: 2.4,
  },
  {
    stage: 'Arjun K.',
    angelPlaza: 3.9,
    angelGarden: 2.8,
    none: 3.0,
  },
  {
    stage: 'Priya R.',
    angelPlaza: 2.8,
    angelGarden: 3.4,
    none: 1.9,
  },
]

export const PIPELINE_DATA: StageDevelopmentData[] = [
  {
    stage: 'Discovery',
    angelPlaza: 2.9,
    angelGarden: 2.5,
    none: 2.2,
  },
  {
    stage: 'Evaluation',
    angelPlaza: 3.7,
    angelGarden: 3.2,
    none: 2.7,
  },
  {
    stage: 'Negotiation',
    angelPlaza: 3.4,
    angelGarden: 2.9,
    none: 2.4,
  },
  {
    stage: 'Closing',
    angelPlaza: 4.0,
    angelGarden: 3.5,
    none: 2.5,
  },
]

export const INITIAL_CONTACTS: Contact[] = [
  {
    id: 'c-1',
    name: 'John Doe',
    email: 'john@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Broker',
    phone: '+91 9411521487',
    dealStage: 'Negotiation',
    status: 'Active',
    assignedTo: 'Jessica',
  },
  {
    id: 'c-2',
    name: 'Ananya Verma',
    email: 'john@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Buyer',
    phone: '+91 9411521487',
    dealStage: 'Negotiation',
    status: 'In Progress',
    assignedTo: 'Mohit',
  },
  {
    id: 'c-3',
    name: 'Ravi Kapoor',
    email: 'john@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Developer',
    phone: '+91 9411521487',
    dealStage: 'Negotiation',
    status: 'Cold',
    assignedTo: 'Arjun',
  },
  {
    id: 'c-4',
    name: 'Emily Mehra',
    email: 'john@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Buyer',
    phone: '+91 9411521487',
    dealStage: 'Negotiation',
    status: 'Converted',
    assignedTo: 'Jessica',
  },
  {
    id: 'c-5',
    name: 'Vikram Seth',
    email: 'vikram@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Investor',
    phone: '+91 9812345678',
    dealStage: 'Unit Shortlisted',
    status: 'Active',
    assignedTo: 'Mohit',
  },
  {
    id: 'c-6',
    name: 'Sunita Rao',
    email: 'sunita@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Seller',
    phone: '+91 9723456789',
    dealStage: 'Offer Initiated',
    status: 'In Progress',
    assignedTo: 'Arjun',
  },
  {
    id: 'c-7',
    name: 'Rajesh Mehra',
    email: 'rajesh@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Broker',
    phone: '+91 9634567890',
    dealStage: 'Interested',
    status: 'Not Interested',
    assignedTo: 'Jessica',
  },
  {
    id: 'c-8',
    name: 'Pooja Agarwal',
    email: 'pooja@urbanrealty.com',
    company: 'Urban Realty',
    role: 'Buyer',
    phone: '+91 9545678901',
    dealStage: 'Contracts Signed',
    status: 'Converted',
    assignedTo: 'Mohit',
  },
]
