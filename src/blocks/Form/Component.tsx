'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { CMSLink } from '@/components/Link'
import { Mail, Phone, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'
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
    <div className="container px-4 md:px-6  py-12 md:py-24">
      {enableIntro && introContent && !hasSubmitted && (
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            <span>Contact Us</span>
          </div>
          <RichText className="mb-4" data={introContent} enableGutter={false} />
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="md:col-span-2 bg-primary/5 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6 font-primary">How to reach us</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium font-primary">Email</h4>
                    <p className="text-muted-foreground font-secondary">contact@vupchemicals.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium font-primary">Phone</h4>
                    <p className="text-muted-foreground font-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium font-primary">Global Presence</h4>
                    <p className="text-muted-foreground font-secondary">Offices in 12 countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-primary/10">
              <p className="text-sm text-muted-foreground mb-4 font-secondary">
                Looking for career opportunities?
              </p>
              <Button asChild variant="outline" size="sm">
                <CMSLink type="custom" url="/career" className="inline-flex items-center gap-2">
                  Visit our careers page
                  <ArrowRight className="h-3 w-3" />
                </CMSLink>
              </Button>
            </div>
          </div>

          {/* Form section */}
          <div className="md:col-span-3 p-8">
            <FormProvider {...formMethods}>
              {isLoading && !hasSubmitted && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
                  <p className="text-muted-foreground">Sending your message...</p>
                </div>
              )}

              {!isLoading && hasSubmitted && confirmationType === 'message' && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-primary">Message Sent</h3>
                  <div className="text-muted-foreground mb-6 max-w-md font-secondary">
                    {confirmationMessage ? (
                      <RichText data={confirmationMessage} />
                    ) : (
                      <p>
                        Thank you for reaching out. A member of our team will contact you within 24
                        hours.
                      </p>
                    )}
                  </div>
                  <Button variant="outline" onClick={() => setHasSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              )}

              {error && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-primary text-red-600">Error</h3>
                  <p className="text-muted-foreground mb-6 max-w-md font-secondary">
                    {`${error.status || '500'}: ${error.message || 'Something went wrong.'}`}
                  </p>
                  <Button variant="outline" onClick={() => setError(undefined)}>
                    Try Again
                  </Button>
                </div>
              )}

              {!hasSubmitted && !isLoading && !error && (
                <form id={formID} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex flex-wrap -mx-2">
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

                  <div className="pt-2">
                    <Button type="submit" className="w-full h-12 rounded-lg">
                      {submitButtonLabel || 'Send Message'}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4 font-secondary">
                      By submitting this form, you agree to our{' '}
                      <CMSLink type="custom" url="/privacy" className="underline">
                        Privacy Policy
                      </CMSLink>
                      .
                    </p>
                  </div>
                </form>
              )}
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
