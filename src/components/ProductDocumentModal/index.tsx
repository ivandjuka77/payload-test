'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Product } from '@/payload-types'
import { Mail, Building, User, Download, FileText } from 'lucide-react'
import { toast } from 'sonner'

interface ProductDocumentModalProps {
  product: Product
  documentType: 'tds' | 'sds'
  documentUrl: string
  onClose: () => void
  isOpen: boolean
}

export function ProductDocumentModal({
  product,
  documentType,
  documentUrl,
  onClose,
  isOpen,
}: ProductDocumentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const downloadDocument = (url: string, filename: string) => {
    try {
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback to opening in new tab
      window.open(url, '_blank')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.position) {
      toast.error('Please fill in all required fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission (you can add actual API call here)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Generate filename based on product and document type
      const documentTypeText = documentType === 'tds' ? 'TDS' : 'SDS'
      const filename = `${product.name}_${documentTypeText}.pdf`

      // Download the document
      downloadDocument(documentUrl, filename)

      toast.success('Document download started!', {
        description: `${documentTypeText} for ${product.name} is being downloaded.`,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
      })

      // Close modal after successful download
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to process request', {
        description: 'An unexpected error occurred. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const documentTypeText = documentType === 'tds' ? 'Technical Data Sheet' : 'Safety Data Sheet'
  const documentTypeAbbr = documentType.toUpperCase()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto px-2 sm:px-4 lg:px-6">
        <DialogHeader className="space-y-3 pb-4 sm:pb-6 border-b border-gray-200">
          <DialogTitle className="text-lg sm:text-xl font-bold font-primary flex items-center gap-2">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            Download {documentTypeAbbr}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-start">
            To download the <span className="font-semibold text-primary">{documentTypeText}</span>{' '}
            for <span className="font-semibold text-primary">{product.name}</span>, please provide
            your information below.
          </DialogDescription>
        </DialogHeader>

        {/* Compact Product Summary */}
        <div className="mt-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                {product.technicalSpecifications?.casNumber && (
                  <p className="text-xs text-gray-600 font-mono">
                    CAS: {product.technicalSpecifications.casNumber}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-gray-700">{documentTypeAbbr}</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Personal Information Section */}
          <div className="border-b border-gray-200 pb-4 sm:pb-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <User className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs sm:text-sm">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="h-8 sm:h-9 text-sm"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs sm:text-sm flex items-center gap-1">
                  <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                  className="h-8 sm:h-9 text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="border-b border-gray-200 pb-4 sm:pb-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <Building className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              Company Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-1">
                <Label htmlFor="company" className="text-xs sm:text-sm">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name"
                  className="h-8 sm:h-9 text-sm"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="position" className="text-xs sm:text-sm">
                  Position *
                </Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  placeholder="Your job title/position"
                  className="h-8 sm:h-9 text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 h-9 sm:h-10 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download {documentTypeAbbr}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
