import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Info Cuotas - Calculadora de cuotas simple y clara',
  description: 'Calcula tus cuotas de manera sencilla y clara. Obtén información detallada sobre intereses, dinero extra pagado y fecha estimada de finalización.',
  keywords: 'calculadora cuotas, intereses, préstamos, financiación, Argentina',
  authors: [{ name: 'Info Cuotas' }],
  openGraph: {
    title: 'Info Cuotas - Calculadora de cuotas',
    description: 'Calcula tus cuotas de manera sencilla y clara',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
