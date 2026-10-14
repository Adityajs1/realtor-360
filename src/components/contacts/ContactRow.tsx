import React from 'react'
import { StatusBadge } from '@/components/contacts/StatusBadge'
import { Contact } from '@/types'

interface ContactRowProps {
  contact: Contact
}

export const ContactRow: React.FC<ContactRowProps> = ({ contact }) => {
  return (
    <div className="flex items-center min-h-[137px] px-8 border-b border-divider/80 hover:bg-white/40 transition-colors">
      {/* 1. Contact Name & Email */}
      <div className="w-[26%] pr-4 flex flex-col justify-center">
        <span className="text-[23px] text-text-primary font-bold tracking-tight">
          {contact.name}
        </span>
        <span className="text-[16px] text-text-secondary mt-1 font-normal">
          Email: {contact.email}
        </span>
      </div>

      {/* 2. Company */}
      <div className="w-[16%] pr-4 text-[20px] text-text-primary font-normal">
        {contact.company}
      </div>

      {/* 3. Role */}
      <div className="w-[14%] pr-4 text-[20px] text-text-primary font-normal">
        {contact.role}
      </div>

      {/* 4. Phone No. */}
      <div className="w-[17%] pr-4 text-[20px] text-text-primary font-normal">
        {contact.phone}
      </div>

      {/* 5. Deal Stage */}
      <div className="w-[14%] pr-4 text-[20px] text-text-primary font-normal">
        {contact.dealStage}
      </div>

      {/* 6. Status */}
      <div className="w-[13%] flex items-center justify-start">
        <StatusBadge status={contact.status} />
      </div>
    </div>
  )
}
