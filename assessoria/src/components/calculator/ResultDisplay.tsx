
import React from 'react';
import { ArrowRight } from "lucide-react";
import { formatCurrency, truncateForDisplay } from '@/utils/currencyUtils';

interface ResultDisplayProps {
  timeYears: number;
  finalAmount: number;
}

const ResultDisplay = ({ timeYears, finalAmount }: ResultDisplayProps) => {
  const formattedAmount = formatCurrency(finalAmount);
  const displayAmount = formattedAmount.replace('R$', '').trim();
  
  return (
    <div className="bg-navy-lightest dark:bg-navy-dark/70 p-4 rounded-lg mt-4 transition-all duration-300 hover:scale-[1.03]">
      <div className="flex justify-between items-center">
        <div className="w-full">
          <p className="text-sm text-navy-medium dark:text-navy-light">
            Patrimônio em {timeYears} anos
          </p>
          <div className="flex items-baseline">
            <span className="text-lg font-medium text-navy-darkest dark:text-white mr-1">R$</span>
            <span 
              className="text-2xl font-bold text-navy-darkest dark:text-white truncate" 
              title={formattedAmount}
            >
              {displayAmount}
            </span>
          </div>
        </div>
        <ArrowRight className="h-8 w-8 text-navy-medium dark:text-navy-light ml-2 flex-shrink-0" />
      </div>
    </div>
  );
};

export default ResultDisplay;
