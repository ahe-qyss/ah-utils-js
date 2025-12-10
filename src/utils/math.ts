/**
 * 高精度数学运算模块
 * 基于 decimal.js 实现，解决 JavaScript 浮点数精度问题
 */

import Decimal from 'decimal.js'
import type { MathValue, MathResult, CompareResult, MathOperations } from '@/types/math.types'

// 配置默认精度和舍入模式
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP })

// 验证输入是否为有效数字
const isValidNumber = (value: unknown): value is MathValue => {
  if (value === null || value === undefined || typeof value === 'boolean') return false
  try {
    new Decimal(value as MathValue)
    return true
  } catch {
    return false
  }
}

// 格式化计算结果
const formatResult = <T extends number | undefined>(result: Decimal, digit?: T): MathResult<T> => {
  return digit === undefined
    ? (result.toNumber() as MathResult<T>)
    : (result.toFixed(digit) as MathResult<T>)
}

/**
 * 高精度加法
 * @example
 * add(0.1, 0.2)      // 0.3
 * add(0.1, 0.2, 2)   // "0.30"
 */
export const add = <T extends number | undefined = undefined>(
  a: MathValue,
  b: MathValue,
  digit?: T
): MathResult<T> => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new TypeError('参数必须是有效的数字')
  }
  return formatResult(new Decimal(a).plus(b), digit)
}

/**
 * 高精度减法
 * @example
 * subtract(0.3, 0.1)      // 0.2
 * subtract(5, 3, 2)       // "2.00"
 */
export const subtract = <T extends number | undefined = undefined>(
  a: MathValue,
  b: MathValue,
  digit?: T
): MathResult<T> => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new TypeError('参数必须是有效的数字')
  }
  return formatResult(new Decimal(a).minus(b), digit)
}

/**
 * 高精度乘法
 * @example
 * multiply(0.1, 0.2)      // 0.02
 * multiply(1.23, 4.56, 3) // "5.609"
 */
export const multiply = <T extends number | undefined = undefined>(
  a: MathValue,
  b: MathValue,
  digit?: T
): MathResult<T> => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new TypeError('参数必须是有效的数字')
  }
  return formatResult(new Decimal(a).times(b), digit)
}

/**
 * 高精度除法
 * @example
 * divide(1, 3, 2)    // "0.33"
 * divide(10, 2)      // 5
 */
export const divide = <T extends number | undefined = undefined>(
  a: MathValue,
  b: MathValue,
  digit?: T
): MathResult<T> => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new TypeError('参数必须是有效的数字')
  }

  const divisor = new Decimal(b)
  if (divisor.isZero()) {
    throw new Error('除数不能为0')
  }
  return formatResult(new Decimal(a).dividedBy(b), digit)
}

/**
 * 数组求和（高精度）
 * @example
 * sum([0.1, 0.2, 0.3])    // 0.6
 * sum([1.1, 2.2, 3.3], 2) // "6.60"
 */
export const sum = <T extends number | undefined = undefined>(
  arr: MathValue[],
  digit?: T
): MathResult<T> => {
  if (!Array.isArray(arr)) {
    throw new TypeError('第一个参数必须是数组')
  }

  if (arr.length === 0) {
    return (digit === undefined ? 0 : (0).toFixed(digit)) as MathResult<T>
  }

  // 验证数组元素
  arr.forEach((item, index) => {
    if (!isValidNumber(item)) {
      throw new TypeError(`数组索引 ${index} 处的元素不是有效的数字`)
    }
  })

  const result = arr.reduce((acc: Decimal, num) => acc.plus(new Decimal(num)), new Decimal(0))
  return formatResult(result, digit)
}

/**
 * 数组连乘（高精度）
 * @example
 * product([2, 3, 4])      // 24
 * product([1.5, 2, 3], 2) // "9.00"
 */
export const product = <T extends number | undefined = undefined>(
  arr: MathValue[],
  digit?: T
): MathResult<T> => {
  if (!Array.isArray(arr)) {
    throw new TypeError('第一个参数必须是数组')
  }

  if (arr.length === 0) {
    return (digit === undefined ? 1 : (1).toFixed(digit)) as MathResult<T>
  }

  // 验证数组元素
  arr.forEach((item, index) => {
    if (!isValidNumber(item)) {
      throw new TypeError(`数组索引 ${index} 处的元素不是有效的数字`)
    }
  })

  const result = arr.reduce((acc: Decimal, num) => acc.times(new Decimal(num)), new Decimal(1))
  return formatResult(result, digit)
}

/**
 * 四舍五入到指定位数
 * @example
 * round(1.2345, 2)    // "1.23"
 * round(1.2355, 2)    // "1.24"
 */
export const round = (num: MathValue, digit: number): string => {
  if (!isValidNumber(num)) {
    throw new TypeError('第一个参数必须是有效的数字')
  }

  if (!Number.isInteger(digit) || digit < 0) {
    throw new TypeError('digit 参数必须是非负整数')
  }

  return new Decimal(num).toFixed(digit)
}

/**
 * 比较两个数的大小（高精度）
 * @returns 1 (a > b), -1 (a < b), 0 (a = b)
 * @example
 * compare(1, 2)       // -1
 * compare(2, 1)       // 1
 * compare(1, 1)       // 0
 */
export const compare = (a: MathValue, b: MathValue): CompareResult => {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new TypeError('参数必须是有效的数字')
  }
  return new Decimal(a).comparedTo(b) as CompareResult
}

// 导出所有函数
export const math: MathOperations = {
  add,
  subtract,
  multiply,
  divide,
  sum,
  product,
  round,
  compare,
}

export default math
