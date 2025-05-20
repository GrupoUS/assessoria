
import React from 'react';
import { ArrowRight } from "lucide-react";
import { formatCurrency } from '@/utils/currencyUtils';

interface ResultDisplayProps {
  timeYears: number;
  finalAmount: number;
}

const ResultDisplay = ({ timeYears, finalAmount }: ResultDisplayProps) => {
  return (
    <div className="bg-navy-lightest dark:bg-navy-dark/70 p-4 rounded-lg mt-4 transition-transform duration-300 hover:scale-[1.03]">
      <div className="flex justify-between items-center">
        <div className="w-full">
          <p className="text-sm text-navy-medium dark:text-navy-light">
            Patrimônio em {timeYears} anos
          </p>
          <p 
            className="text-2xl font-bold text-navy-darkest dark:text-white truncate" 
            title={formatCurrency(finalAmount)}
          >
            {formatCurrency(finalAmount)}
          </p>
        </div>
        <ArrowRight className="h-8 w-8 text-navy-medium dark:text-navy-light ml-2 flex-shrink-0" />
      </div>
    </div>
  );
};

export default ResultDisplay;
