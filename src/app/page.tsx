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

        {/* SEO Content Section */}
        <section className="py-12 bg-white rounded-xl shadow-sm mb-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Calculadora de Cuotas para Argentina
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Nuestra calculadora de cuotas es la herramienta más precisa y fácil de usar 
                para calcular pagos mensuales de préstamos en Argentina. Ya sea que estés 
                planeando comprar un auto, una casa, o necesites un préstamo personal, 
                nuestra calculadora te ayuda a entender exactamente cuánto pagarás.
              </p>
              <h3>¿Cómo funciona?</h3>
              <p>
                Simplemente ingresa el monto del préstamo, la cantidad de cuotas, 
                y la tasa de interés mensual. Nuestra calculadora te mostrará:
              </p>
              <ul>
                <li>Cuota mensual exacta</li>
                <li>Monto total a pagar</li>
                <li>Intereses totales</li>
                <li>Fecha estimada de finalización</li>
              </ul>
              <h3>Préstamos en Argentina</h3>
              <p>
                En Argentina, los préstamos personales suelen tener tasas que varían 
                entre el 3% y 8% mensual. Nuestra calculadora te permite probar diferentes 
                escenarios para encontrar la opción que mejor se adapte a tu presupuesto.
              </p>
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
