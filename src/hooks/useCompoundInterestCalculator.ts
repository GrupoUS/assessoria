
import { useState, useEffect } from 'react';
import { parseFormattedNumber } from '@/utils/currencyUtils';

interface ChartDataPoint {
  year: number;
  balance: number;
  deposits: number;
}

interface ComparisonDataPoint {
  year: number;
  baseRate: number;
  lowerRate: number;
  higherRate: number;
}

export interface CalculatorState {
  initialAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  timeYears: number;
  finalAmount: number;
  totalDeposits: number;
  totalInterest: number;
  chartData: ChartDataPoint[];
  comparisonData: ComparisonDataPoint[];
}

export const useCompoundInterestCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(0.8); // 0.8% ao mês (aprox. 10% ao ano)
  const [timeYears, setTimeYears] = useState<number>(10);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [comparisonData, setComparisonData] = useState<ComparisonDataPoint[]>([]);

  const calculateCompoundInterest = () => {
    let balance = initialAmount;
    let totalDeposited = initialAmount;
    const monthlyRate = interestRate / 100;
    const months = timeYears * 12;
    const chartPoints = [];
    
    // Para taxas comparativas
    const lowerRate = interestRate * 0.75 / 100; // 25% menor
    const higherRate = interestRate * 1.25 / 100; // 25% maior
    let balanceLower = initialAmount;
    let balanceHigher = initialAmount;
    const comparisonPoints = [];

    for (let i = 0; i <= months; i++) {
      // No primeiro mês, só temos o valor inicial
      if (i > 0) {
        balance = balance * (1 + monthlyRate) + monthlyDeposit;
        balanceLower = balanceLower * (1 + lowerRate) + monthlyDeposit;
        balanceHigher = balanceHigher * (1 + higherRate) + monthlyDeposit;
        totalDeposited += monthlyDeposit;
      }

      if (i % 12 === 0) {
        chartPoints.push({
          year: i / 12,
          balance: Math.round(balance),
          deposits: Math.round(totalDeposited)
        });
        
        comparisonPoints.push({
          year: i / 12,
          baseRate: Math.round(balance),
          lowerRate: Math.round(balanceLower),
          higherRate: Math.round(balanceHigher)
        });
      }
    }

    setFinalAmount(balance);
    setTotalDeposits(totalDeposited);
    setTotalInterest(balance - totalDeposited);
    setChartData(chartPoints);
    setComparisonData(comparisonPoints);
  };

  // Recalcular quando qualquer input mudar
  useEffect(() => {
    calculateCompoundInterest();
  }, [initialAmount, monthlyDeposit, interestRate, timeYears]);

  const handleInitialAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const parsedValue = parseFormattedNumber(rawValue);
    setInitialAmount(parsedValue);
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const parsedValue = parseFormattedNumber(rawValue);
    setMonthlyDeposit(parsedValue);
  };
  
  return {
    initialAmount,
    monthlyDeposit,
    interestRate,
    timeYears,
    finalAmount,
    totalDeposits,
    totalInterest,
    chartData,
    comparisonData,
    setInterestRate,
    setTimeYears,
    handleInitialAmountChange,
    handleMonthlyDepositChange,
  };
};
