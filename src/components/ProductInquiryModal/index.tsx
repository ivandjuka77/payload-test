'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Product } from '@/payload-types'
import { Mail, Building, User, Phone, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'
import { submitProductInquiry } from '@/actions/productActions'

interface ProductInquiryModalProps {
  product: Product
}

export function ProductInquiryModal({ product }: ProductInquiryModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    inquiryType: '',
    quantity: '',
    message: `I am interested in ordering ${product.name}${
      product.technicalSpecifications?.casNumber
        ? ` (CAS: ${product.technicalSpecifications.casNumber})`
        : ''
    }. Please provide pricing information, availability, and delivery details for this product.`,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!formData.inquiryType) {
      toast.error('Please select an inquiry type')
      return
    }

    setIsSubmitting(true)

    try {
      const inquiryData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        country: formData.country,
        inquiryType: formData.inquiryType,
        quantity: formData.quantity,
        message: formData.message,
        productId: product.id,
        productName: product.name,
      }

      const result = await submitProductInquiry(inquiryData)

      if (result.success) {
        toast.success('Inquiry submitted successfully!', {
          description: result.message,
        })

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          country: '',
          inquiryType: '',
          quantity: '',
          message: `I am interested in ordering ${product.name}${
            product.technicalSpecifications?.casNumber
              ? ` (CAS: ${product.technicalSpecifications.casNumber})`
              : ''
          }. Please provide pricing information, availability, and delivery details for this product.`,
        })
      } else {
        toast.error('Failed to submit inquiry', {
          description: result.message,
        })
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      toast.error('Failed to submit inquiry', {
        description: 'An unexpected error occurred. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto px-2 sm:px-4 lg:px-6">
      <DialogHeader className="space-y-3 pb-4 sm:pb-6 border-b border-gray-200">
        <DialogTitle className="text-lg sm:text-xl font-bold font-primary flex items-center gap-2">
          <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          Product Inquiry
        </DialogTitle>
        <DialogDescription className="text-xs sm:text-sm text-start">
          Submit your inquiry for <span className="font-semibold text-primary">{product.name}</span>
          . Our team will respond with information regarding your request.
        </DialogDescription>
      </DialogHeader>

      {/* Compact Product Summary for Mobile/Tablet */}
      <div className="lg:hidden mt-4 mb-6">
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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Main Form - Takes full width on mobile/tablet, 2/3 on desktop */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Personal Information Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-xs sm:text-sm">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                    className="h-8 sm:h-9 text-sm"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-xs sm:text-sm">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
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
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs sm:text-sm flex items-center gap-1">
                    <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-8 sm:h-9 text-sm"
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
                  <Label htmlFor="jobTitle" className="text-xs sm:text-sm">
                    Job Title
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    placeholder="Your position"
                    className="h-8 sm:h-9 text-sm"
                  />
                </div>
                <div className="space-y-1 col-span-1 sm:col-span-2">
                  <Label htmlFor="inquiryType" className="text-xs sm:text-sm">
                    Inquiry Type *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger className="h-8 sm:h-9 text-xs sm:text-sm">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="samples">Sample Request</SelectItem>
                      <SelectItem value="bulk">Bulk Order</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="custom">Custom Synthesis</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-5">
              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs sm:text-sm">
                  Additional Information *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Additional details about your inquiry..."
                  rows={3}
                  className="text-xs sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 h-9 sm:h-10 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </div>
          </form>
        </div>

        {/* Product Summary Sidebar - Hidden on mobile/tablet, shown on desktop */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-4 border sticky top-0">
            <h4 className="font-semibold text-sm text-gray-900 mb-3 border-b border-gray-200 pb-2">
              Product Summary
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Product:</span>
                <p className="mt-1">{product.name}</p>
              </div>
              {product.technicalSpecifications?.casNumber && (
                <div className="border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-900">CAS Number:</span>
                  <p className="mt-1 font-mono text-primary">
                    {product.technicalSpecifications.casNumber}
                  </p>
                </div>
              )}
              {product.description && (
                <div className="border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-900">Description:</span>
                  <p className="mt-1 text-xs leading-relaxed">{product.description}</p>
                </div>
              )}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div>
                  <span className="font-medium text-gray-900">Key Properties:</span>
                  <div className="mt-1 space-y-1">
                    {product.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <p key={idx} className="text-xs text-gray-600">
                        • {feature.feature}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
