/**
 * 对象工具函数
 */

import type { PlainObject, DeepPartial } from '@/types'

// 深度克隆
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as T
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as T
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item)) as T

  const cloned = {} as T
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key])
    }
  }
  return cloned
}

// 深度合并对象
export const merge = <T extends PlainObject>(...objects: DeepPartial<T>[]): T => {
  const result = {} as T

  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key]

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        result[key as keyof T] = merge(
          (result[key as keyof T] as PlainObject) || {},
          value as PlainObject
        ) as T[keyof T]
      } else {
        result[key as keyof T] = value as T[keyof T]
      }
    })
  })

  return result
}

// 获取对象属性值（支持路径）
export const get = <T = any>(obj: PlainObject, path: string | string[], defaultValue?: T): T => {
  const keys = Array.isArray(path) ? path : path.split('.')
  let result: any = obj

  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue as T
    }
    result = result[key]
  }

  return result === undefined ? (defaultValue as T) : result
}

// 设置对象属性值（支持路径）
export const set = (obj: PlainObject, path: string | string[], value: any): PlainObject => {
  const keys = Array.isArray(path) ? path : path.split('.')
  const lastKey = keys.pop()!

  let current = obj
  for (const key of keys) {
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key]
  }

  current[lastKey] = value
  return obj
}

// 删除对象属性（支持路径）
export const remove = (obj: PlainObject, path: string | string[]): boolean => {
  const keys = Array.isArray(path) ? path : path.split('.')
  const lastKey = keys.pop()!

  let current = obj
  for (const key of keys) {
    if (!current[key] || typeof current[key] !== 'object') {
      return false
    }
    current = current[key]
  }

  return delete current[lastKey]
}

// 判断对象是否有指定属性（支持路径）
export const has = (obj: PlainObject, path: string | string[]): boolean => {
  const keys = Array.isArray(path) ? path : path.split('.')
  let current = obj

  for (const key of keys) {
    if (!current || typeof current !== 'object' || !(key in current)) {
      return false
    }
    current = current[key]
  }

  return true
}

// 挑选对象的指定属性
export const pick = <T extends PlainObject, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key]
  })
  return result
}

// 排除对象的指定属性
export const omit = <T extends PlainObject, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result
}

export default {
  deepClone,
  merge,
  get,
  set,
  remove,
  has,
  pick,
  omit,
}
