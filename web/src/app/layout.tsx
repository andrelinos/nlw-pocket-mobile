import '@/styles/globals.css'

import { fontRubik } from '@/utils/fonts/rubik'

import { cn } from '@/lib/utils'
import { metaData } from '@/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'h-screen max-w-full overflow-y-auto bg-background font-rubik antialiased',
          fontRubik
        )}
      >
        <div className="relative flex min-h-screen flex-col justify-between overflow-y-auto overflow-x-hidden bg-background text-brand-text-primary">
          {children}
        </div>
      </body>
    </html>
  )
}
