import Footer from '@/components/general/Footer'
import Header from '@/components/general/Header'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Início - Escola do Real',
  description:
    'Uma ONG voltada para a educação financeira de todos os brasileiros.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={monserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
