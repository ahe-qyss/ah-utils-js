import type { AnyFunction } from '@/types'

// 获取值的类型
export const getType = (value: unknown): string => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

// 判断是否为指定类型
export const isType = (value: unknown, type: string): boolean => {
  return getType(value) === type.toLowerCase()
}

// 判断是否为数组
export const isArray = (value: unknown): value is Array<any> => {
  return Array.isArray(value)
}

// 判断是否为对象
export const isObject = (value: unknown): value is Record<string, any> => {
  return getType(value) === 'object'
}

// 判断是否为函数
export const isFunction = (value: unknown): value is AnyFunction => {
  return typeof value === 'function'
}

// 判断是否为字符串
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

// 判断是否为数字
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

// 判断是否为布尔值
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

// 判断是否为 null
export const isNull = (value: unknown): value is null => {
  return value === null
}

// 判断是否为 undefined
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined
}

// 判断是否为日期对象
export const isDate = (value: unknown): value is Date => {
  return getType(value) === 'date'
}

// 判断是否为正则表达式
export const isRegExp = (value: unknown): value is RegExp => {
  return getType(value) === 'regexp'
}

/**
 * 判断是否为空值
 * null, undefined, '', [], {} 都视为空
 */
export const isEmpty = (value: unknown): boolean => {
  if (isNull(value) || isUndefined(value)) return true
  if (isString(value)) return value.length === 0
  if (isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

// 深度相等比较
export const isEquals = (a: unknown, b: unknown): boolean => {
  if (a === b) return true
  if (a === null || b === null || a === undefined || b === undefined) return a === b

  const typeA = getType(a)
  const typeB = getType(b)
  if (typeA !== typeB) return false

  if (typeA === 'array') {
    const arrA = a as Array<any>
    const arrB = b as Array<any>
    if (arrA.length !== arrB.length) return false
    return arrA.every((item, index) => isEquals(item, arrB[index]))
  }

  if (typeA === 'object') {
    const objA = a as Record<string, any>
    const objB = b as Record<string, any>
    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)
    if (keysA.length !== keysB.length) return false
    return keysA.every((key) => isEquals(objA[key], objB[key]))
  }

  if (typeA === 'date') {
    return (a as Date).getTime() === (b as Date).getTime()
  }

  if (typeA === 'regexp') {
    return (a as RegExp).toString() === (b as RegExp).toString()
  }

  return false
}

export default {
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
  isDate,
  isRegExp,
  isEmpty,
  isEquals,
}
