
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
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
    const value = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
    setInitialAmount(isNaN(value) ? 0 : value);
  };

  const handleMonthlyDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
    setMonthlyDeposit(isNaN(value) ? 0 : value);
  };

  const handleRateChange = (value: number[]) => {
    setInterestRate(value[0]);
  };

  const handleTimeChange = (value: number[]) => {
    setTimeYears(value[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Calculadora de Juros Compostos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel de inputs */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div>
                <Label htmlFor="initialAmount" className="mb-2 block">
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
                <Label htmlFor="monthlyDeposit" className="mb-2 block">
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

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="interestRate">Taxa de juros mensal</Label>
                  <span className="font-medium text-gold">{interestRate.toFixed(2)}%</span>
                </div>
                <Slider
                  id="interestRate"
                  min={0.1}
                  max={3}
                  step={0.05}
                  value={[interestRate]}
                  onValueChange={handleRateChange}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0,1%</span>
                  <span>3%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="timeYears">Período em anos</Label>
                  <span className="font-medium text-gold">{timeYears} anos</span>
                </div>
                <Slider
                  id="timeYears"
                  min={1}
                  max={40}
                  step={1}
                  value={[timeYears]}
                  onValueChange={handleTimeChange}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 ano</span>
                  <span>40 anos</span>
                </div>
              </div>

              {/* Resultados em cards */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                <h3 className="text-lg font-bold mb-4">Resultados</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Valor total acumulado</p>
                    <p className="text-2xl font-bold text-darkBlue">{formatCurrency(finalAmount)}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total investido</p>
                      <p className="text-lg font-medium">{formatCurrency(totalDeposits)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Juros ganhos</p>
                      <p className="text-lg font-medium text-gold">{formatCurrency(totalInterest)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow h-full">
              <h3 className="text-lg font-bold mb-6">Evolução do patrimônio</h3>
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      name="Ano"
                      label={{ value: 'Anos', position: 'insideBottomRight', offset: -5 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `${Math.round(value / 1000)}k`}
                      label={{ value: 'Valor (R$)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value) => formatCurrency(Number(value))}
                      labelFormatter={(value) => `Ano ${value}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      name="Patrimônio Total" 
                      stroke="#0F2A4A" 
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
                <h3 className="text-lg font-bold mb-3">Sobre os juros compostos</h3>
                <p className="text-gray-700 mb-4">
                  Os juros compostos são considerados a "oitava maravilha do mundo" e atuam como uma poderosa alavanca para o crescimento patrimonial. 
                  Na prática, é o efeito de ganhar juros sobre juros ao longo do tempo.
                </p>
                <p className="text-gray-700 mb-4">
                  Com disciplina e tempo, mesmo aportes mensais modestos podem resultar em um patrimônio significativo no longo prazo.
                </p>
                <div className="flex justify-center mt-6">
                  <a href="#cta" className="btn-primary">
                    Quero uma estratégia personalizada para meus investimentos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-darkBlue rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para dar o próximo passo?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Cálculos são apenas o começo. Receba uma estratégia personalizada para maximizar seus investimentos com segurança.
          </p>
          <a href="#cta" className="btn-primary inline-block">
            Agendar consultoria gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompoundCalculator;
