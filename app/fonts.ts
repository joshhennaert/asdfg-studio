import { Fragment_Mono, EB_Garamond } from 'next/font/google'

export const fragmentMono = Fragment_Mono({
  subsets:  ['latin'],
  weight:   ['400'],
  style:    ['normal', 'italic'],
  variable: '--font-fragment',
  display:  'swap',
})

export const ebGaramond = EB_Garamond({
  subsets:  ['latin'],
  weight:   ['400', '500'],
  style:    ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display:  'swap',
})
