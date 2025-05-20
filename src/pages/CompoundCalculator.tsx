import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SEOHead from '../components/shared/SEOHead';

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

const CompoundCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(0.8); // 0.8% ao mês (aprox. 10% ao ano)
  const [timeYears, setTimeYears] = useState<number>(10);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  const calculateCompoundInterest = () => {
    let balance = initialAmount;
    let totalDeposited = initialAmount;
    const monthlyRate = interestRate / 100;
    const months = timeYears * 12;
    const data = [];

    for (let i = 0; i <= months; i++) {
      // No primeiro mês, só temos o valor inicial
      if (i > 0) {
        balance = balance * (1 + monthlyRate) + monthlyDeposit;
        totalDeposited += monthlyDeposit;
      }

      if (i % 12 === 0) {
        data.push({
          year: i / 12,
          balance: Math.round(balance),
          deposits: Math.round(totalDeposited)
        });
      }
    }

    setFinalAmount(balance);
    setTotalDeposits(totalDeposited);
    setTotalInterest(balance - totalDeposited);
    setChartData(data);
  };

  // Recalcular quando qualquer input mudar
  useEffect(() => {
    calculateCompoundInterest();
  }, [initialAmount, monthlyDeposit, interestRate, timeYears]);

  const handleInitialAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const parsedValue = parseFormattedNumber(rawValue);
    setInitialAmount(parsedValue);
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const parsedValue = parseFormattedNumber(rawValue);
    setMonthlyDeposit(parsedValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest py-16">
      <SEOHead 
        title="Calculadora de Juros Compostos | Maurício Magalhães"
        description="Use nossa calculadora de juros compostos para visualizar o crescimento do seu patrimônio ao longo do tempo. Planeje seus investimentos de forma eficiente."
        keywords="calculadora juros compostos, investimentos, planejamento financeiro, crescimento patrimonial"
        canonicalUrl="https://www.mauriciomagalhaes.com.br/calculadora-juros-compostos"
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-navy-darkest dark:text-white">Calculadora de Juros Compostos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel de inputs */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow space-y-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div>
                <Label htmlFor="initialAmount" className="mb-2 block text-navy-dark dark:text-white">
                  Investimento inicial
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
                  <Input
                    id="initialAmount"
                    type="text"
                    className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis"
                    value={formatNumberAsString(initialAmount)}
                    onChange={handleInitialAmountChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="monthlyDeposit" className="mb-2 block text-navy-dark dark:text-white">
                  Depósito mensal
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">R$</span>
                  <Input
                    id="monthlyDeposit"
                    type="text"
                    className="pl-10 bg-white dark:bg-navy-darkest text-navy-darkest dark:text-white border-gray-300 dark:border-navy-light/20 overflow-hidden text-ellipsis"
                    value={formatNumberAsString(monthlyDeposit)}
                    onChange={handleMonthlyDepositChange}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="interestRate" className="text-navy-dark dark:text-white">Taxa de juros mensal</Label>
                  <span className="font-medium text-gold dark:text-gold-light">{interestRate.toFixed(2)}%</span>
                </div>
                <Slider
                  id="interestRate"
                  min={0.1}
                  max={3}
                  step={0.05}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                />
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
                <Slider
                  id="timeYears"
                  min={1}
                  max={40}
                  step={1}
                  value={[timeYears]}
                  onValueChange={(value) => setTimeYears(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 ano</span>
                  <span>40 anos</span>
                </div>
              </div>

              {/* Resultados em cards - UPDATED to be more responsive */}
              <div className="bg-gray-50 dark:bg-navy-darkest p-4 rounded-lg border border-gray-200 dark:border-navy-light/20 mt-6 transition-transform duration-300 hover:scale-[1.03]">
                <h3 className="text-lg font-bold mb-4 text-navy-dark dark:text-white">Resultados</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Valor total acumulado</p>
                    <p className="text-2xl font-bold text-navy-dark dark:text-white overflow-hidden text-ellipsis">{formatCurrency(finalAmount)}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total investido</p>
                      <p className="text-base sm:text-lg font-medium text-navy-dark dark:text-white truncate" title={formatCurrency(totalDeposits)}>
                        {formatCurrency(totalDeposits)}
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Juros ganhos</p>
                      <p className="text-base sm:text-lg font-medium text-gold dark:text-gold-light truncate" title={formatCurrency(totalInterest)}>
                        {formatCurrency(totalInterest)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow h-full transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
              <h3 className="text-lg font-bold mb-6 text-navy-dark dark:text-white">Evolução do patrimônio</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#415A77' : '#E0E1DD'} />
                    <XAxis 
                      dataKey="year" 
                      name="Ano"
                      label={{ value: 'Anos', position: 'insideBottomRight', offset: -5 }}
                      stroke={document.documentElement.classList.contains('dark') ? '#E0E1DD' : '#0F2A4A'}
                    />
                    <YAxis 
                      tickFormatter={(value) => `${Math.round(value / 1000)}k`}
                      label={{ value: 'Valor (R$)', angle: -90, position: 'insideLeft' }}
                      stroke={document.documentElement.classList.contains('dark') ? '#E0E1DD' : '#0F2A4A'}
                    />
                    <Tooltip 
                      formatter={(value) => formatCurrency(Number(value))}
                      labelFormatter={(value) => `Ano ${value}`}
                      contentStyle={{ 
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#1B263B' : '#fff',
                        borderColor: document.documentElement.classList.contains('dark') ? '#415A77' : '#ddd',
                        color: document.documentElement.classList.contains('dark') ? '#E0E1DD' : '#333'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      name="Patrimônio Total" 
                      stroke={document.documentElement.classList.contains('dark') ? '#E0E1DD' : '#0F2A4A'} 
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
                  <a href="#cta" className="inline-block bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center">
                    Quero uma estratégia personalizada para meus investimentos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-navy-dark dark:bg-navy-darkest rounded-lg text-white text-center transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Pronto para dar o próximo passo?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Cálculos são apenas o começo. Receba uma estratégia personalizada para maximizar seus investimentos com segurança.
          </p>
          <a href="#cta" className="inline-block bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center">
            Agendar consultoria gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompoundCalculator;
