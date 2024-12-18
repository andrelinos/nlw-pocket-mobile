import { Rubik } from 'next/font/google'

const rubik_init = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rubik',
})

export const fontRubik = rubik_init.variable
