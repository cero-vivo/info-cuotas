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
  title: {
    default: 'Calculadora de Cuotas Online Gratis Argentina | Info Cuotas',
    template: '%s | Info Cuotas'
  },
  description: 'Calculadora de cuotas online gratuita para Argentina. Calcula pagos mensuales, intereses, costo total y fecha de finalización de tus préstamos. Herramienta 100% gratuita y sin registro.',
  keywords: [
    'calculadora cuotas', 'calculadora préstamos', 'simulador cuotas', 'calculadora intereses',
    'cuota mensual', 'tasa interés', 'prestamos personales', 'financiación', 'crédito',
    'calculadora cuotas argentina', 'simulador préstamos argentina', 'calcular cuotas online',
    'calculadora cuotas gratis', 'cuotas sin interés', 'calculadora financiera',
    'prestamo bancario', 'calculadora cuotas auto', 'calculadora cuotas casa',
    'cuotas tarjeta credito', 'interes compuesto', 'calculadora deuda'
  ],
  authors: [{ name: 'Info Cuotas', url: 'https://info-cuotas.vercel.app' }],
  creator: 'Info Cuotas',
  publisher: 'Info Cuotas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Calculadora de Cuotas Online Gratis Argentina',
    description: 'Calcula tus cuotas de forma rápida y precisa. Herramienta gratuita para calcular pagos mensuales, intereses y fechas de finalización en Argentina.',
    url: 'https://infocuotas.netlify.app', // ← Cambiar aquí
    siteName: 'Info Cuotas',
    images: [
      {
        url: 'https://infocuotas.netlify.app/og-image.jpg', // ← Cambiar aquí
        width: 1200,
        height: 630,
        alt: 'Calculadora de Cuotas Info Cuotas',
      }
    ],
    locale: 'es_AR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Cuotas Online Gratis Argentina',
    description: 'Calcula tus cuotas de forma rápida y precisa.',
    images: ['https://infocuotas.netlify.app/og-image.jpg'], // ← Cambiar aquí
  },
  alternates: {
    canonical: 'https://infocuotas.netlify.app', // ← Cambiar aquí
  },
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="d126wPhb7ZDioVvxTpqGX5CLUUtWpmtbjyxxtWIN0Po" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Info Cuotas - Calculadora de Cuotas',
              description: 'Calculadora de cuotas online gratuita para Argentina',
              url: 'https://infocuotas.netlify.app',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'ARS'
              },
              featureList: [
                'Cálculo de cuotas mensuales',
                'Cálculo de intereses totales',
                'Estimación de fecha de finalización',
                'Interfaz responsive',
                'Sin registro requerido'
              ],
              availableLanguage: {
                '@type': 'Language',
                name: 'Spanish'
              },
              areaServed: {
                '@type': 'Country',
                name: 'Argentina'
              }
            })
          }}
        />
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
