# ahUtils

> 🚀 现代化的 JavaScript/TypeScript 工具库，提供高精度数学运算支持

[![npm version](https://img.shields.io/npm/v/ah-utils-js.svg)](https://www.npmjs.com/package/ah-utils-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

---

## 📑 目录

- [✨ 特性](#-特性)
- [📦 安装](#-安装)
- [🚀 快速开始](#-快速开始)
- [🗂️ API 总览](#-api-总览)
- [📚 完整 API 文档](#-完整-api-文档)
  - [1. 数学模块](#1-数学模块-math)
  - [2. 数组模块](#2-数组模块-array)
  - [3. 字符串模块](#3-字符串模块-string)
  - [4. 对象模块](#4-对象模块-object)
  - [5. 基础类型判断模块](#5-基础类型判断模块-base)
- [💡 使用示例](#-使用示例)
- [📋 环境要求](#-环境要求)
- [📄 许可证](#-许可证)

---

## ✨ 特性

- 🎯 **TypeScript 优先** - 完整的类型定义，支持 IDE 自动补全
- 🧮 **高精度数学运算** - 基于 decimal.js，解决 JavaScript 浮点数精度问题
- 📦 **Tree-shaking 支持** - 按需导入，只打包使用的代码
- 🧪 **完善测试** - 使用 Vitest 进行全面测试
- 📚 **丰富的工具函数** - 数组、对象、字符串、数学运算等
- 🌐 **通用环境** - 支持浏览器和 Node.js
- 🎨 **体积小巧** - 全功能仅 ~15KB (gzipped)

---

## 📦 安装

```bash
# pnpm (推荐)
pnpm add ah-utils-js

# npm
npm install ah-utils-js

# yarn
yarn add ah-utils-js
```

---

## 🚀 快速开始

### JavaScript

```javascript
import { math, array, string } from 'ah-utils-js'

// 高精度数学运算
math.add(0.1, 0.2)              // 0.3 ✅ (原生: 0.30000000000000004)
math.divide(1, 3, 2)            // "0.33"
math.sum([0.1, 0.2, 0.3])       // 0.6

// 数组工具
array.unique([1, 2, 2, 3])      // [1, 2, 3]
array.flatten([1, [2, [3]]], 2) // [1, 2, 3]
array.group(users, 'age')       // { '20': [...], '30': [...] }

// 字符串工具
string.camelCase('hello-world') // 'helloWorld'
string.uuid()                   // 'a7b3c9d2-1234-...'
```

### TypeScript

```typescript
import { math, array, base } from 'ah-utils-js'
import type { MathValue, TreeNode } from 'ah-utils-js'

// 完整的类型推导
const result: number = math.add(1, 2)
const formatted: string = math.add(1, 2, 2)

// 类型守卫
function process(value: unknown) {
  if (base.isString(value)) {
    // 这里 value 自动推导为 string 类型
    console.log(value.toUpperCase())
  }
}

// 泛型支持
const tree: TreeNode[] = array.arrayToTree(data)
```

---

## 🗂️ API 总览

### 📊 数学模块（8 个方法）

| 方法 | 描述 | 示例 |
|------|------|------|
| `math.add()` | 高精度加法 | `math.add(0.1, 0.2) // 0.3` |
| `math.subtract()` | 高精度减法 | `math.subtract(0.3, 0.1) // 0.2` |
| `math.multiply()` | 高精度乘法 | `math.multiply(0.1, 0.2) // 0.02` |
| `math.divide()` | 高精度除法 | `math.divide(1, 3, 2) // "0.33"` |
| `math.sum()` | 数组求和 | `math.sum([0.1, 0.2, 0.3]) // 0.6` |
| `math.product()` | 数组连乘 | `math.product([2, 3, 4]) // 24` |
| `math.round()` | 四舍五入 | `math.round(1.2345, 2) // "1.23"` |
| `math.compare()` | 数值比较 | `math.compare(1, 2) // -1` |

### 📋 数组模块（12 个方法）

| 方法 | 描述 | 示例 |
|------|------|------|
| `array.unique()` | 数组去重 | `array.unique([1, 2, 2, 3]) // [1, 2, 3]` |
| `array.flatten()` | 数组扁平化 | `array.flatten([1, [2, [3]]], 2) // [1, 2, 3]` |
| `array.group()` | 数组分组 | `array.group(users, 'age')` |
| `array.intersection()` | 数组交集 | `array.intersection([1, 2], [2, 3]) // [2]` |
| `array.union()` | 数组并集 | `array.union([1, 2], [2, 3]) // [1, 2, 3]` |
| `array.except()` | 数组差集 | `array.except([1, 2, 3], [2]) // [1, 3]` |
| `array.arraySum()` | 数组求和 | `array.arraySum([1, 2, 3]) // 6` |
| `array.mean()` | 平均值 | `array.mean([1, 2, 3, 4, 5]) // 3` |
| `array.sample()` | 随机抽取 | `array.sample([1, 2, 3])` |
| `array.range()` | 生成范围 | `array.range(5) // [0, 1, 2, 3, 4]` |
| `array.arrayToTree()` | 数组转树 | `array.arrayToTree(flatData)` |
| `array.treeToArray()` | 树转数组 | `array.treeToArray(treeData)` |

### 🔤 字符串模块（10 个方法）

| 方法 | 描述 | 示例 |
|------|------|------|
| `string.camelCase()` | 转驼峰命名 | `string.camelCase('hello-world') // 'helloWorld'` |
| `string.kebabCase()` | 转短横线命名 | `string.kebabCase('helloWorld') // 'hello-world'` |
| `string.snakeCase()` | 转下划线命名 | `string.snakeCase('helloWorld') // 'hello_world'` |
| `string.capitalize()` | 首字母大写 | `string.capitalize('hello') // 'Hello'` |
| `string.randomString()` | 随机字符串 | `string.randomString(8) // 'a7b3c9d2'` |
| `string.uuid()` | 生成 UUID | `string.uuid()` |
| `string.randomHexColor()` | 随机颜色 | `string.randomHexColor() // '#a3b5c7'` |
| `string.escape()` | HTML 转义 | `string.escape('<div>') // '&lt;div&gt;'` |
| `string.unescape()` | HTML 反转义 | `string.unescape('&lt;div&gt;') // '<div>'` |
| `string.truncate()` | 截断字符串 | `string.truncate('hello world', 5) // 'hello...'` |

### 🎁 对象模块（8 个方法）

| 方法 | 描述 | 示例 |
|------|------|------|
| `object.deepClone()` | 深度克隆 | `object.deepClone(obj)` |
| `object.merge()` | 深度合并 | `object.merge({ a: 1 }, { b: 2 })` |
| `object.get()` | 获取属性值 | `object.get(obj, 'a.b.c')` |
| `object.set()` | 设置属性值 | `object.set(obj, 'a.b.c', 1)` |
| `object.has()` | 判断属性存在 | `object.has(obj, 'a.b.c')` |
| `object.remove()` | 删除属性 | `object.remove(obj, 'a.b.c')` |
| `object.pick()` | 挑选属性 | `object.pick(obj, ['a', 'b'])` |
| `object.omit()` | 排除属性 | `object.omit(obj, ['a', 'b'])` |

### ✅ 基础类型判断模块（14 个方法）

| 方法 | 描述 | 示例 |
|------|------|------|
| `base.getType()` | 获取精确类型 | `base.getType([]) // 'array'` |
| `base.isType()` | 判断指定类型 | `base.isType([], 'array') // true` |
| `base.isString()` | 判断字符串 | `base.isString('hello') // true` |
| `base.isNumber()` | 判断数字 | `base.isNumber(123) // true` |
| `base.isBoolean()` | 判断布尔值 | `base.isBoolean(true) // true` |
| `base.isArray()` | 判断数组 | `base.isArray([]) // true` |
| `base.isObject()` | 判断对象 | `base.isObject({}) // true` |
| `base.isFunction()` | 判断函数 | `base.isFunction(() => {}) // true` |
| `base.isNull()` | 判断 null | `base.isNull(null) // true` |
| `base.isUndefined()` | 判断 undefined | `base.isUndefined(undefined) // true` |
| `base.isDate()` | 判断日期 | `base.isDate(new Date()) // true` |
| `base.isRegExp()` | 判断正则 | `base.isRegExp(/test/) // true` |
| `base.isEmpty()` | 判断空值 | `base.isEmpty([]) // true` |
| `base.isEquals()` | 深度比较 | `base.isEquals({ a: 1 }, { a: 1 }) // true` |

**总计：52 个工具函数** 🎉

---

## 📚 完整 API 文档

### 1. 数学模块 (Math)

> 🎯 解决 JavaScript 浮点数精度问题，基于 decimal.js

```typescript
import { math } from 'ah-utils-js'
```

#### `math.add(a, b, digit?)`
**高精度加法**

```typescript
// 基础用法
math.add(0.1, 0.2)              // 0.3 ✅ (原生: 0.30000000000000004)
math.add(1, 2)                  // 3

// 指定小数位数
math.add(0.1, 0.2, 2)           // "0.30"
math.add(1.111, 2.222, 3)       // "3.333"

// 大数运算
math.add(999999999999999, 1)    // 1000000000000000
```

---

#### `math.subtract(a, b, digit?)`
**高精度减法**

```typescript
// 基础用法
math.subtract(0.3, 0.1)         // 0.2 ✅ (原生: 0.19999999999999998)
math.subtract(5, 3)             // 2

// 指定小数位数
math.subtract(5, 3, 2)          // "2.00"
math.subtract(10.555, 3.222, 2) // "7.33"
```

---

#### `math.multiply(a, b, digit?)`
**高精度乘法**

```typescript
// 基础用法
math.multiply(0.1, 0.2)         // 0.02 ✅ (原生: 0.020000000000000004)
math.multiply(3, 4)             // 12

// 指定小数位数
math.multiply(1.23, 4.56, 3)    // "5.609"
math.multiply(2.5, 3.5, 1)      // "8.8"
```

---

#### `math.divide(a, b, digit?)`
**高精度除法**

```typescript
// 基础用法
math.divide(10, 3)              // 3.333333333333333333
math.divide(1, 2)               // 0.5

// 指定小数位数（推荐）
math.divide(1, 3, 2)            // "0.33"
math.divide(10, 3, 4)           // "3.3333"
math.divide(22, 7, 2)           // "3.14"  (π 近似值)

// 异常处理
math.divide(1, 0)               // ❌ Error: 除数不能为0
```

---

#### `math.sum(arr, digit?)`
**数组求和（高精度）**

```typescript
// 基础用法
math.sum([0.1, 0.2, 0.3])       // 0.6 ✅ (原生: 0.6000000000000001)
math.sum([1, 2, 3, 4, 5])       // 15

// 指定小数位数
math.sum([1.1, 2.2, 3.3], 2)    // "6.60"
math.sum([0.1, 0.2, 0.3], 1)    // "0.6"

// 空数组
math.sum([])                    // 0
math.sum([], 2)                 // "0.00"
```

---

#### `math.product(arr, digit?)`
**数组连乘（高精度）**

```typescript
// 基础用法
math.product([2, 3, 4])         // 24
math.product([0.1, 0.2, 0.3])   // 0.006

// 指定小数位数
math.product([1.5, 2, 3], 2)    // "9.00"
math.product([2, 3, 4], 0)      // "24"

// 空数组
math.product([])                // 1
math.product([], 2)             // "1.00"
```

---

#### `math.round(num, digit)`
**四舍五入到指定位数**

```typescript
// 基础用法
math.round(1.2345, 2)           // "1.23"
math.round(1.2355, 2)           // "1.24"
math.round(1.5, 0)              // "2"

// 金融计算
const price = 19.9876
math.round(price, 2)            // "19.99"
```

---

#### `math.compare(a, b)`
**比较两个数的大小（高精度）**

返回值：`1` (a > b), `-1` (a < b), `0` (a = b)

```typescript
// 基础用法
math.compare(2, 1)              // 1   (2 > 1)
math.compare(1, 2)              // -1  (1 < 2)
math.compare(1, 1)              // 0   (1 = 1)

// 精度比较
math.compare(0.1 + 0.2, 0.3)    // 0   ✅ 相等
console.log(0.1 + 0.2 === 0.3)  // false ❌ (原生比较)

// 排序应用
const numbers = [0.3, 0.1, 0.2]
numbers.sort((a, b) => math.compare(a, b))
// [0.1, 0.2, 0.3]
```

---

### 2. 数组模块 (Array)

```typescript
import { array } from 'ah-utils-js'
```

#### `array.unique(arr)`
**数组去重**

```typescript
// 基础类型
array.unique([1, 2, 2, 3, 3, 3])          // [1, 2, 3]
array.unique(['a', 'b', 'a', 'c'])        // ['a', 'b', 'c']

// 注意：对象去重按引用
const obj1 = { id: 1 }
const obj2 = { id: 1 }
array.unique([obj1, obj1, obj2])          // [obj1, obj2]
```

---

#### `array.flatten(arr, depth?)`
**数组扁平化**

```typescript
// 一层扁平化（默认）
array.flatten([1, [2, 3], [4, [5]]])      // [1, 2, 3, 4, [5]]

// 多层扁平化
array.flatten([1, [2, [3, [4]]]], 2)      // [1, 2, 3, [4]]
array.flatten([1, [2, [3, [4]]]], 3)      // [1, 2, 3, 4]

// 完全扁平化（使用 Infinity）
array.flatten([1, [2, [3, [4]]]], Infinity) // [1, 2, 3, 4]
```

---

#### `array.group(arr, key)`
**按属性分组**

```typescript
const users = [
  { id: 1, name: 'Alice', age: 25, city: 'Beijing' },
  { id: 2, name: 'Bob', age: 30, city: 'Shanghai' },
  { id: 3, name: 'Charlie', age: 25, city: 'Beijing' }
]

// 按年龄分组
array.group(users, 'age')
// {
//   '25': [{ id: 1, ... }, { id: 3, ... }],
//   '30': [{ id: 2, ... }]
// }

// 按城市分组
array.group(users, 'city')
// {
//   'Beijing': [{ id: 1, ... }, { id: 3, ... }],
//   'Shanghai': [{ id: 2, ... }]
// }
```

---

#### `array.intersection(arr1, arr2)`
**数组交集**

```typescript
// 基础用法
array.intersection([1, 2, 3], [2, 3, 4])  // [2, 3]
array.intersection([1, 2], [3, 4])        // []

// 字符串数组
array.intersection(['a', 'b', 'c'], ['b', 'c', 'd'])
// ['b', 'c']
```

---

#### `array.union(...arrays)`
**数组并集（去重）**

```typescript
// 两个数组
array.union([1, 2], [2, 3])               // [1, 2, 3]

// 多个数组
array.union([1, 2], [2, 3], [3, 4])       // [1, 2, 3, 4]

// 字符串数组
array.union(['a', 'b'], ['b', 'c'], ['c', 'd'])
// ['a', 'b', 'c', 'd']
```

---

#### `array.except(arr1, arr2)`
**数组差集（arr1 中不在 arr2 中的元素）**

```typescript
// 基础用法
array.except([1, 2, 3], [2])              // [1, 3]
array.except([1, 2, 3, 4], [2, 4])        // [1, 3]

// 字符串数组
array.except(['a', 'b', 'c'], ['b'])      // ['a', 'c']
```

---

#### `array.arraySum(arr)`
**数组求和（简单版本）**

> ⚠️ 注意：不处理精度问题，精度敏感场景请使用 `math.sum()`

```typescript
// 基础用法
array.arraySum([1, 2, 3, 4, 5])           // 15
array.arraySum([10, 20, 30])              // 60

// 精度问题示例
array.arraySum([0.1, 0.2])                // 0.30000000000000004 ❌
math.sum([0.1, 0.2])                      // 0.3 ✅ (推荐)
```

---

#### `array.mean(arr)`
**数组平均值**

```typescript
// 基础用法
array.mean([1, 2, 3, 4, 5])               // 3
array.mean([10, 20, 30])                  // 20

// 空数组
array.mean([])                            // 0

// 成绩统计
const scores = [85, 90, 78, 92, 88]
array.mean(scores)                        // 86.6
```

---

#### `array.sample(arr)`
**随机抽取数组元素**

```typescript
// 基础用法
array.sample([1, 2, 3, 4, 5])             // 随机返回一个元素

// 抽奖应用
const prizes = ['一等奖', '二等奖', '三等奖', '谢谢参与']
array.sample(prizes)                      // 随机一个奖品

// 空数组
array.sample([])                          // undefined
```

---

#### `array.range(start, end?, step?)`
**生成数字范围数组**

```typescript
// 从 0 开始
array.range(5)                            // [0, 1, 2, 3, 4]

// 指定起止
array.range(2, 6)                         // [2, 3, 4, 5]

// 指定步长
array.range(0, 10, 2)                     // [0, 2, 4, 6, 8]
array.range(1, 10, 3)                     // [1, 4, 7]

// 负数范围
array.range(-3, 3)                        // [-3, -2, -1, 0, 1, 2]
```

---

#### `array.arrayToTree(arr, options?)`
**数组转树形结构**

```typescript
// 基础用法
const flatData = [
  { id: 1, parentId: null, name: '根节点' },
  { id: 2, parentId: 1, name: '子节点1' },
  { id: 3, parentId: 1, name: '子节点2' },
  { id: 4, parentId: 2, name: '孙节点' }
]

array.arrayToTree(flatData)
// [
//   {
//     id: 1,
//     parentId: null,
//     name: '根节点',
//     children: [
//       {
//         id: 2,
//         parentId: 1,
//         name: '子节点1',
//         children: [
//           { id: 4, parentId: 2, name: '孙节点', children: [] }
//         ]
//       },
//       { id: 3, parentId: 1, name: '子节点2', children: [] }
//     ]
//   }
// ]

// 自定义字段名
array.arrayToTree(flatData, {
  id: 'id',
  parentId: 'pid',
  children: 'subNodes',
  rootParentId: 0  // 根节点的 parentId 值
})
```

---

#### `array.treeToArray(tree, childrenKey?)`
**树形结构转数组**

```typescript
const treeData = [
  {
    id: 1,
    name: '根节点',
    children: [
      { id: 2, name: '子节点1', children: [] },
      { id: 3, name: '子节点2', children: [] }
    ]
  }
]

array.treeToArray(treeData)
// [
//   { id: 1, name: '根节点' },
//   { id: 2, name: '子节点1' },
//   { id: 3, name: '子节点2' }
// ]

// 自定义子节点字段
array.treeToArray(treeData, 'subNodes')
```

---

### 3. 字符串模块 (String)

```typescript
import { string } from 'ah-utils-js'
```

#### `string.camelCase(str)`
**转换为驼峰命名**

```typescript
// 短横线转驼峰
string.camelCase('hello-world')           // 'helloWorld'
string.camelCase('user-name-list')        // 'userNameList'

// 下划线转驼峰
string.camelCase('user_name')             // 'userName'
string.camelCase('get_user_info')         // 'getUserInfo'

// 空格转驼峰
string.camelCase('hello world')           // 'helloWorld'

// API 参数转换
string.camelCase('created_at')            // 'createdAt'
```

---

#### `string.kebabCase(str)`
**转换为短横线命名**

```typescript
// 驼峰转短横线
string.kebabCase('helloWorld')            // 'hello-world'
string.kebabCase('userNameList')          // 'user-name-list'
string.kebabCase('getUserInfo')           // 'get-user-info'

// CSS 类名转换
string.kebabCase('backgroundColor')       // 'background-color'
```

---

#### `string.snakeCase(str)`
**转换为下划线命名**

```typescript
// 驼峰转下划线
string.snakeCase('helloWorld')            // 'hello_world'
string.snakeCase('userNameList')          // 'user_name_list'
string.snakeCase('getUserInfo')           // 'get_user_info'

// 数据库字段转换
string.snakeCase('createdAt')             // 'created_at'
string.snakeCase('userId')                // 'user_id'
```

---

#### `string.capitalize(str)`
**首字母大写**

```typescript
// 基础用法
string.capitalize('hello')                // 'Hello'
string.capitalize('world')                // 'World'

// 句子首字母大写
string.capitalize('hello world')          // 'Hello world'

// 组件名称
string.capitalize('button')               // 'Button'
```

---

#### `string.randomString(length?)`
**生成随机字符串**

```typescript
// 默认 8 位
string.randomString()                     // 'a7b3c9d2'

// 指定长度
string.randomString(6)                    // 'abc123'
string.randomString(16)                   // 'a7b3c9d2e8f1g4h5'

// 验证码生成
const code = string.randomString(6).toUpperCase()
// 'A7B3C9'
```

---

#### `string.uuid()`
**生成 UUID**

```typescript
// 生成标准 UUID v4
string.uuid()
// 'a7b3c9d2-1234-4abc-b123-456789abcdef'

// 唯一标识符
const userId = string.uuid()
const orderId = string.uuid()
const sessionId = string.uuid()
```

---

#### `string.randomHexColor()`
**生成随机十六进制颜色**

```typescript
// 随机颜色
string.randomHexColor()                   // '#a3b5c7'
string.randomHexColor()                   // '#ff8800'

// 随机背景色
const bgColor = string.randomHexColor()
element.style.backgroundColor = bgColor
```

---

#### `string.escape(str)`
**HTML 转义**

```typescript
// 基础用法
string.escape('<div>hello</div>')
// '&lt;div&gt;hello&lt;/div&gt;'

string.escape('Tom & Jerry')
// 'Tom &amp; Jerry'

string.escape('"Hello"')
// '&quot;Hello&quot;'

// XSS 防护
const userInput = '<script>alert("xss")</script>'
string.escape(userInput)
// '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```

---

#### `string.unescape(str)`
**HTML 反转义**

```typescript
// 基础用法
string.unescape('&lt;div&gt;hello&lt;/div&gt;')
// '<div>hello</div>'

string.unescape('Tom &amp; Jerry')
// 'Tom & Jerry'

string.unescape('&quot;Hello&quot;')
// '"Hello"'
```

---

#### `string.truncate(str, length, ellipsis?)`
**截断字符串**

```typescript
// 基础用法
string.truncate('hello world', 5)         // 'hello...'
string.truncate('hello world', 8)         // 'hello wo...'

// 自定义省略符
string.truncate('hello world', 5, '---')  // 'hello---'
string.truncate('hello world', 8, '')     // 'hello wo'

// 不需要截断
string.truncate('hello', 10)              // 'hello'

// 文章摘要
const content = '这是一篇很长的文章内容...'
string.truncate(content, 20)              // '这是一篇很长的文章内容...'
```

---

### 4. 对象模块 (Object)

```typescript
import { object } from 'ah-utils-js'
```

#### `object.deepClone(obj)`
**深度克隆对象**

```typescript
// 基础对象
const obj1 = { a: 1, b: { c: 2 } }
const cloned = object.deepClone(obj1)
cloned.b.c = 3
console.log(obj1.b.c)                     // 2 ✅ 不影响原对象

// 数组
const arr = [1, [2, [3]]]
const clonedArr = object.deepClone(arr)

// 日期对象
const date = new Date()
const clonedDate = object.deepClone(date)

// 正则表达式
const regex = /hello/gi
const clonedRegex = object.deepClone(regex)

// 复杂嵌套
const complex = {
  user: {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'coding'],
    meta: {
      createdAt: new Date(),
      pattern: /test/i
    }
  }
}
const clonedComplex = object.deepClone(complex)
```

---

#### `object.merge(...objects)`
**深度合并对象**

```typescript
// 基础合并
object.merge({ a: 1 }, { b: 2 })
// { a: 1, b: 2 }

// 深度合并
object.merge(
  { a: { x: 1, y: 2 } },
  { a: { y: 3, z: 4 } }
)
// { a: { x: 1, y: 3, z: 4 } }

// 多个对象
object.merge(
  { a: 1 },
  { b: 2 },
  { c: 3 }
)
// { a: 1, b: 2, c: 3 }

// 配置合并
const defaultConfig = {
  api: { timeout: 5000, retry: 3 },
  ui: { theme: 'light' }
}
const userConfig = {
  api: { timeout: 10000 },
  ui: { language: 'zh-CN' }
}
object.merge(defaultConfig, userConfig)
// {
//   api: { timeout: 10000, retry: 3 },
//   ui: { theme: 'light', language: 'zh-CN' }
// }
```

---

#### `object.get(obj, path, defaultValue?)`
**获取对象属性值（支持路径）**

```typescript
const obj = {
  user: {
    name: 'Alice',
    age: 25,
    address: {
      city: 'Beijing'
    }
  }
}

// 字符串路径
object.get(obj, 'user.name')              // 'Alice'
object.get(obj, 'user.address.city')      // 'Beijing'

// 数组路径
object.get(obj, ['user', 'name'])         // 'Alice'

// 默认值
object.get(obj, 'user.phone', '未设置')    // '未设置'
object.get(obj, 'user.email')             // undefined

// 数组索引
const data = { list: [{ id: 1 }, { id: 2 }] }
object.get(data, 'list.0.id')             // 1
```

---

#### `object.set(obj, path, value)`
**设置对象属性值（支持路径）**

```typescript
const obj = { a: { b: { c: 1 } } }

// 修改已有属性
object.set(obj, 'a.b.c', 2)
// { a: { b: { c: 2 } } }

// 创建新属性
object.set(obj, 'a.b.d', 3)
// { a: { b: { c: 1, d: 3 } } }

// 创建嵌套路径
object.set(obj, 'x.y.z', 4)
// { a: { b: { c: 1 } }, x: { y: { z: 4 } } }

// 数组路径
object.set(obj, ['a', 'b', 'e'], 5)
// { a: { b: { c: 1, e: 5 } } }
```

---

#### `object.has(obj, path)`
**判断对象是否有指定属性（支持路径）**

```typescript
const obj = {
  user: {
    name: 'Alice',
    age: 25
  }
}

// 基础用法
object.has(obj, 'user')                   // true
object.has(obj, 'user.name')              // true
object.has(obj, 'user.age')               // true
object.has(obj, 'user.phone')             // false

// 数组路径
object.has(obj, ['user', 'name'])         // true

// 深层路径
object.has(obj, 'user.address.city')      // false
```

---

#### `object.remove(obj, path)`
**删除对象属性（支持路径）**

```typescript
const obj = {
  user: {
    name: 'Alice',
    age: 25,
    phone: '123456'
  }
}

// 删除属性
object.remove(obj, 'user.phone')          // true
// { user: { name: 'Alice', age: 25 } }

// 删除不存在的属性
object.remove(obj, 'user.email')          // false

// 数组路径
object.remove(obj, ['user', 'age'])       // true
// { user: { name: 'Alice' } }
```

---

#### `object.pick(obj, keys)`
**挑选对象的指定属性**

```typescript
const user = {
  id: 1,
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  phone: '123456'
}

// 挑选属性
object.pick(user, ['id', 'name'])
// { id: 1, name: 'Alice' }

object.pick(user, ['name', 'email'])
// { name: 'Alice', email: 'alice@example.com' }

// API 响应过滤
const response = { ...user, password: 'secret' }
object.pick(response, ['id', 'name', 'email'])
// { id: 1, name: 'Alice', email: 'alice@example.com' }
```

---

#### `object.omit(obj, keys)`
**排除对象的指定属性**

```typescript
const user = {
  id: 1,
  name: 'Alice',
  age: 25,
  password: 'secret',
  token: 'xxx'
}

// 排除敏感信息
object.omit(user, ['password', 'token'])
// { id: 1, name: 'Alice', age: 25 }

// 排除单个属性
object.omit(user, ['age'])
// { id: 1, name: 'Alice', password: 'secret', token: 'xxx' }
```

---

### 5. 基础类型判断模块 (Base)

```typescript
import { base } from 'ah-utils-js'
```

#### `base.getType(value)`
**获取值的精确类型**

```typescript
// 基础类型
base.getType(123)                         // 'number'
base.getType('hello')                     // 'string'
base.getType(true)                        // 'boolean'
base.getType(null)                        // 'null'
base.getType(undefined)                   // 'undefined'

// 引用类型
base.getType([])                          // 'array'
base.getType({})                          // 'object'
base.getType(() => {})                    // 'function'
base.getType(new Date())                  // 'date'
base.getType(/regex/)                     // 'regexp'
base.getType(new Map())                   // 'map'
base.getType(new Set())                   // 'set'
```

---

#### `base.isType(value, type)`
**判断是否为指定类型**

```typescript
// 基础用法
base.isType([], 'array')                  // true
base.isType({}, 'object')                 // true
base.isType(new Date(), 'date')           // true

// 不区分大小写
base.isType([], 'Array')                  // true
base.isType([], 'ARRAY')                  // true

// 类型检查
function process(value: unknown) {
  if (base.isType(value, 'string')) {
    console.log(value.toUpperCase())
  }
}
```

---

#### `base.isString(value)`
**判断是否为字符串（带类型守卫）**

```typescript
// 基础用法
base.isString('hello')                    // true
base.isString('')                         // true
base.isString(123)                        // false

// 类型守卫
function process(value: unknown) {
  if (base.isString(value)) {
    // 这里 TypeScript 自动推导 value 为 string 类型
    console.log(value.toUpperCase())      // ✅ 类型安全
  }
}
```

---

#### `base.isNumber(value)`
**判断是否为有效数字**

```typescript
// 基础用法
base.isNumber(123)                        // true
base.isNumber(0)                          // true
base.isNumber(3.14)                       // true
base.isNumber(-10)                        // true

// NaN 判断
base.isNumber(NaN)                        // false ✅
base.isNumber(Infinity)                   // true

// 类型守卫
function calculate(value: unknown) {
  if (base.isNumber(value)) {
    return value * 2                      // ✅ 类型安全
  }
}
```

---

#### `base.isBoolean(value)`
**判断是否为布尔值**

```typescript
// 基础用法
base.isBoolean(true)                      // true
base.isBoolean(false)                     // true
base.isBoolean(0)                         // false
base.isBoolean('true')                    // false
```

---

#### `base.isArray(value)`
**判断是否为数组**

```typescript
// 基础用法
base.isArray([])                          // true
base.isArray([1, 2, 3])                   // true
base.isArray({})                          // false
base.isArray('123')                       // false

// 类型守卫
function process(value: unknown) {
  if (base.isArray(value)) {
    value.forEach(item => console.log(item)) // ✅ 类型安全
  }
}
```

---

#### `base.isObject(value)`
**判断是否为纯对象**

```typescript
// 基础用法
base.isObject({})                         // true
base.isObject({ a: 1 })                   // true

// 非纯对象
base.isObject([])                         // false
base.isObject(null)                       // false
base.isObject(new Date())                 // false
base.isObject(() => {})                   // false
```

---

#### `base.isFunction(value)`
**判断是否为函数**

```typescript
// 基础用法
base.isFunction(() => {})                 // true
base.isFunction(function() {})            // true
base.isFunction(async () => {})           // true
base.isFunction(class {})                 // true

// 非函数
base.isFunction({})                       // false
base.isFunction('function')               // false
```

---

#### `base.isNull(value)`
**判断是否为 null**

```typescript
// 基础用法
base.isNull(null)                         // true
base.isNull(undefined)                    // false
base.isNull(0)                            // false
base.isNull('')                           // false
```

---

#### `base.isUndefined(value)`
**判断是否为 undefined**

```typescript
// 基础用法
base.isUndefined(undefined)               // true
base.isUndefined(null)                    // false
base.isUndefined(0)                       // false

// 变量检查
let value
base.isUndefined(value)                   // true
```

---

#### `base.isDate(value)`
**判断是否为日期对象**

```typescript
// 基础用法
base.isDate(new Date())                   // true
base.isDate('2024-01-01')                 // false
base.isDate(1704067200000)                // false
```

---

#### `base.isRegExp(value)`
**判断是否为正则表达式**

```typescript
// 基础用法
base.isRegExp(/test/)                     // true
base.isRegExp(new RegExp('test'))         // true
base.isRegExp('/test/')                   // false (字符串)
```

---

#### `base.isEmpty(value)`
**判断是否为空值**

> 空值定义：`null`, `undefined`, `''`, `[]`, `{}`

```typescript
// null/undefined
base.isEmpty(null)                        // true
base.isEmpty(undefined)                   // true

// 字符串
base.isEmpty('')                          // true
base.isEmpty('hello')                     // false
base.isEmpty(' ')                         // false (空格不算空)

// 数组
base.isEmpty([])                          // true
base.isEmpty([1])                         // false

// 对象
base.isEmpty({})                          // true
base.isEmpty({ a: 1 })                    // false

// 其他类型
base.isEmpty(0)                           // false
base.isEmpty(false)                       // false
```

---

#### `base.isEquals(a, b)`
**深度相等比较**

```typescript
// 基础类型
base.isEquals(1, 1)                       // true
base.isEquals('hello', 'hello')           // true
base.isEquals(true, true)                 // true

// 数组
base.isEquals([1, 2, 3], [1, 2, 3])       // true
base.isEquals([1, 2], [1, 2, 3])          // false

// 对象
base.isEquals(
  { a: 1, b: { c: 2 } },
  { a: 1, b: { c: 2 } }
)                                         // true

base.isEquals(
  { a: 1, b: 2 },
  { a: 1, b: 3 }
)                                         // false

// 日期
base.isEquals(
  new Date('2024-01-01'),
  new Date('2024-01-01')
)                                         // true

// 正则
base.isEquals(/test/gi, /test/gi)         // true

// 引用比较
const obj = { a: 1 }
base.isEquals(obj, obj)                   // true
```

---

## 💡 使用示例

### 金融计算

```typescript
import { math } from 'ah-utils-js'

const price = 19.99
const quantity = 3
const taxRate = 0.08

const subtotal = math.multiply(price, quantity)     // 59.97
const tax = math.multiply(subtotal, taxRate)        // 4.7976
const total = math.add(subtotal, tax)               // 64.7676
const final = math.round(total, 2)                  // "64.77"

console.log(`总计: ¥${final}`)
```

### 数据处理

```typescript
import { array, base } from 'ah-utils-js'

const users = [
  { id: 1, name: 'Alice', age: 25, city: 'Beijing' },
  { id: 2, name: 'Bob', age: 30, city: 'Shanghai' },
  { id: 3, name: 'Charlie', age: 25, city: 'Beijing' }
]

// 按年龄分组
const byAge = array.group(users, 'age')
// { '25': [...], '30': [...] }

// 过滤和映射
const names = users
  .filter(u => u.age > 25)
  .map(u => u.name)
// ['Bob']

// 统计
const ages = users.map(u => u.age)
const avgAge = array.mean(ages)  // 26.67
```

### 字符串处理

```typescript
import { string } from 'ah-utils-js'

// API 参数格式转换
const apiParam = 'user_name'
const jsVar = string.camelCase(apiParam)  // 'userName'

// 生成唯一 ID
const id = string.uuid()

// HTML 转义
const safe = string.escape('<script>alert("xss")</script>')
```

---

## 📋 环境要求

- Node.js >= 18.0.0
- pnpm >= 9.0.0 (推荐)
- TypeScript >= 5.0.0 (如果使用 TypeScript)

---

## 📄 许可证

[MIT](./LICENSE)

---



