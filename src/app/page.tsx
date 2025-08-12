import { LoanCalculator } from '@/components/loan-calculator'
import { DonationButton } from '@/components/donation-button'
import { AdvertisingSpace } from '@/components/advertising-space'
import { Calculator, TrendingUp, Shield, Heart } from 'lucide-react'

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center animate-in fade-in slide-in-from-bottom duration-700">
          <img 
            src="/infoCuotas.svg" 
            alt="Info Cuotas Logo" 
            className="w-48 md:w-48 mx-auto mb-6 animate-pulse-glow"
          />
        </section>

        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto">
          <LoanCalculator />
        </div>

        {/* Donation and Ads Section */}
        <section className="py-5">
          <DonationButton />
        </section>

        {/* Benefits Section */}
        <section className="py-12">
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
        
        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Info Cuotas - Herramienta gratuita para cálculo de cuotas
          </p>
        </footer>
      </div>
    </main>
  )
}
