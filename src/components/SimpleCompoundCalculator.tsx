
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
};

// Função para formatar valor sem o símbolo da moeda
const formatNumberAsString = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Função para converter string formatada em número
const parseFormattedNumber = (formattedValue: string): number => {
  // Remove todos os caracteres não numéricos, exceto vírgula ou ponto
  const cleaned = formattedValue.replace(/[^\d,\.]/g, '');
  
  // Substitui vírgula por ponto para converter para número
  const normalized = cleaned.replace(',', '.');
  
  return parseFloat(normalized) || 0;
};

// Função para truncar valores muito grandes para exibição
const truncateForDisplay = (value: string, maxLength: number = 15): string => {
  if (value.length <= maxLength) return value;
  return value.substring(0, maxLength) + '...';
};

const SimpleCompoundCalculator = () => {
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
    const formattedValue = formatCurrency(finalAmount).replace('R$', '');
    return (
      <div className="flex flex-col">
        <span className="text-lg font-medium">R$</span>
        <span className="text-2xl font-bold truncate" title={formattedValue.trim()}>
          {formattedValue}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-lg border border-navy-light/20 dark:border-navy-light/10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h3 className="text-xl font-semibold text-navy-darkest dark:text-white mb-4">
        Calculadora de Juros Compostos
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="initialAmount" className="mb-2 block text-navy-medium dark:text-navy-light">
              Investimento inicial
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
              <Input
                id="initialAmount"
                type="text"
                className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis"
                value={initialAmountInput}
                onChange={handleInitialAmountChange}
                onBlur={handleInitialAmountBlur}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="monthlyDeposit" className="mb-2 block text-navy-medium dark:text-navy-light">
              Depósito mensal
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
              <Input
                id="monthlyDeposit"
                type="text"
                className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis"
                value={monthlyDepositInput}
                onChange={handleMonthlyDepositChange}
                onBlur={handleMonthlyDepositBlur}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="timeYears" className="text-navy-medium dark:text-navy-light">Anos</Label>
            <span className="font-medium text-navy-medium dark:text-navy-light">{timeYears}</span>
          </div>
          <Slider
            id="timeYears"
            min={1}
            max={30}
            step={1}
            value={[timeYears]}
            onValueChange={(value) => setTimeYears(value[0])}
            className="my-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="interestRate" className="text-navy-medium dark:text-navy-light">Taxa mensal</Label>
            <span className="font-medium text-navy-medium dark:text-navy-light">{interestRate.toFixed(2)}%</span>
          </div>
          <Slider
            id="interestRate"
            min={0.1}
            max={2}
            step={0.05}
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            className="my-2"
          />
        </div>

        <div className="bg-navy-lightest dark:bg-navy-dark/70 p-4 rounded-lg mt-4 transition-transform duration-300 hover:scale-[1.03]">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <p className="text-sm text-navy-medium dark:text-navy-light">Patrimônio em {timeYears} anos</p>
              <p className="text-2xl font-bold text-navy-darkest dark:text-white truncate" title={formatCurrency(finalAmount)}>
                {formatCurrency(finalAmount)}
              </p>
            </div>
            <ArrowRight className="h-8 w-8 text-navy-medium dark:text-navy-light ml-2 flex-shrink-0" />
          </div>
        </div>
        
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
