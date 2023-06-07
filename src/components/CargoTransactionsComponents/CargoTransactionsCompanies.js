import React from 'react'
import { CargoTransactionsTable } from './CargoTransactionsTable'
import { SealalExpressSection } from './SealalExpressSection'
import { DesiCalculator } from './DesiCalculator'
import { CalculateShippingPrice } from './CalculateShippingPrice'

export const CargoTransactionsCompanies = () => {
  return (
    <div>
      <CargoTransactionsTable />
      <SealalExpressSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <DesiCalculator />
        <CalculateShippingPrice />
      </div>
    </div>
  )
}
