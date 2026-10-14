import { Plus, Search } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import { ContactsSidebar } from '@/components/contacts/ContactsSidebar'
import { ContactsTable } from '@/components/contacts/ContactsTable'
import { CreateContactModal } from '@/components/contacts/CreateContactModal'
import { INITIAL_CONTACTS } from '@/data/mockData'
import { Contact, ContactFilterState } from '@/types'

export const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_CONTACTS)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [filters, setFilters] = useState<ContactFilterState>({
    search: '',
    tableSearch: '',
    status: [],
    role: [],
    assignedTo: [],
  })

  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      // 1. Sidebar Search by Contact Name / Email
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase()
        const matchName = c.name.toLowerCase().includes(query)
        const matchEmail = c.email.toLowerCase().includes(query)
        if (!matchName && !matchEmail) return false
      }

      // 2. Table Search
      if (filters.tableSearch.trim()) {
        const query = filters.tableSearch.toLowerCase()
        const matchAny =
          c.name.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query) ||
          c.company.toLowerCase().includes(query) ||
          c.role.toLowerCase().includes(query) ||
          c.phone.toLowerCase().includes(query) ||
          c.dealStage.toLowerCase().includes(query)
        if (!matchAny) return false
      }

      // 3. Status Filter (OR within group, AND across groups)
      if (filters.status.length > 0 && !filters.status.includes(c.status)) {
        return false
      }

      // 4. Role Filter
      if (filters.role.length > 0 && !filters.role.includes(c.role)) {
        return false
      }

      // 5. Assigned To Filter
      if (
        filters.assignedTo.length > 0 &&
        !filters.assignedTo.includes(c.assignedTo)
      ) {
        return false
      }

      return true
    })
  }, [contacts, filters])

  const handleAddContact = (newContact: Contact) => {
    setContacts((prev) => [newContact, ...prev])
  }

  return (
    <div className="w-full flex min-h-[calc(100vh-95px)] bg-page-bg">
      {/* Left Column: Filters Sidebar */}
      <ContactsSidebar filters={filters} onFilterChange={setFilters} />

      {/* Right Column: Main Content */}
      <main className="flex-1 px-10 py-8 flex flex-col overflow-x-auto">
        {/* Page Title: "All Contacts" */}
        <h1 className="text-page-title text-text-primary tracking-tight">
          All Contacts
        </h1>

        {/* Action Bar: "+ Create Contact" on left, "Search Contact" on right */}
        <div className="flex items-center justify-between mt-5 mb-5">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 h-[44px] rounded-create-btn bg-gold hover:bg-gold-hover active:bg-gold-active text-white text-[16px] font-medium shadow-sm transition-colors"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
            <span>Create Contact</span>
          </button>

          {/* Search Contact input */}
          <div className="relative w-[340px]">
            <input
              type="text"
              value={filters.tableSearch}
              onChange={(e) =>
                setFilters({ ...filters, tableSearch: e.target.value })
              }
              placeholder="Search Contact"
              className="w-full h-[44px] pl-4 pr-11 rounded-filter-input bg-[#EEEEEE] text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all border border-transparent focus:border-gold"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none stroke-[2.2]" />
          </div>
        </div>

        {/* 1px divider */}
        <div className="w-full h-[1px] bg-divider mb-6" />

        {/* Contacts Table */}
        <ContactsTable contacts={filteredContacts} />
      </main>

      {/* Create Contact Dialog */}
      <CreateContactModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAddContact={handleAddContact}
      />
    </div>
  )
}
