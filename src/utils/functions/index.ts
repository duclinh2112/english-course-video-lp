import moment from 'moment'
import { cookies } from 'next/headers'

import { defaultLocale } from '../configs'
import { COOKIE_NAME } from '../constants'

export const uuid = () => {
  return Math.floor(Math.random() * 1000000)
}

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale
}

export async function setUserLocale(locale: string) {
  cookies().set(COOKIE_NAME, locale)
}

export const convertDateBlog = (date: string) => {
  const newDate = moment(date).format('[Ngày] DD [tháng] MM [năm] YYYY')
  return newDate
}

export function cn(
  ...args: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  return args
    .flatMap((arg) => {
      if (!arg) return []
      if (typeof arg === 'string') return [arg]
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
      }
      return []
    })
    .join(' ')
}
