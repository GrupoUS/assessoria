
import React from 'react';
import { formatCurrency } from '@/utils/currencyUtils';
import SEOHead from '../components/shared/SEOHead';
import CalculatorHeader from '../components/calculator/CalculatorHeader';
import InputPanel from '../components/calculator/InputPanel';
import ChartPanel from '../components/calculator/ChartPanel';
import CallToAction from '../components/calculator/CallToAction';
import { useCompoundInterestCalculator } from '@/hooks/useCompoundInterestCalculator';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { exportToPDF } from '@/utils/exportUtils';
import Navbar from '../components/Navbar';

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

  const handleExport = () => {
    exportToPDF({
      initialAmount,
      monthlyDeposit,
      interestRate,
      timeYears,
      finalAmount,
      totalDeposits,
      totalInterest
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest pt-24 pb-16">
        <SEOHead 
          title="Calculadora de Juros Compostos | Maurício Magalhães"
          description="Use nossa calculadora de juros compostos para visualizar o crescimento do seu patrimônio ao longo do tempo. Planeje seus investimentos de forma eficiente."
          keywords="calculadora juros compostos, investimentos, planejamento financeiro, crescimento patrimonial"
          canonicalUrl="https://www.mauriciomagalhaes.com.br/calculadora-juros-compostos"
        />
        
        <div id="calculator-container" className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <CalculatorHeader
              title="Calculadora de Juros Compostos"
              description="Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo."
            />
            <Button 
              onClick={handleExport} 
              className="flex items-center gap-2"
              variant="outline"
            >
              <Printer className="w-4 h-4" /> 
              Imprimir / Exportar
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-3">
              <ChartPanel chartData={chartData} />
            </div>
          </div>

          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default CompoundCalculator;
