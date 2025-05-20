
/**
 * Utility functions for currency and number formatting
 */

/**
 * Format a number as a Brazilian Real currency
 */
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
};

/**
 * Format a number as a string with Brazilian number formatting
 */
export const formatNumberAsString = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Convert a formatted string into a number
 */
export const parseFormattedNumber = (formattedValue: string): number => {
  // Remove todos os caracteres não numéricos, exceto vírgula ou ponto
  const cleaned = formattedValue.replace(/[^\d,\.]/g, '');
  
  // Substitui vírgula por ponto para converter para número
  const normalized = cleaned.replace(/\./g, '').replace(',', '.');
  
  return parseFloat(normalized) || 0;
};

/**
 * Truncate a string for display purposes
 */
export const truncateForDisplay = (value: string, maxLength: number = 15): string => {
  if (value.length <= maxLength) return value;
  return value.substring(0, maxLength) + '...';
};
