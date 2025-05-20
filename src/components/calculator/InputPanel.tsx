import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency, formatNumberAsString } from '@/utils/currencyUtils';
interface InputPanelProps {
  initialAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  timeYears: number;
  finalAmount: number;
  totalDeposits: number;
  totalInterest: number;
  handleInitialAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonthlyDepositChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setInterestRate: (value: number) => void;
  setTimeYears: (value: number) => void;
}
const InputPanel = ({
  initialAmount,
  monthlyDeposit,
  interestRate,
  timeYears,
  finalAmount,
  totalDeposits,
  totalInterest,
  handleInitialAmountChange,
  handleMonthlyDepositChange,
  setInterestRate,
  setTimeYears
}: InputPanelProps) => {
  return <div className="lg:col-span-1">
      <div className="bg-white dark:bg-navy-dark p-6 shadow space-y-6 transition-transform duration-300 hover:scale-[1.15] hover:shadow-xl rounded-xl px-[18px] py-[20px]">
        <div>
          <Label htmlFor="initialAmount" className="mb-2 block text-navy-dark dark:text-white">
            Investimento inicial
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
            <Input id="initialAmount" type="text" className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis" value={formatNumberAsString(initialAmount)} onChange={handleInitialAmountChange} />
          </div>
        </div>

        <div>
          <Label htmlFor="monthlyDeposit" className="mb-2 block text-navy-dark dark:text-white">
            Depósito mensal
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
            <Input id="monthlyDeposit" type="text" className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis" value={formatNumberAsString(monthlyDeposit)} onChange={handleMonthlyDepositChange} />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="interestRate" className="text-navy-dark dark:text-white">Taxa de juros mensal</Label>
            <span className="font-medium text-gold dark:text-gold-light">{interestRate.toFixed(2)}%</span>
          </div>
          <Slider id="interestRate" min={0.1} max={3} step={0.05} value={[interestRate]} onValueChange={value => setInterestRate(value[0])} />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0,1%</span>
            <span>3%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="timeYears" className="text-navy-dark dark:text-white">Período em anos</Label>
            <span className="font-medium text-gold dark:text-gold-light">{timeYears} anos</span>
          </div>
          <Slider id="timeYears" min={1} max={40} step={1} value={[timeYears]} onValueChange={value => setTimeYears(value[0])} />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>1 ano</span>
            <span>40 anos</span>
          </div>
        </div>

        <ResultsSummary finalAmount={finalAmount} totalDeposits={totalDeposits} totalInterest={totalInterest} />
      </div>
    </div>;
};
interface ResultsSummaryProps {
  finalAmount: number;
  totalDeposits: number;
  totalInterest: number;
}
const ResultsSummary = ({
  finalAmount,
  totalDeposits,
  totalInterest
}: ResultsSummaryProps) => {
  return <div className="bg-gray-42 dark:bg-navy-darkest p-4 rounded-lg border border-gray-150 dark:border-navy-light/20 mt-6 transition-transform duration-300 hover:scale-[1] px-[8px] py-[8px] my-[8px]">
      <h3 className="text-lg font-bold mb-4 text-navy-dark dark:text-white">Resultados</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Valor total acumulado</p>
          <p className="text-2xl font-bold text-navy-dark dark:text-white overflow-hidden text-ellipsis">{formatCurrency(finalAmount)}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total investido</p>
            <p title={formatCurrency(totalDeposits)} className="text-base text-navy-dark dark:text-white truncate sm:text-base font-normal">
              {formatCurrency(totalDeposits)}
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">Juros ganhos</p>
            <p title={formatCurrency(totalInterest)} className="text-base font-medium text-gold dark:text-gold-light truncate sm:text-base">
              {formatCurrency(totalInterest)}
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default InputPanel;