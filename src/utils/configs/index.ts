export const appConfig = {
  title: 'Vstep User',
}

export const locales = ['vi', 'en'] as const

export const defaultLocale: Locale = 'vi'

export type Locale = (typeof locales)[number]
