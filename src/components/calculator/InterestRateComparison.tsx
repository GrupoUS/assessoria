
import React from 'react';
import { Line } from 'recharts';
import { formatCurrency } from '@/utils/currencyUtils';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp } from 'lucide-react';

interface ComparisonDataPoint {
  year: number;
  [key: string]: number;
}

interface InterestRateComparisonProps {
  initialAmount: number;
  monthlyDeposit: number;
  baseInterestRate: number;
  timeYears: number;
  comparisonData: ComparisonDataPoint[];
}

const InterestRateComparison = ({
  initialAmount,
  monthlyDeposit,
  baseInterestRate,
  timeYears,
  comparisonData,
}: InterestRateComparisonProps) => {
  const colorMap: Record<string, string> = {
    baseRate: "#588157", // Verde principal
    higherRate: "#9b87f5", // Roxo
    lowerRate: "#778DA9", // Azul acinzentado
  };

  const formatRateLabel = (rate: number) => {
    return `${rate.toFixed(2)}% a.m.`;
  };

  const rateLabels = {
    baseRate: formatRateLabel(baseInterestRate),
    higherRate: formatRateLabel(baseInterestRate * 1.25), // Taxa 25% maior
    lowerRate: formatRateLabel(baseInterestRate * 0.75), // Taxa 25% menor
  };

  // Calcular os valores finais para a tabela comparativa
  const getFinalValueForRate = (rateName: string) => {
    const lastDataPoint = comparisonData[comparisonData.length - 1];
    return lastDataPoint ? lastDataPoint[rateName] : 0;
  };

  const finalValues = {
    baseRate: getFinalValueForRate('baseRate'),
    higherRate: getFinalValueForRate('higherRate'),
    lowerRate: getFinalValueForRate('lowerRate')
  };

  const totalInvested = initialAmount + (monthlyDeposit * timeYears * 12);

  return (
    <Card className="mt-10 bg-white dark:bg-navy-dark">
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-[#588157]" />
          <CardTitle className="text-xl font-semibold">Comparação de Taxas de Juros</CardTitle>
        </div>
        <CardDescription>
          Veja como diferentes taxas de juros afetam seu patrimônio ao longo de {timeYears} anos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="h-[300px] w-full">
            <ChartContainer
              config={{
                baseRate: { 
                  color: colorMap.baseRate, 
                  label: rateLabels.baseRate 
                },
                higherRate: { 
                  color: colorMap.higherRate, 
                  label: rateLabels.higherRate 
                },
                lowerRate: { 
                  color: colorMap.lowerRate, 
                  label: rateLabels.lowerRate 
                },
              }}
            >
              {(props) => (
                <recharts.LineChart
                  data={comparisonData}
                  margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
                >
                  <recharts.CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <recharts.XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tickFormatter={(value) => `Ano ${value}`}
                  />
                  <recharts.YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tickFormatter={(value) =>
                      `${
                        value >= 1000000
                          ? `${(value / 1000000).toFixed(0)}M`
                          : value >= 1000
                          ? `${(value / 1000).toFixed(0)}k`
                          : value
                      }`
                    }
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="dot"
                        formatter={(value: number) => [
                          formatCurrency(value),
                          "Valor",
                        ]}
                      />
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="baseRate"
                    name={rateLabels.baseRate}
                    stroke={colorMap.baseRate}
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="higherRate"
                    name={rateLabels.higherRate}
                    stroke={colorMap.higherRate}
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="lowerRate"
                    name={rateLabels.lowerRate}
                    stroke={colorMap.lowerRate}
                    strokeWidth={3}
                    dot={false}
                  />
                </recharts.LineChart>
              )}
            </ChartContainer>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Taxa</TableHead>
              <TableHead className="text-right">Total Investido</TableHead>
              <TableHead className="text-right">Valor Final</TableHead>
              <TableHead className="text-right">Ganho</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorMap.lowerRate }}></div>
                  {rateLabels.lowerRate}
                </div>
              </TableCell>
              <TableCell className="text-right">{formatCurrency(totalInvested)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.lowerRate)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.lowerRate - totalInvested)}</TableCell>
            </TableRow>
            <TableRow className="bg-[#588157]/5">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorMap.baseRate }}></div>
                  {rateLabels.baseRate} (atual)
                </div>
              </TableCell>
              <TableCell className="text-right">{formatCurrency(totalInvested)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.baseRate)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.baseRate - totalInvested)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorMap.higherRate }}></div>
                  {rateLabels.higherRate}
                </div>
              </TableCell>
              <TableCell className="text-right">{formatCurrency(totalInvested)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.higherRate)}</TableCell>
              <TableCell className="text-right">{formatCurrency(finalValues.higherRate - totalInvested)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InterestRateComparison;
