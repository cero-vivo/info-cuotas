import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FixedDonationButton } from '@/components/fixed-donation-button'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Info Cuotas - Calculadora de Cuotas Inteligente',
  description: 'Calcula tus cuotas de forma rápida y precisa. Herramienta gratuita para calcular pagos mensuales, intereses y fechas de finalización.',
  keywords: 'calculadora cuotas, intereses, préstamos, financiación, pagos mensuales',
  authors: [{ name: 'Info Cuotas' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/infoCuotas.svg" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <FixedDonationButton />
          {children}
        </div>
      </body>
    </html>
  )
}
