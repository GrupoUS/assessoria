
import { useState, useEffect } from 'react';
import { formatCurrency, formatNumberAsString, parseFormattedNumber } from '../utils/currencyUtils';

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
    
    // Remove R$ if present and any non-numeric characters except commas and dots
    const cleanedValue = value.replace(/[^\d.,]/g, '');
    
    // Format as the user types
    const formattedValue = formatAsUserTypes(cleanedValue);
    setInitialAmountInput(formattedValue);
    
    // Parse the value for calculations
    const numericValue = parseFormattedNumber(formattedValue);
    if (!isNaN(numericValue)) {
      setInitialAmount(numericValue);
    }
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // Remove R$ if present and any non-numeric characters except commas and dots
    const cleanedValue = value.replace(/[^\d.,]/g, '');
    
    // Format as the user types
    const formattedValue = formatAsUserTypes(cleanedValue);
    setMonthlyDepositInput(formattedValue);
    
    // Parse the value for calculations
    const numericValue = parseFormattedNumber(formattedValue);
    if (!isNaN(numericValue)) {
      setMonthlyDeposit(numericValue);
    }
  };

  // Function to format number as the user types with dot separators
  const formatAsUserTypes = (value: string): string => {
    // Remove all dots and replace comma with dot for numerical operations
    const numericString = value.replace(/\./g, '').replace(',', '.');
    
    // Check if it's a valid number
    if (isNaN(parseFloat(numericString))) {
      return value;
    }
    
    // Split into integer and decimal parts
    const parts = numericString.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? parts[1] : '';
    
    // Add thousand separators
    let formattedInteger = '';
    for (let i = 0; i < integerPart.length; i++) {
      if (i > 0 && (integerPart.length - i) % 3 === 0) {
        formattedInteger += '.';
      }
      formattedInteger += integerPart[i];
    }
    
    // Return formatted string with comma as decimal separator
    return formattedInteger + (decimalPart.length > 0 ? ',' + decimalPart : '');
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
      setTimeYears
    }
  ];
};
