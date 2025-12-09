import { describe, it, expect } from 'vitest'
import {
  getType,
  isType,
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isEmpty,
  isEquals,
} from '../base'

describe('Base Utils', () => {
  describe('getType', () => {
    it('should return correct type', () => {
      expect(getType([])).toBe('array')
      expect(getType({})).toBe('object')
      expect(getType(null)).toBe('null')
      expect(getType(undefined)).toBe('undefined')
      expect(getType(123)).toBe('number')
      expect(getType('string')).toBe('string')
      expect(getType(true)).toBe('boolean')
      expect(getType(new Date())).toBe('date')
      expect(getType(/regex/)).toBe('regexp')
      expect(getType(() => {})).toBe('function')
    })
  })

  describe('isType', () => {
    it('should check type correctly', () => {
      expect(isType([], 'array')).toBe(true)
      expect(isType({}, 'object')).toBe(true)
      expect(isType('string', 'string')).toBe(true)
      expect(isType(123, 'number')).toBe(true)
    })
  })

  describe('type guards', () => {
    it('isArray should work', () => {
      expect(isArray([])).toBe(true)
      expect(isArray({})).toBe(false)
    })

    it('isObject should work', () => {
      expect(isObject({})).toBe(true)
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
    })

    it('isFunction should work', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(function () {})).toBe(true)
      expect(isFunction({})).toBe(false)
    })

    it('isString should work', () => {
      expect(isString('hello')).toBe(true)
      expect(isString('')).toBe(true)
      expect(isString(123)).toBe(false)
    })

    it('isNumber should work', () => {
      expect(isNumber(123)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(NaN)).toBe(false)
      expect(isNumber('123')).toBe(false)
    })

    it('isBoolean should work', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
      expect(isBoolean(1)).toBe(false)
    })

    it('isNull should work', () => {
      expect(isNull(null)).toBe(true)
      expect(isNull(undefined)).toBe(false)
      expect(isNull(0)).toBe(false)
    })

    it('isUndefined should work', () => {
      expect(isUndefined(undefined)).toBe(true)
      expect(isUndefined(null)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should check if value is empty', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
      
      expect(isEmpty('hello')).toBe(false)
      expect(isEmpty([1])).toBe(false)
      expect(isEmpty({ a: 1 })).toBe(false)
      expect(isEmpty(0)).toBe(false)
    })
  })

  describe('isEquals', () => {
    it('should compare primitive values', () => {
      expect(isEquals(1, 1)).toBe(true)
      expect(isEquals('a', 'a')).toBe(true)
      expect(isEquals(true, true)).toBe(true)
      expect(isEquals(null, null)).toBe(true)
      expect(isEquals(undefined, undefined)).toBe(true)
    })

    it('should compare arrays', () => {
      expect(isEquals([1, 2, 3], [1, 2, 3])).toBe(true)
      expect(isEquals([1, 2], [1, 2, 3])).toBe(false)
      expect(isEquals([[1, 2]], [[1, 2]])).toBe(true)
    })

    it('should compare objects', () => {
      expect(isEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
      expect(isEquals({ a: 1 }, { a: 1, b: 2 })).toBe(false)
      expect(isEquals({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
    })

    it('should compare dates', () => {
      const date1 = new Date('2024-01-01')
      const date2 = new Date('2024-01-01')
      const date3 = new Date('2024-01-02')
      
      expect(isEquals(date1, date2)).toBe(true)
      expect(isEquals(date1, date3)).toBe(false)
    })
  })
})

