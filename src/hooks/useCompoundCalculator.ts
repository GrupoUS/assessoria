
import { useState, useEffect } from 'react';
import { formatNumberAsString } from '../utils/currencyUtils';

interface CompoundCalculatorState {
  initialAmount: number;
  initialAmountInput: string;
  monthlyDeposit: number;
  monthlyDepositInput: string;
  interestRate: number;
  timeYears: number;
  finalAmount: number;
}

interface CompoundCalculatorHandlers {
  handleInitialAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonthlyDepositChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInitialAmountBlur: () => void;
  handleMonthlyDepositBlur: () => void;
  setInterestRate: (value: number) => void;
  setTimeYears: (value: number) => void;
  formatFinalAmountDisplay: () => JSX.Element;
}

export const useCompoundCalculator = (): [CompoundCalculatorState, CompoundCalculatorHandlers] => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [initialAmountInput, setInitialAmountInput] = useState<string>("10.000,00");
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
  const [monthlyDepositInput, setMonthlyDepositInput] = useState<string>("1.000,00");
  const [interestRate, setInterestRate] = useState<number>(1.2); // 1.2% ao mês (aprox. 15% ao ano)
  const [timeYears, setTimeYears] = useState<number>(10);
  const [finalAmount, setFinalAmount] = useState<number>(0);

  const calculateCompoundInterest = () => {
    let balance = initialAmount;
    const monthlyRate = interestRate / 100;
    const months = timeYears * 12;
    
    for (let i = 1; i <= months; i++) {
      balance = balance * (1 + monthlyRate) + monthlyDeposit;
    }

    setFinalAmount(balance);
  };

  // Recalcular quando qualquer input mudar
  useEffect(() => {
    calculateCompoundInterest();
  }, [initialAmount, monthlyDeposit, interestRate, timeYears]);

  const handleInitialAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInitialAmountInput(value);
    
    // Remove formatação para extrair apenas o número
    const numericValue = value.replace(/\./g, '').replace(',', '.');
    if (!isNaN(parseFloat(numericValue))) {
      setInitialAmount(parseFloat(numericValue));
    }
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMonthlyDepositInput(value);
    
    // Remove formatação para extrair apenas o número
    const numericValue = value.replace(/\./g, '').replace(',', '.');
    if (!isNaN(parseFloat(numericValue))) {
      setMonthlyDeposit(parseFloat(numericValue));
    }
  };

  // Formata o valor quando o input perde o foco
  const handleInitialAmountBlur = () => {
    try {
      const value = parseFloat(initialAmountInput.replace(/\./g, '').replace(',', '.'));
      if (!isNaN(value)) {
        setInitialAmount(value);
        setInitialAmountInput(formatNumberAsString(value));
      }
    } catch (e) {
      setInitialAmountInput(formatNumberAsString(initialAmount));
    }
  };

  // Formata o valor quando o input perde o foco
  const handleMonthlyDepositBlur = () => {
    try {
      const value = parseFloat(monthlyDepositInput.replace(/\./g, '').replace(',', '.'));
      if (!isNaN(value)) {
        setMonthlyDeposit(value);
        setMonthlyDepositInput(formatNumberAsString(value));
      }
    } catch (e) {
      setMonthlyDepositInput(formatNumberAsString(monthlyDeposit));
    }
  };

  // Formata o resultado para exibição e garante que números grandes não vão quebrar o layout
  const formatFinalAmountDisplay = () => {
    const formattedValue = import('../utils/currencyUtils').then(m => m.formatCurrency(finalAmount)).then(v => v.replace('R$', ''));
    return (
      <div className="flex flex-col">
        <span className="text-lg font-medium">R$</span>
        <span className="text-2xl font-bold truncate" title={formattedValue.toString().trim()}>
          {finalAmount ? import('../utils/currencyUtils').then(m => m.formatCurrency(finalAmount)).then(v => v.replace('R$', '')) : ''}
        </span>
      </div>
    );
  };

  return [
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
      setTimeYears,
      formatFinalAmountDisplay
    }
  ];
};
