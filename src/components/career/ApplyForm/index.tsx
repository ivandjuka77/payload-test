'use client'

import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Upload, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { submitCareerApplication } from '@/actions/productActions'

export default function ApplyForm() {
  const t = useTranslations('careers.applyForm')

  const formMethods = useForm()
  const { handleSubmit, register } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()

  const onSubmit = useCallback((data: Record<string, unknown>) => {
    let loadingTimerID: ReturnType<typeof setTimeout>
    const submitForm = async () => {
      setError(undefined)

      // delay loading indicator by 1s
      loadingTimerID = setTimeout(() => {
        setIsLoading(true)
      }, 1000)

      try {
        const result = await submitCareerApplication({
          fullName: data.fullName as string,
          email: data.email as string,
          phone: data.phone as string,
          coverLetter: data.coverLetter as string | undefined,
          gdprConsent: Boolean(data.gdprConsent),
        })

        clearTimeout(loadingTimerID)
        setIsLoading(false)

        if (!result.success) {
          setError({
            message: result.message,
          })
          return
        }

        setHasSubmitted(true)
      } catch (err) {
        console.warn(err)
        clearTimeout(loadingTimerID)
        setIsLoading(false)
        setError({
          message: 'Something went wrong.',
        })
      }
    }

    void submitForm()
  }, [])

  return (
    <div className="sticky top-24">
      <Card>
        <CardContent className="p-6">
          {isLoading && !hasSubmitted && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-6">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/30 border-t-primary"></div>
                <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
              </div>
              <p className="text-slate-600 font-medium font-secondary">
                Submitting your application...
              </p>
              <p className="text-sm text-slate-400 mt-2 font-secondary">Please wait a moment</p>
            </div>
          )}

          {!isLoading && hasSubmitted && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-green-600 animate-in zoom-in duration-300 delay-200" />
                </div>
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-3xl font-bold mb-3 font-primary bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Application Submitted!
              </h3>
              <p className="text-slate-600 mb-8 max-w-md font-secondary leading-relaxed">
                Thank you for your application. We will review it and get back to you soon.
              </p>
              <Button
                variant="outline"
                onClick={() => setHasSubmitted(false)}
                className="border-green-200 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
              >
                Submit Another Application
              </Button>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-50 rounded-full flex items-center justify-center shadow-lg">
                  <Upload className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 font-primary text-red-600">Error</h3>
              <p className="text-slate-600 mb-2 max-w-md font-secondary">
                {error.message || 'Something went wrong.'}
              </p>
              {error.status && (
                <p className="text-sm text-slate-400 mb-8 font-secondary">
                  Error code: {error.status}
                </p>
              )}
              <Button
                variant="outline"
                onClick={() => setError(undefined)}
                className="border-red-200 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
              >
                Try Again
              </Button>
            </div>
          )}

          {!hasSubmitted && !isLoading && !error && (
            <>
              <h3 className="text-xl font-bold font-primary mb-6">{t('title')}</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="quickName">{t('fields.fullName')}</Label>
                  <Input id="quickName" {...register('fullName')} required />
                </div>
                <div>
                  <Label htmlFor="quickEmail">{t('fields.email')}</Label>
                  <Input id="quickEmail" type="email" {...register('email')} required />
                </div>
                <div>
                  <Label htmlFor="quickPhone">{t('fields.phone')}</Label>
                  <Input id="quickPhone" type="tel" {...register('phone')} required />
                </div>
                <div>
                  <Label htmlFor="quickCoverLetter">{t('fields.coverLetter')}</Label>
                  <Textarea
                    id="quickCoverLetter"
                    rows={3}
                    placeholder={t('fields.coverLetterPlaceholder')}
                    {...register('coverLetter')}
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
                  <Checkbox id="quickGDPR" {...register('gdprConsent')} required />
                  <Label htmlFor="quickGDPR" className="text-xs leading-relaxed">
                    {t('fields.gdprConsent')}
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  {t('submit')}
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
