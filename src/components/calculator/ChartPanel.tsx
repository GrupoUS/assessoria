
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/utils/currencyUtils';
import { Button } from '@/components/ui/button';

interface ChartPanelProps {
  chartData: Array<{
    year: number;
    balance: number;
    deposits: number;
  }>;
}

const ChartPanel = ({ chartData }: ChartPanelProps) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  return (
    <div className="w-full">
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow h-full transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
        <h3 className="text-lg font-bold mb-6 text-navy-dark dark:text-white">Evolução do patrimônio</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 50, // Aumentado para dar mais espaço para os rótulos do eixo Y
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#415A77' : '#E0E1DD'} />
              <XAxis 
                dataKey="year" 
                name="Ano"
                label={{ value: 'Anos', position: 'insideBottomRight', offset: -5 }}
                stroke={isDarkMode ? '#E0E1DD' : '#0F2A4A'}
              />
              <YAxis 
                tickFormatter={(value) => `${Math.round(value / 1000)}k`}
                label={{ 
                  value: 'Valor (R$)', 
                  angle: -90, 
                  position: 'insideLeft',
                  offset: -35, // Deslocando mais o rótulo para evitar sobreposição
                  style: { textAnchor: 'middle' }
                }}
                stroke={isDarkMode ? '#E0E1DD' : '#0F2A4A'}
              />
              <Tooltip 
                formatter={(value) => formatCurrency(Number(value))}
                labelFormatter={(value) => `Ano ${value}`}
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1B263B' : '#fff',
                  borderColor: isDarkMode ? '#415A77' : '#ddd',
                  color: isDarkMode ? '#E0E1DD' : '#333'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="balance" 
                name="Patrimônio Total" 
                stroke={isDarkMode ? '#00BFFF' : '#0F2A4A'} 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="deposits" 
                name="Total Investido" 
                stroke="#C8A951" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-3 text-navy-dark dark:text-white">Sobre os juros compostos</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Os juros compostos são considerados a "oitava maravilha do mundo" e atuam como uma poderosa alavanca para o crescimento patrimonial. 
            Na prática, é o efeito de ganhar juros sobre juros ao longo do tempo.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Com disciplina e tempo, mesmo aportes mensais modestos podem resultar em um patrimônio significativo no longo prazo.
          </p>
          <div className="flex justify-center mt-6">
            <a href="https://wa.me/5564999886688" className="inline-block" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#588157] hover:bg-[#4e7048] py-3 px-6">
                Quero proteger e multiplicar meu patrimônio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPanel;
