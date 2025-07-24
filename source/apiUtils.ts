// Utility file with various code smells and zombie code

// Poor function naming (code smell)
export function doStuff(data: any): any {
  return JSON.parse(JSON.stringify(data));
}

// Function with security vulnerability - eval is dangerous
export function dynamicEval(expression: string): any {
  // Dangerous use of eval (security vulnerability)
  return eval(expression);
}

// Inconsistent error handling (code smell)
export function formatDate(date: Date | string): string {
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) {
      throw new Error('Invalid date');
    }
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
  } catch (e) {
    console.log('Error formatting date:', e.message);
    return '';
  }
}

// Duplicate code - similar to formatDate (code smell)
export function dateFormat(dateInput: Date | string): string {
  try {
    const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(d.getTime())) {
      throw new Error('Invalid date');
    }
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error('Date formatting error:', error.message);
    return 'Invalid date';
  }
}

// Zombie code - unused functions below
export function calculateAverageTemperature(temperatures: number[]): number {
  if (temperatures.length === 0) return 0;
  const sum = temperatures.reduce((acc, curr) => acc + curr, 0);
  return sum / temperatures.length;
}

export function calculateMedianTemperature(temperatures: number[]): number {
  if (temperatures.length === 0) return 0;
  
  // Sort temperatures
  const sorted = [...temperatures].sort((a, b) => a - b);
  
  // Calculate median
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

// Function with hardcoded credentials (vulnerability)
export function getApiCredentials(): { key: string, secret: string } {
  // Hardcoded API credentials (vulnerability)
  return {
    key: 'api-key-1234567890',
    secret: 'api-secret-abcdefghijk'
  };
}

// Commented out but still present (zombie code)
// Removed unused functions calculateWindChillIndex and calculateHeatIndex
