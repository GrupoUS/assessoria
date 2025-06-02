
import { formatCurrency } from './currencyUtils';

interface ExportData {
  initialAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  timeYears: number;
  finalAmount: number;
  totalDeposits: number;
  totalInterest: number;
}

export const printCalculationResults = () => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor, permita pop-ups para imprimir os resultados.');
    return;
  }

  const content = document.getElementById('calculator-container');
  if (!content) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resultados da Calculadora de Juros Compostos</title>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          color: #333;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        .result-box {
          border: 1px solid #ddd;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
        }
        .result-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        .result-label {
          font-weight: bold;
        }
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px 12px;
          text-align: left;
        }
        th {
          background-color: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Calculadora de Juros Compostos</h1>
          <p>Resultados da sua simulação</p>
        </div>
        
        ${content.innerHTML}
        
        <div class="footer">
          <p>Gerado em ${new Date().toLocaleDateString()} através da Calculadora de Juros Compostos.</p>
          <p>© Maurício Magalhães - Todos os direitos reservados</p>
        </div>
      </div>
      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
};

export const exportToPDF = (data: ExportData) => {
  const { initialAmount, monthlyDeposit, interestRate, timeYears, finalAmount, totalDeposits, totalInterest } = data;
  
  // If using only the print functionality
  printCalculationResults();
};
