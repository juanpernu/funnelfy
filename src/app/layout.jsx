import Script from 'next/script'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Funnelfy',
    default: 'Funnelfy - Close deals faster with collaborative microsites',
  },
  description:
    'Auto-personalized, interactive & trackable spaces created in minutes. From cold outreach to onboarding hand-off.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <Script
        src="https://getlaunchlist.com/js/widget.js"
        strategy="afterInteractive"
      />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
