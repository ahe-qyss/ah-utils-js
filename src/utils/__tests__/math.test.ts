/**
 * 数学运算模块测试
 */

import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide, sum, product, round, compare } from '../math'

describe('Math Utils', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(0.1, 0.2)).toBe(0.3)
      expect(add(1, 2)).toBe(3)
    })

    it('should handle precision with digit parameter', () => {
      expect(add(0.1, 0.2, 2)).toBe('0.30')
      expect(add(1.234, 5.678, 1)).toBe('6.9')
    })

    it('should handle string numbers', () => {
      expect(add('0.1', '0.2')).toBe(0.3)
      expect(add('10', '20', 2)).toBe('30.00')
    })

    it('should throw error for invalid inputs', () => {
      expect(() => add('hello' as any, 1)).toThrow()
      expect(() => add(1, null as any)).toThrow()
    })
  })

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(0.3, 0.1)).toBe(0.2)
      expect(subtract(1, 0.9)).toBe(0.1)
    })

    it('should handle precision', () => {
      expect(subtract(10.5, 3.2, 1)).toBe('7.3')
      expect(subtract(5, 3, 2)).toBe('2.00')
    })
  })

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(0.1, 0.2)).toBe(0.02)
      expect(multiply(3, 4)).toBe(12)
    })

    it('should handle precision', () => {
      expect(multiply(1.23, 4.56, 3)).toBe('5.609')
      expect(multiply(3, 4, 2)).toBe('12.00')
    })
  })

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5)
      expect(divide(1, 3, 2)).toBe('0.33')
    })

    it('should handle precision', () => {
      expect(divide(1, 3, 4)).toBe('0.3333')
      expect(divide(10, 3, 0)).toBe('3')
    })

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('除数不能为0')
    })
  })

  describe('sum', () => {
    it('should sum array of numbers', () => {
      expect(sum([0.1, 0.2, 0.3])).toBe(0.6)
      expect(sum([1, 2, 3, 4, 5])).toBe(15)
    })

    it('should handle precision', () => {
      expect(sum([1.1, 2.2, 3.3], 2)).toBe('6.60')
    })

    it('should return 0 for empty array', () => {
      expect(sum([])).toBe(0)
      expect(sum([], 2)).toBe('0.00')
    })

    it('should throw error for invalid array elements', () => {
      expect(() => sum([1, 2, 'invalid' as any])).toThrow()
    })
  })

  describe('product', () => {
    it('should multiply array of numbers', () => {
      expect(product([2, 3, 4])).toBe(24)
      expect(product([0.1, 0.2, 0.3])).toBe(0.006)
    })

    it('should return 1 for empty array', () => {
      expect(product([])).toBe(1)
    })
  })

  describe('round', () => {
    it('should round numbers correctly', () => {
      expect(round(1.2345, 2)).toBe('1.23')
      expect(round(1.2355, 2)).toBe('1.24')
      expect(round(10, 2)).toBe('10.00')
    })

    it('should throw error for invalid digit', () => {
      expect(() => round(1.23, -1)).toThrow()
      expect(() => round(1.23, 1.5 as any)).toThrow()
    })
  })

  describe('compare', () => {
    it('should compare numbers correctly', () => {
      expect(compare(1, 2)).toBe(-1)
      expect(compare(2, 1)).toBe(1)
      expect(compare(1, 1)).toBe(0)
    })

    it('should handle precision comparison', () => {
      expect(compare(add(0.1, 0.2), 0.3)).toBe(0)
    })
  })
})
