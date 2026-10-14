import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import {
  AssignedAgent,
  Contact,
  ContactRole,
  ContactStatus,
} from '@/types'

interface CreateContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddContact: (contact: Contact) => void
}

export const CreateContactModal: React.FC<CreateContactModalProps> = ({
  open,
  onOpenChange,
  onAddContact,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('Urban Realty')
  const [role, setRole] = useState<ContactRole>('Buyer')
  const [phone, setPhone] = useState('+91 ')
  const [dealStage, setDealStage] = useState('Negotiation')
  const [status, setStatus] = useState<ContactStatus>('Active')
  const [assignedTo, setAssignedTo] = useState<AssignedAgent>('Jessica')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    const newContact: Contact = {
      id: `c-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || 'Urban Realty',
      role,
      phone: phone.trim() || '+91 9411521487',
      dealStage,
      status,
      assignedTo,
    }

    onAddContact(newContact)
    // Reset form
    setName('')
    setEmail('')
    setCompany('Urban Realty')
    setRole('Buyer')
    setPhone('+91 ')
    setDealStage('Negotiation')
    setStatus('Active')
    setAssignedTo('Jessica')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px]">
        <DialogHeader>
          <DialogTitle>Create New Contact</DialogTitle>
          <DialogDescription>
            Enter contact details below to add them to your Realtor360 contacts list.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. john@urbanrealty.com"
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Company
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Urban Realty"
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9411521487"
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as ContactRole)}
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
                <option value="Investor">Investor</option>
                <option value="Broker">Broker</option>
                <option value="Developer">Developer</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ContactStatus)}
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option value="Active">Active</option>
                <option value="In Progress">In Progress</option>
                <option value="Converted">Converted</option>
                <option value="Cold">Cold</option>
                <option value="Not Interested">Not Interested</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Deal Stage
              </label>
              <select
                value={dealStage}
                onChange={(e) => setDealStage(e.target.value)}
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option value="Negotiation">Negotiation</option>
                <option value="Interested">Interested</option>
                <option value="Site Visit Done">Site Visit Done</option>
                <option value="Unit Shortlisted">Unit Shortlisted</option>
                <option value="Contracts Signed">Contracts Signed</option>
                <option value="Offer Initiated">Offer Initiated</option>
                <option value="Offer Accepted">Offer Accepted</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">
                Assigned To
              </label>
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value as AssignedAgent)}
                className="w-full h-11 px-3.5 rounded-create-btn bg-[#F3F4F6] border border-divider text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <option value="Jessica">Jessica</option>
                <option value="Mohit">Mohit</option>
                <option value="Arjun">Arjun</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-divider">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-5 py-2.5 rounded-create-btn text-sm font-medium text-text-primary hover:bg-page-bg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-create-btn bg-gold hover:bg-gold-hover text-white text-sm font-medium shadow-sm transition-colors"
            >
              Add Contact
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
