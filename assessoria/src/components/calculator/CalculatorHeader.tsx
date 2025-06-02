
import React from 'react';

interface CalculatorHeaderProps {
  title: string;
  description: string;
}

const CalculatorHeader = ({ title, description }: CalculatorHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-navy-darkest dark:text-white">{title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CalculatorHeader;
