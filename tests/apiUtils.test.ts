import { doStuff, dynamicEval, formatDate, dateFormat } from '../source/apiUtils';

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
});
