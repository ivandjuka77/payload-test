'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ApplyForm() {
  const t = useTranslations('careers.applyForm')

  return (
    <div className="sticky top-24">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold font-primary mb-6">{t('title')}</h3>
          <form className="space-y-4">
            <div>
              <Label htmlFor="quickName">{t('fields.fullName')}</Label>
              <Input id="quickName" required />
            </div>
            <div>
              <Label htmlFor="quickEmail">{t('fields.email')}</Label>
              <Input id="quickEmail" type="email" required />
            </div>
            <div>
              <Label htmlFor="quickPhone">{t('fields.phone')}</Label>
              <Input id="quickPhone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="quickCoverLetter">{t('fields.coverLetter')}</Label>
              <Textarea
                id="quickCoverLetter"
                rows={3}
                placeholder={t('fields.coverLetterPlaceholder')}
              />
            </div>
            <div>
              <Label htmlFor="quickCV">{t('fields.uploadCV')}</Label>
              <div className="mt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  {t('fields.chooseFile')}
                </Button>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {t('fields.fileInfo')}
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="quickGDPR" />
              <Label htmlFor="quickGDPR" className="text-xs leading-relaxed">
                {t('fields.gdprConsent')}
              </Label>
            </div>
            <Button type="submit" className="w-full">
              {t('submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
