import React from 'react'
import { ContactRow } from '@/components/contacts/ContactRow'
import { Contact } from '@/types'

interface ContactsTableProps {
  contacts: Contact[]
}

export const ContactsTable: React.FC<ContactsTableProps> = ({ contacts }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Table Header: White Rounded Card */}
      <div className="w-full bg-white rounded-table-header shadow-header-card h-[64px] px-8 flex items-center border border-divider/40 select-none">
        <div className="w-[26%] pr-4 text-table-header text-text-primary">
          Contact Name
        </div>
        <div className="w-[16%] pr-4 text-table-header text-text-primary">
          Company
        </div>
        <div className="w-[14%] pr-4 text-table-header text-text-primary">
          Role
        </div>
        <div className="w-[17%] pr-4 text-table-header text-text-primary">
          Phone No.
        </div>
        <div className="w-[14%] pr-4 text-table-header text-text-primary">
          Deal Stage
        </div>
        <div className="w-[13%] text-table-header text-text-primary">
          Status
        </div>
      </div>

      {/* Table Rows */}
      <div className="w-full mt-2 flex flex-col">
        {contacts.length === 0 ? (
          <div className="py-20 text-center text-text-secondary text-lg">
            No contacts match the selected filters.
          </div>
        ) : (
          contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))
        )}
      </div>
    </div>
  )
}
