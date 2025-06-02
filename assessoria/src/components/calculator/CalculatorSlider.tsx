
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface CalculatorSliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string | number;
  onChange: (value: number) => void;
}

const CalculatorSlider = ({
  id,
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange
}: CalculatorSliderProps) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <Label htmlFor={id} className="text-navy-medium dark:text-navy-light">
          {label}
        </Label>
        <span className="font-medium text-navy-medium dark:text-navy-light">
          {displayValue}
        </span>
      </div>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(value) => onChange(value[0])}
        className="my-2"
      />
    </div>
  );
};

export default CalculatorSlider;
