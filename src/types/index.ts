// 基础类型
export type Primitive = string | number | boolean | null | undefined | symbol | bigint

// 深度只读
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Primitive
    ? T[P]
    : T[P] extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : DeepReadonly<T[P]>
}

// 深度可选
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Primitive
    ? T[P]
    : T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : DeepPartial<T[P]>
}

// 函数类型
export type AnyFunction = (...args: any[]) => any
export type VoidFunction = () => void

// 数组类型
export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer U)[] ? U : never

// 对象类型
export type PlainObject<T = any> = Record<string, T>

// 可为空类型
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = T | null | undefined

// 数学运算精度选项
export interface MathOptions {
  /** 保留的小数位数 */
  digit?: number
  /** 是否返回字符串 */
  asString?: boolean
}

// 数字或字符串数字
export type NumberLike = number | string

// 树形结构节点
export interface TreeNode<T = any> {
  id: string | number
  parentId?: string | number | null
  children?: TreeNode<T>[]
  [key: string]: any
}

// 数组转树配置
export interface ArrayToTreeOptions {
  id?: string
  parentId?: string
  children?: string
  rootParentId?: any
}

// DOM 元素选择器
export type ElementSelector = string | Element | null

// 浏览器信息
export interface BrowserInfo {
  isChrome: boolean
  isMobile: boolean
  isIos: boolean
  isAndroid: boolean
  isWx: boolean
  isWxMobile: boolean
  isWxPc: boolean
  isWxWork: boolean
  isWxWorkMobile: boolean
  isWxWorkPc: boolean
  isFirefox: boolean
  isSafari: boolean
  isWindows: boolean
  isMac: boolean
}

// 存储选项
export interface StorageOptions {
  /** 过期时间（毫秒） */
  expiredTime?: number
}

// 防抖配置
export interface DebounceOptions {
  /** 延迟时间 */
  wait: number
  /** 是否立即执行 */
  immediate?: boolean
}

// 节流配置
export interface ThrottleOptions {
  /** 延迟时间 */
  wait: number
  /** 首次是否执行 */
  leading?: boolean
  /** 结束后是否执行 */
  trailing?: boolean
}

