'use client'

import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { CMSLink } from '@/components/Link'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const t = useTranslations('contactForm')

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      <div className="">
        {enableIntro && introContent && !hasSubmitted && (
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <RichText
              className="mb-4 prose prose-lg max-w-none"
              data={introContent}
              enableGutter={false}
            />
          </div>
        )}

        <div>
          <div className="grid lg:grid-cols-3 gap-8 items-start lg:items-stretch">
            {/* Contact info cards */}
            <div className="lg:col-span-1 flex flex-col gap-6 h-full">
              {/* Company Information Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-shadow duration-300 flex-1">
                <h3 className="text-2xl font-bold mb-8 font-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t('companyInfo.title')}
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="group">
                    <div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold font-primary text-sm text-slate-900 mb-1">
                          {t('companyInfo.address.label')}
                        </h4>
                        <p className="text-sm text-slate-600 font-secondary leading-relaxed">
                          {t('companyInfo.address.value')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold font-primary text-sm text-slate-900 mb-1">
                          {t('companyInfo.email.label')}
                        </h4>
                        <a
                          href="mailto:info@vupinternational.com"
                          className="text-sm text-slate-600 hover:text-primary transition-colors break-all font-secondary"
                        >
                          info@vupinternational.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Registration */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold font-primary text-sm text-slate-900 mb-4">
                      {t('companyInfo.businessRegistration.title')}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-slate-500 font-secondary">
                          {t('companyInfo.businessRegistration.companyId')}
                        </span>
                        <span className="text-slate-900 font-medium font-secondary">36002071</span>
                      </div>
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-slate-500 font-secondary">
                          {t('companyInfo.businessRegistration.taxId')}
                        </span>
                        <span className="text-slate-900 font-medium font-secondary">
                          2020469462
                        </span>
                      </div>
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-slate-500 font-secondary">
                          {t('companyInfo.businessRegistration.vatId')}
                        </span>
                        <span className="text-slate-900 font-medium font-secondary">
                          SK2020469462
                        </span>
                      </div>
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500 font-secondary leading-relaxed">
                          {t('companyInfo.businessRegistration.registration')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career CTA Card */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm rounded-3xl shadow-lg border border-primary/20 p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <h4 className="font-bold font-primary text-lg mb-2 text-slate-900">
                  {t('career.title')}
                </h4>
                <p className="text-sm text-slate-600 mb-6 font-secondary leading-relaxed">
                  {t('career.description')}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full group border-primary/20 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <CMSLink
                    type="custom"
                    url="/career"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    {t('career.button')}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </CMSLink>
                </Button>
              </div>
            </div>

            {/* Form section */}
            <div className="lg:col-span-2 flex">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full flex flex-col">
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <FormProvider {...formMethods}>
                    {isLoading && !hasSubmitted && (
                      <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="relative mb-6">
                          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/30 border-t-primary"></div>
                          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                        </div>
                        <p className="text-slate-600 font-medium font-secondary">
                          {t('states.loading.title')}
                        </p>
                        <p className="text-sm text-slate-400 mt-2 font-secondary">
                          {t('states.loading.subtitle')}
                        </p>
                      </div>
                    )}

                    {!isLoading && hasSubmitted && confirmationType === 'message' && (
                      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle2 className="h-10 w-10 text-green-600 animate-in zoom-in duration-300 delay-200" />
                          </div>
                          <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 font-primary bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {t('states.success.title')}
                        </h3>
                        <div className="text-slate-600 mb-8 max-w-md font-secondary leading-relaxed">
                          {confirmationMessage ? (
                            <RichText data={confirmationMessage} />
                          ) : (
                            <p>{t('states.success.message')}</p>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => setHasSubmitted(false)}
                          className="border-green-200 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                        >
                          {t('states.success.button')}
                        </Button>
                      </div>
                    )}

                    {error && (
                      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-50 rounded-full flex items-center justify-center shadow-lg">
                            <Mail className="h-10 w-10 text-red-600" />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 font-primary text-red-600">
                          {t('states.error.title')}
                        </h3>
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
                          {t('states.error.button')}
                        </Button>
                      </div>
                    )}

                    {!hasSubmitted && !isLoading && !error && (
                      <div className="flex-1 flex flex-col">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold font-primary mb-2 text-slate-900">
                            {t('form.title')}
                          </h2>
                          <p className="text-slate-600 font-secondary">{t('form.description')}</p>
                        </div>

                        <form
                          id={formID}
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-6 flex-1 flex flex-col justify-between"
                        >
                          <div className="flex flex-wrap -mx-2 flex-1">
                            {formFromProps &&
                              formFromProps.fields &&
                              formFromProps.fields?.map((field, index) => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const Field: React.FC<any> =
                                  fields?.[field.blockType as keyof typeof fields]
                                if (Field) {
                                  return (
                                    <React.Fragment key={index}>
                                      <Field
                                        form={formFromProps}
                                        {...field}
                                        {...formMethods}
                                        control={control}
                                        errors={errors}
                                        register={register}
                                      />
                                    </React.Fragment>
                                  )
                                }
                                return null
                              })}
                          </div>

                          <div className="pt-4 space-y-4 mt-auto">
                            <Button
                              type="submit"
                              className="w-full h-14 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
                            >
                              {submitButtonLabel || t('form.submitButton')}
                            </Button>
                            <p className="text-xs text-center text-slate-500 font-secondary leading-relaxed">
                              {t('privacy.text')}{' '}
                              <CMSLink
                                type="custom"
                                url="/privacy"
                                className="underline hover:text-primary transition-colors"
                              >
                                {t('privacy.link')}
                              </CMSLink>
                              .
                            </p>
                          </div>
                        </form>
                      </div>
                    )}
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
