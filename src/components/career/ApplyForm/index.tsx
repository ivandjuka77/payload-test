'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

export default function ApplyForm() {
  return (
    <div className="sticky top-24">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold font-primary mb-6">Quick Apply</h3>
          <form className="space-y-4">
            <div>
              <Label htmlFor="quickName">Full Name *</Label>
              <Input id="quickName" required />
            </div>
            <div>
              <Label htmlFor="quickEmail">Email *</Label>
              <Input id="quickEmail" type="email" required />
            </div>
            <div>
              <Label htmlFor="quickPhone">Phone *</Label>
              <Input id="quickPhone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="quickCoverLetter">Cover Letter</Label>
              <Textarea
                id="quickCoverLetter"
                rows={3}
                placeholder="Brief message about your interest in this position..."
              />
            </div>
            <div>
              <Label htmlFor="quickCV">Upload CV *</Label>
              <div className="mt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Choose File
                </Button>
                <span className="text-xs text-muted-foreground mt-1 block">
                  PDF or Word (max 5MB)
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="quickGDPR" />
              <Label htmlFor="quickGDPR" className="text-xs leading-relaxed">
                I consent to the processing of my personal data for this job application in
                accordance with GDPR regulations.
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
