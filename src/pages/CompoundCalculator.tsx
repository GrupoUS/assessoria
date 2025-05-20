
import React from 'react';
import { formatCurrency } from '@/utils/currencyUtils';
import SEOHead from '../components/shared/SEOHead';
import CalculatorHeader from '../components/calculator/CalculatorHeader';
import InputPanel from '../components/calculator/InputPanel';
import ChartPanel from '../components/calculator/ChartPanel';
import CallToAction from '../components/calculator/CallToAction';
import { useCompoundInterestCalculator } from '@/hooks/useCompoundInterestCalculator';

const CompoundCalculator = () => {
  const {
    initialAmount,
    monthlyDeposit,
    interestRate,
    timeYears,
    finalAmount,
    totalDeposits,
    totalInterest,
    chartData,
    setInterestRate,
    setTimeYears,
    handleInitialAmountChange,
    handleMonthlyDepositChange,
  } = useCompoundInterestCalculator();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest py-16">
      <SEOHead 
        title="Calculadora de Juros Compostos | Maurício Magalhães"
        description="Use nossa calculadora de juros compostos para visualizar o crescimento do seu patrimônio ao longo do tempo. Planeje seus investimentos de forma eficiente."
        keywords="calculadora juros compostos, investimentos, planejamento financeiro, crescimento patrimonial"
        canonicalUrl="https://www.mauriciomagalhaes.com.br/calculadora-juros-compostos"
      />
      
      <div className="container mx-auto px-6">
        <CalculatorHeader
          title="Calculadora de Juros Compostos"
          description="Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <InputPanel
            initialAmount={initialAmount}
            monthlyDeposit={monthlyDeposit}
            interestRate={interestRate}
            timeYears={timeYears}
            handleInitialAmountChange={handleInitialAmountChange}
            handleMonthlyDepositChange={handleMonthlyDepositChange}
            setInterestRate={setInterestRate}
            setTimeYears={setTimeYears}
            finalAmount={finalAmount}
            totalDeposits={totalDeposits}
            totalInterest={totalInterest}
          />

          <ChartPanel chartData={chartData} />
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default CompoundCalculator;
