import Decimal from 'decimal.js'

// 可以用于数学计算的值类型
export type MathValue = number | string | Decimal

// 数学运算结果类型
export type MathResult<T extends number | undefined = undefined> = T extends number
  ? string
  : number

// 比较结果
export type CompareResult = -1 | 0 | 1

// 运算类型
export enum OperationType {
  ADD = 0,
  SUBTRACT = 1,
  MULTIPLY = 2,
  DIVIDE = 3,
}

// 数学运算配置
export interface MathConfig {
  /** 精度（有效数字位数） */
  precision?: number
  /** 舍入模式 */
  rounding?: Decimal.Rounding
}

// 数学运算函数类型
export interface MathOperations {
  /** 加法 */
  add: <T extends number | undefined = undefined>(
    a: MathValue,
    b: MathValue,
    digit?: T
  ) => MathResult<T>

  /** 减法 */
  subtract: <T extends number | undefined = undefined>(
    a: MathValue,
    b: MathValue,
    digit?: T
  ) => MathResult<T>

  /** 乘法 */
  multiply: <T extends number | undefined = undefined>(
    a: MathValue,
    b: MathValue,
    digit?: T
  ) => MathResult<T>

  /** 除法 */
  divide: <T extends number | undefined = undefined>(
    a: MathValue,
    b: MathValue,
    digit?: T
  ) => MathResult<T>

  /** 数组求和 */
  sum: <T extends number | undefined = undefined>(
    arr: MathValue[],
    digit?: T
  ) => MathResult<T>

  /** 数组连乘 */
  product: <T extends number | undefined = undefined>(
    arr: MathValue[],
    digit?: T
  ) => MathResult<T>

  /** 四舍五入 */
  round: (num: MathValue, digit: number) => string

  /** 比较大小 */
  compare: (a: MathValue, b: MathValue) => CompareResult
}

