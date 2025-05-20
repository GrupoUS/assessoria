
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

const SimpleCompoundCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
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
    const value = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
    setInitialAmount(isNaN(value) ? 0 : value);
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
    setMonthlyDeposit(isNaN(value) ? 0 : value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-navy-light/20">
      <h3 className="text-xl font-semibold text-navy-darkest mb-4">
        Calculadora de Juros Compostos
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="initialAmount" className="mb-2 block text-navy-medium">
              Investimento inicial
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
              <Input
                id="initialAmount"
                type="text"
                className="pl-10"
                value={formatCurrency(initialAmount).replace('R$', '').trim()}
                onChange={handleInitialAmountChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="monthlyDeposit" className="mb-2 block text-navy-medium">
              Depósito mensal
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
              <Input
                id="monthlyDeposit"
                type="text"
                className="pl-10"
                value={formatCurrency(monthlyDeposit).replace('R$', '').trim()}
                onChange={handleMonthlyDepositChange}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="timeYears" className="text-navy-medium">Anos</Label>
            <span className="font-medium text-navy-medium">{timeYears}</span>
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
            <Label htmlFor="interestRate" className="text-navy-medium">Taxa mensal</Label>
            <span className="font-medium text-navy-medium">{interestRate.toFixed(2)}%</span>
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

        <div className="bg-navy-lightest p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-navy-medium">Patrimônio em {timeYears} anos</p>
              <p className="text-2xl font-bold text-navy-darkest">{formatCurrency(finalAmount)}</p>
            </div>
            <ArrowRight className="h-8 w-8 text-navy-medium" />
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a href="/calculadora-juros-compostos" className="text-navy-medium hover:text-navy-dark text-sm">
            Ver calculadora completa →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleCompoundCalculator;
