export interface LoanCalculation {
  monthlyPayment: number
  totalAmount: number
  totalInterest: number
  interestPercentage: number
  finalPaymentDate: string
}

export function calculateLoan(
  principal: number,
  monthlyRate: number,
  months: number
): LoanCalculation {
  if (principal <= 0 || months <= 0) {
    throw new Error("El monto y la cantidad de cuotas deben ser positivos")
  }

  // Use default rate if 0 or negative is provided
  const effectiveRate = monthlyRate <= 0 ? 3.0 : monthlyRate
  const monthlyRateDecimal = effectiveRate / 100
  
  // Calculate monthly payment using the standard loan formula
  const monthlyPayment = principal * 
    (monthlyRateDecimal * Math.pow(1 + monthlyRateDecimal, months)) /
    (Math.pow(1 + monthlyRateDecimal, months) - 1)

  const totalAmount = monthlyPayment * months
  const totalInterest = totalAmount - principal
  const interestPercentage = (totalInterest / principal) * 100

  // Calculate final payment date
  const finalDate = new Date()
  finalDate.setMonth(finalDate.getMonth() + months)
  const finalPaymentDate = finalDate.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    interestPercentage: Math.round(interestPercentage * 100) / 100,
    finalPaymentDate
  }
}