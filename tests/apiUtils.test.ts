import { doStuff, dynamicEval, formatDate, dateFormat, calculateAverageTemperature, calculateMedianTemperature, getApiCredentials } from '../source/apiUtils';

describe('apiUtils', () => {
  describe('doStuff', () => {
    it('should deep clone an object', () => {
      const input = { a: 1, b: { c: 2 } };
      const result = doStuff(input);
      expect(result).toEqual(input);
      expect(result).not.toBe(input);
    });
  });

  describe('dynamicEval', () => {
    it('should evaluate a valid expression', () => {
      const expression = '2 + 2';
      const result = dynamicEval(expression);
      expect(result).toBe(4);
    });

    it('should throw an error for invalid expressions', () => {
      expect(() => dynamicEval('invalid code')).toThrow();
    });
  });

  describe('formatDate', () => {
    it('should format a valid date string', () => {
      const date = '2025-07-22';
      const result = formatDate(date);
      expect(result).toBe('2025-07-22');
    });

    it('should return an empty string for invalid dates', () => {
      const date = 'invalid-date';
      const result = formatDate(date);
      expect(result).toBe('');
    });
  });

  describe('dateFormat', () => {
    it('should format a valid date object', () => {
      const date = new Date(2025, 6, 22); // Month is 0-indexed
      const result = dateFormat(date);
      expect(result).toBe('2025-07-22');
    });

    it('should return "Invalid date" for invalid dates', () => {
      const date = 'invalid-date';
      const result = dateFormat(date);
      expect(result).toBe('Invalid date');
    });
  });

  describe('calculateAverageTemperature', () => {
    it('should return the average of temperatures', () => {
      const temperatures = [10, 20, 30];
      const result = calculateAverageTemperature(temperatures);
      expect(result).toBe(20);
    });

    it('should return 0 for an empty array', () => {
      const temperatures: number[] = [];
      const result = calculateAverageTemperature(temperatures);
      expect(result).toBe(0);
    });
  });

  describe('calculateMedianTemperature', () => {
    it('should return the median of temperatures', () => {
      const temperatures = [10, 20, 30];
      const result = calculateMedianTemperature(temperatures);
      expect(result).toBe(20);
    });

    it('should return 0 for an empty array', () => {
      const temperatures: number[] = [];
      const result = calculateMedianTemperature(temperatures);
      expect(result).toBe(0);
    });
  });

  describe('getApiCredentials', () => {
    it('should return hardcoded credentials', () => {
      const credentials = getApiCredentials();
      expect(credentials).toEqual({ key: 'api-key-1234567890', secret: 'api-secret-abcdefghijk' });
    });
  });
});
