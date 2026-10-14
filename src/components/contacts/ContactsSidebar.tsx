import { Search } from 'lucide-react'
import React from 'react'
import { FilterGroup } from '@/components/contacts/FilterGroup'
import {
  AssignedAgent,
  ContactFilterState,
  ContactRole,
  ContactStatus,
} from '@/types'

const STATUS_OPTIONS: ContactStatus[] = [
  'Active',
  'In Progress',
  'Converted',
  'Cold',
  'Not Interested',
]

const ROLE_OPTIONS: ContactRole[] = ['Buyer', 'Seller', 'Investor', 'Broker']

const AGENT_OPTIONS: AssignedAgent[] = ['Jessica', 'Mohit', 'Arjun']

interface ContactsSidebarProps {
  filters: ContactFilterState
  onFilterChange: (filters: ContactFilterState) => void
}

export const ContactsSidebar: React.FC<ContactsSidebarProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <aside className="w-sidebar w-[440px] flex-shrink-0 bg-white border-r border-divider min-h-screen px-9 py-8 flex flex-col space-y-7">
      {/* Centered Heading */}
      <h2 className="text-sidebar-title font-semibold text-text-primary text-center tracking-tight">
        Filters
      </h2>

      {/* Search Input with search icon on the right */}
      <div className="relative w-full">
        <input
          type="text"
          value={filters.search}
          onChange={(e) =>
            onFilterChange({ ...filters, search: e.target.value })
          }
          placeholder="Search by Contact Name"
          className="w-full h-[50px] pl-4 pr-12 rounded-filter-input bg-[#F3F4F6] text-[16px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all border border-transparent focus:border-gold"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none stroke-[2.2]" />
      </div>

      {/* Filter Sections */}
      <div className="flex flex-col space-y-7 pt-2">
        <FilterGroup
          title="Status"
          options={STATUS_OPTIONS}
          selected={filters.status}
          onChange={(status) => onFilterChange({ ...filters, status })}
        />

        <FilterGroup
          title="Role"
          options={ROLE_OPTIONS}
          selected={filters.role}
          onChange={(role) => onFilterChange({ ...filters, role })}
        />

        <FilterGroup
          title="Assigned To"
          options={AGENT_OPTIONS}
          selected={filters.assignedTo}
          onChange={(assignedTo) => onFilterChange({ ...filters, assignedTo })}
        />
      </div>
    </aside>
  )
}
