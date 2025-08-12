import { LoanCalculator } from '@/components/loan-calculator'
import { AdvertisingSpace } from '@/components/advertising-space'
import { Calculator, TrendingUp, Shield, Heart, CreditCard, Home as HomeIcon, Car } from 'lucide-react'
import { DonationButton } from '@/components/donation-button'

export default function Home() {
  const benefits = [
    {
      icon: Calculator,
      title: "Cálculo preciso",
      description: "Obtén cálculos exactos de cuotas, intereses y fechas de finalización"
    },
    {
      icon: TrendingUp,
      title: "Visualización clara",
      description: "Gráficos y números fáciles de entender para tomar decisiones informadas"
    },
    {
      icon: Shield,
      title: "100% seguro",
      description: "Sin registro, sin datos personales, cálculos locales en tu dispositivo"
    },
    {
      icon: Heart,
      title: "Completamente gratis",
      description: "Sin costos ocultos, mantenido por la comunidad"
    }
  ]

  const loanTypes = [
    {
      icon: HomeIcon,
      title: "Préstamos personales",
      description: "Calcula cuotas para préstamos personales en Argentina"
    },
    {
      icon: Car,
      title: "Financiación de autos",
      description: "Simula cuotas para compra de vehículos nuevos y usados"
    },
    {
      icon: CreditCard,
      title: "Tarjetas de crédito",
      description: "Calcula cuotas para compras con tarjeta de crédito"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto">
        {/* Hero Section with SEO optimization */}
        <section className="text-center animate-in fade-in slide-in-from-bottom duration-700">
          <img 
            src="/infoCuotas.svg" 
            alt="Info Cuotas Logo - Calculadora de cuotas online Argentina" 
            className="w-48 md:w-48 mx-auto mb-6 animate-pulse-glow"
          />
        </section>

        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <LoanCalculator />
        </div>
        {/* Donation Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <DonationButton />
        </div>

        {/* Benefits Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            ¿Por qué usar Info Cuotas?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section - mejorado con estilos de marca */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-xl mb-12 border border-blue-100">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Calculadora de Cuotas para Argentina
            </h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Nuestra calculadora de cuotas es la herramienta más precisa y fácil de usar 
                para calcular pagos mensuales de préstamos en Argentina. Ya sea que estés 
                planeando comprar un auto, una casa, o necesites un préstamo personal, 
                nuestra calculadora te ayuda a entender exactamente cuánto pagarás.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">¿Cómo funciona?</h3>
                <p className="text-blue-800 mb-4">
                  Simplemente ingresa el monto del préstamo, la cantidad de cuotas, 
                  y la tasa de interés mensual. Nuestra calculadora te mostrará:
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Cuota mensual exacta</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Monto total a pagar</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Intereses totales</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Fecha estimada de finalización</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Préstamos en Argentina</h3>
                <p className="text-indigo-800">
                  En Argentina, los préstamos personales suelen tener tasas que varían 
                  entre el 3% y 8% mensual. Nuestra calculadora te permite probar diferentes 
                  escenarios para encontrar la opción que mejor se adapte a tu presupuesto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Info Cuotas - Calculadora de cuotas online gratuita para Argentina
          </p>
        </footer>
      </div>
    </main>
  )
}
