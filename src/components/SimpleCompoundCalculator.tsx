
import React from 'react';
import { useCompoundCalculator } from '@/hooks/useCompoundCalculator';
import CalculatorInput from '@/components/calculator/CalculatorInput';
import CalculatorSlider from '@/components/calculator/CalculatorSlider';
import ResultDisplay from '@/components/calculator/ResultDisplay';
import { formatCurrency } from '@/utils/currencyUtils';

const SimpleCompoundCalculator = () => {
  const [
    {
      initialAmount,
      initialAmountInput,
      monthlyDeposit,
      monthlyDepositInput,
      interestRate,
      timeYears,
      finalAmount
    },
    {
      handleInitialAmountChange,
      handleMonthlyDepositChange,
      handleInitialAmountBlur,
      handleMonthlyDepositBlur,
      setInterestRate,
      setTimeYears
    }
  ] = useCompoundCalculator();

  return (
    <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-lg border border-navy-light/20 dark:border-navy-light/10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h3 className="text-xl font-semibold text-navy-darkest dark:text-white mb-4">
        Calculadora de Juros Compostos
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CalculatorInput
            id="initialAmount"
            label="Investimento inicial"
            value={initialAmountInput}
            onChange={handleInitialAmountChange}
            onBlur={handleInitialAmountBlur}
          />

          <CalculatorInput
            id="monthlyDeposit"
            label="Depósito mensal"
            value={monthlyDepositInput}
            onChange={handleMonthlyDepositChange}
            onBlur={handleMonthlyDepositBlur}
          />
        </div>

        <CalculatorSlider
          id="timeYears"
          label="Anos"
          value={timeYears}
          min={1}
          max={30}
          step={1}
          displayValue={timeYears}
          onChange={setTimeYears}
        />

        <CalculatorSlider
          id="interestRate"
          label="Taxa mensal"
          value={interestRate}
          min={0.1}
          max={2}
          step={0.05}
          displayValue={`${interestRate.toFixed(2)}%`}
          onChange={setInterestRate}
        />

        <ResultDisplay 
          timeYears={timeYears} 
          finalAmount={finalAmount} 
        />
        
        <div className="mt-4 text-center">
          <a href="/calculadora-juros-compostos" className="text-navy-medium dark:text-navy-light hover:text-navy-dark hover:dark:text-white text-sm transition-all duration-300 hover:underline">
            Ver calculadora completa →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleCompoundCalculator;
