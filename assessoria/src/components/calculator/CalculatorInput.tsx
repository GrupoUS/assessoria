
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CalculatorInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const CalculatorInput = ({
  id,
  label,
  value,
  onChange,
  onBlur
}: CalculatorInputProps) => {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-navy-medium dark:text-navy-light">
        {label}
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
          R$
        </span>
        <Input
          id={id}
          type="text"
          className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default CalculatorInput;
