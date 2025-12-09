# ahUtils

> 🚀 现代化的 JavaScript/TypeScript 工具库，提供高精度数学运算支持

[![npm version](https://img.shields.io/npm/v/ah-utils-js.svg)](https://www.npmjs.com/package/ah-utils-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ 特性

- 🎯 **TypeScript 优先** - 完整的类型定义，提供完美的 IDE 支持
- 🧮 **高精度数学运算** - 基于 decimal.js，彻底解决 JavaScript 浮点数精度问题
- 📦 **Tree-shaking 支持** - 按需导入，只打包使用的代码
- ⚡ **现代化构建** - 使用 Vite 构建，极速开发体验
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

## 📚 API 文档

### 数学模块 (Math)

解决 JavaScript 浮点数精度问题：

```typescript
import { math } from 'ah-utils-js'

// 基础运算
math.add(0.1, 0.2)              // 0.3
math.subtract(1, 0.9)           // 0.1
math.multiply(0.1, 0.2)         // 0.02
math.divide(1, 3, 2)            // "0.33"

// 数组运算
math.sum([0.1, 0.2, 0.3])       // 0.6
math.product([2, 3, 4])         // 24

// 工具函数
math.round(1.2345, 2)           // "1.23"
math.compare(0.1 + 0.2, 0.3)    // 0 (相等)
```

### 数组模块 (Array)

```typescript
import { array } from 'ah-utils-js'

// 基础操作
array.unique([1, 2, 2, 3])              // [1, 2, 3]
array.flatten([1, [2, [3]]], 2)         // [1, 2, 3]
array.range(5)                          // [0, 1, 2, 3, 4]
array.sample([1, 2, 3])                 // 随机元素

// 集合操作
array.intersection([1, 2], [2, 3])      // [2]
array.union([1, 2], [2, 3])             // [1, 2, 3]
array.except([1, 2, 3], [2])            // [1, 3]

// 数组转树形结构
array.arrayToTree([
  { id: 1, parentId: null, name: '根节点' },
  { id: 2, parentId: 1, name: '子节点' }
])

// 统计
array.arraySum([1, 2, 3, 4, 5])         // 15
array.mean([1, 2, 3, 4, 5])             // 3
```

### 字符串模块 (String)

```typescript
import { string } from 'ah-utils-js'

// 命名转换
string.camelCase('hello-world')         // 'helloWorld'
string.kebabCase('helloWorld')          // 'hello-world'
string.snakeCase('helloWorld')          // 'hello_world'
string.capitalize('hello')              // 'Hello'

// 生成器
string.uuid()                           // 'a7b3c9d2-...'
string.randomString(8)                  // 'a7b3c9d2'
string.randomHexColor()                 // '#a3b5c7'

// 工具函数
string.escape('<div>hello</div>')       // '&lt;div&gt;hello&lt;/div&gt;'
string.truncate('hello world', 5)       // 'hello...'
```

### 对象模块 (Object)

```typescript
import { object } from 'ah-utils-js'

const obj = { a: { b: { c: 1 } } }

// 深度操作
object.deepClone(obj)                   // 深拷贝
object.merge({ a: 1 }, { b: 2 })        // { a: 1, b: 2 }

// 路径操作
object.get(obj, 'a.b.c')                // 1
object.set(obj, 'a.b.d', 2)             // { a: { b: { c: 1, d: 2 } } }
object.has(obj, 'a.b.c')                // true
object.remove(obj, 'a.b.c')             // true

// 筛选
object.pick(obj, ['a', 'c'])            // { a: 1, c: 3 }
object.omit(obj, ['b'])                 // { a: 1, c: 3 }
```

### 基础类型判断模块 (Base)

```typescript
import { base } from 'ah-utils-js'

// 类型判断（带类型守卫）
base.isString('hello')                  // true
base.isNumber(123)                      // true
base.isArray([])                        // true
base.isObject({})                       // true
base.isEmpty([])                        // true

// 深度比较
base.isEquals({ a: 1 }, { a: 1 })       // true

// 类型检测
base.getType([])                        // 'array'
base.isType([], 'array')                // true
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

## 🎯 核心优势

### 1. 解决精度问题

```typescript
// ❌ JavaScript 原生计算
0.1 + 0.2                    // 0.30000000000000004
1 - 0.9                      // 0.09999999999999998
0.1 * 0.2                    // 0.020000000000000004

// ✅ 使用 ahUtils
math.add(0.1, 0.2)           // 0.3
math.subtract(1, 0.9)        // 0.1
math.multiply(0.1, 0.2)      // 0.02
```

### 2. 完整的 TypeScript 支持

```typescript
// 自动类型推导
const result = math.add(1, 2)          // number
const formatted = math.add(1, 2, 2)    // string

// 泛型支持
function calculate<T extends number | undefined>(
  a: number,
  b: number,
  digit?: T
): MathResult<T> {
  return math.add(a, b, digit)
}
```

### 3. Tree-shaking 优化

```typescript
// 只打包使用的函数
import { add, unique } from 'ah-utils-js'
// 打包体积: ~2KB

// 使用所有功能
import ahUtils from 'ah-utils-js'
// 打包体积: ~15KB
```

---

## 🔧 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 运行测试
pnpm test

# 测试 UI 界面
pnpm test:ui

# 测试覆盖率
pnpm test:coverage

# 构建
pnpm build

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

---

## 📋 环境要求

- Node.js >= 18.0.0
- pnpm >= 9.0.0 (推荐)
- TypeScript >= 5.0.0 (如果使用 TypeScript)

---

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](./CONTRIBUTING.md)。

---

## 📄 许可证

[MIT](./LICENSE)

---



