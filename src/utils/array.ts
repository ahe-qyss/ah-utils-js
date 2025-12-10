/**
 * 数组工具函数
 */

import type { TreeNode, ArrayToTreeOptions } from '@/types'

// 数组去重
export const unique = <T>(arr: T[]): T[] => Array.from(new Set(arr))

// 数组扁平化
export const flatten = <T>(arr: any[], depth = 1): T[] => {
  return arr.reduce(
    (acc, val) => acc.concat(depth > 1 && Array.isArray(val) ? flatten(val, depth - 1) : val),
    []
  )
}

// 数组分组
export const group = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): Record<string, T[]> => {
  return arr.reduce(
    (acc, item) => {
      const groupKey = String(item[key])
      if (!acc[groupKey]) acc[groupKey] = []
      acc[groupKey].push(item)
      return acc
    },
    {} as Record<string, T[]>
  )
}

// 数组交集
export const intersection = <T>(arr1: T[], arr2: T[]): T[] => {
  const set = new Set(arr2)
  return arr1.filter((item) => set.has(item))
}

// 数组并集
export const union = <T>(...arrays: T[][]): T[] => unique(arrays.flat())

// 数组差集
export const except = <T>(arr1: T[], arr2: T[]): T[] => {
  const set = new Set(arr2)
  return arr1.filter((item) => !set.has(item))
}

// 数组求和（简单版本，不处理精度问题）
export const arraySum = (arr: number[]): number => {
  return arr.reduce((acc, val) => acc + val, 0)
}

// 数组平均值
export const mean = (arr: number[]): number => {
  return arr.length > 0 ? arraySum(arr) / arr.length : 0
}

// 随机抽取数组元素
export const sample = <T>(arr: T[]): T | undefined => {
  return arr[Math.floor(Math.random() * arr.length)]
}

// 生成数字范围数组
export const range = (start: number, end?: number, step = 1): number[] => {
  if (end === undefined) {
    end = start
    start = 0
  }

  const result: number[] = []
  for (let i = start; i < end; i += step) {
    result.push(i)
  }
  return result
}

// 数组转树形结构
export const arrayToTree = <T extends Record<string, any>>(
  arr: T[],
  options: ArrayToTreeOptions = {}
): TreeNode<T>[] => {
  const { id = 'id', parentId = 'parentId', children = 'children', rootParentId = null } = options

  const map = new Map<any, TreeNode<T>>()
  const result: TreeNode<T>[] = []

  // 创建映射
  arr.forEach((item) => {
    map.set(item[id], { ...item, [children]: [] } as unknown as TreeNode<T>)
  })

  // 构建树形结构
  arr.forEach((item) => {
    const node = map.get(item[id])!
    const parent = map.get(item[parentId])

    if (item[parentId] === rootParentId || !parent) {
      result.push(node)
    } else {
      if (!parent[children]) parent[children] = []
      parent[children].push(node)
    }
  })

  return result
}

// 树形结构转数组
export const treeToArray = <T extends TreeNode>(
  tree: T[],
  childrenKey = 'children'
): Omit<T, 'children'>[] => {
  const result: Omit<T, 'children'>[] = []

  const traverse = (nodes: T[]) => {
    nodes.forEach((node) => {
      const { [childrenKey]: children, ...rest } = node as any
      result.push(rest)
      if (children && Array.isArray(children)) {
        traverse(children)
      }
    })
  }

  traverse(tree)
  return result
}

export default {
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
}
