import { NextIntlClientProvider } from 'next-intl'
import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
  locale: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any
}> = ({ children, locale, messages }) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
