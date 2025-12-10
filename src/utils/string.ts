// 转换为驼峰命名
export const camelCase = (str: string): string => {
  return str.replace(/[-_\s](\w)/g, (_, c) => c.toUpperCase())
}

// 转换为短横线命名
export const kebabCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}

// 转换为下划线命名
export const snakeCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
}

// 首字母大写
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// 生成随机字符串
export const randomString = (length = 8): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// 生成 UUID
export const uuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// 生成随机十六进制颜色
export const randomHexColor = (): string => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`
}

// HTML 转义
export const escape = (str: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return str.replace(/[&<>"']/g, (char) => map[char])
}

// HTML 反转义
export const unescape = (str: string): string => {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  }
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (match) => map[match])
}

// 截断字符串
export const truncate = (str: string, length: number, ellipsis = '...'): string => {
  return str.length > length ? str.slice(0, length) + ellipsis : str
}

export default {
  camelCase,
  kebabCase,
  snakeCase,
  capitalize,
  randomString,
  uuid,
  randomHexColor,
  escape,
  unescape,
  truncate,
}
