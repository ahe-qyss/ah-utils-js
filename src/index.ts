/**
 * ahUtils - Modern JavaScript/TypeScript Utility Library
 * @version 1.0.0
 * @license MIT
 */

// 类型定义
export * from './types'
export * from './types/math.types'

// 基础工具
export * from './utils/base'
export { default as base } from './utils/base'

// 数学运算
export * from './utils/math'
export { default as math } from './utils/math'

// 数组工具
export {
  unique,
  flatten,
  group,
  intersection,
  union,
  except,
  arraySum,
  mean,
  sample,
  range,
  arrayToTree,
  treeToArray,
} from './utils/array'
export { default as array } from './utils/array'

// 字符串工具
export * from './utils/string'
export { default as string } from './utils/string'

// 对象工具
export * from './utils/object'
export { default as object } from './utils/object'

// 默认导出
import base from './utils/base'
import math from './utils/math'
import array from './utils/array'
import string from './utils/string'
import object from './utils/object'

export default {
  base,
  math,
  array,
  string,
  object,
}
