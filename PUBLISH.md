# 📦 发布指南

> 本指南介绍如何将 ahUtils 发布到 npm

---

## 📌 语义化版本（Semantic Versioning）

版本号格式：`MAJOR.MINOR.PATCH`（主版本号.次版本号.修订号）

| 类型 | 版本变化 | 使用场景 | 示例 |
|------|---------|---------|------|
| **Patch** | `1.0.0` → `1.0.1` | 修复 bug、小改进（向后兼容） | 修复计算精度问题、优化性能 |
| **Minor** | `1.0.0` → `1.1.0` | 新增功能（向后兼容） | 新增工具函数、扩展现有功能 |
| **Major** | `1.0.0` → `2.0.0` | 破坏性变更（不向后兼容） | 修改 API 接口、删除废弃功能 |

---

## 🚀 快速发布

### 方式一：一键发布（推荐）

```bash
# Patch 版本（bug 修复）
pnpm run release:patch     # 1.0.0 → 1.0.1

# Minor 版本（新增功能）
pnpm run release:minor     # 1.0.0 → 1.1.0

# Major 版本（破坏性变更）
pnpm run release:major     # 1.0.0 → 2.0.0
```

### 方式二：分步发布

```bash
# 1. 手动升级版本号
pnpm run version:patch     # 或 version:minor / version:major

# 2. 发布到 npm
pnpm run release
```

---

## 📋 发布前检查清单

执行 `pnpm publish` 时，`prepublishOnly` 钩子会自动执行以下检查：

### ✅ 1. 类型检查
```bash
pnpm run type-check
```
- 确保 TypeScript 类型定义正确
- 无类型错误

### ✅ 2. 代码规范检查
```bash
pnpm run lint:check
```
- 检查代码是否符合 ESLint 规则
- 不会自动修复（发布前应手动修复）

### ✅ 3. 代码格式检查
```bash
pnpm run format:check
```
- 检查代码是否符合 Prettier 规则
- 不会自动格式化（发布前应手动格式化）

### ✅ 4. 运行测试
```bash
pnpm run test
```
- 运行所有单元测试
- 确保功能正常

### ✅ 5. 构建项目
```bash
pnpm run build
```
- 生成 ESM、CommonJS、UMD 格式的发布文件
- 生成 TypeScript 类型声明文件

> ⚠️ **注意**：如果任何检查失败，发布会被自动中断！

---

## 🛠️ 发布前准备

### 1. 确保代码质量

```bash
# 自动修复代码问题
pnpm run lint          # 修复 ESLint 问题
pnpm run format        # 格式化代码

# 手动检查
pnpm run type-check    # 检查类型
pnpm run test          # 运行测试
```

### 2. 更新文档

- [ ] 更新 `README.md`（如有 API 变更）
- [ ] 更新版本号相关说明
- [ ] 检查示例代码是否正确

### 3. 提交代码

```bash
git add .
git commit -m "feat: 新功能描述"  # 或 fix: / chore: 等
git push
```

---

## 📝 完整发布流程

### Patch 版本发布（修复 bug）

```bash
# 1. 修复代码
# 2. 测试修复
pnpm run test

# 3. 提交代码
git add .
git commit -m "fix: 修复 XXX 问题"
git push

# 4. 发布（自动升级版本 + 发布）
pnpm run release:patch
```

### Minor 版本发布（新增功能）

```bash
# 1. 开发新功能
# 2. 编写测试
pnpm run test

# 3. 更新文档
# 编辑 README.md，添加新功能文档

# 4. 提交代码
git add .
git commit -m "feat: 新增 XXX 功能"
git push

# 5. 发布
pnpm run release:minor
```

### Major 版本发布（破坏性变更）

```bash
# 1. 修改 API（破坏性变更）
# 2. 更新所有测试
pnpm run test

# 3. 更新文档（重点标注破坏性变更）
# 编辑 README.md

# 4. 提交代码
git add .
git commit -m "feat!: 重构 XXX API（BREAKING CHANGE）"
git push

# 5. 发布
pnpm run release:major
```

---

## 🔍 发布后验证

### 1. 检查 npm 包

访问：https://www.npmjs.com/package/ah-utils-js

- [ ] 版本号是否正确
- [ ] README 是否显示正常
- [ ] 文件列表是否完整

### 2. 本地测试新版本

```bash
# 创建测试项目
mkdir test-ah-utils && cd test-ah-utils
npm init -y

# 安装最新版本
npm install ah-utils-js@latest

# 测试导入
node -e "import('ah-utils-js').then(m => console.log(Object.keys(m)))"
```

### 3. 测试功能

```javascript
// test.js
import { math, array, string } from 'ah-utils-js'

console.log('math.add:', math.add(0.1, 0.2))
console.log('array.unique:', array.unique([1, 2, 2, 3]))
console.log('string.camelCase:', string.camelCase('hello-world'))
```

---

## 🚨 常见问题

### 1. 发布失败：权限问题

```bash
# 登录 npm
npm login

# 检查登录状态
npm whoami
```

### 2. 发布失败：检查未通过

```bash
# 查看具体错误信息
# 根据错误提示修复代码

# 修复后重新发布
pnpm run release:patch
```

### 3. 版本冲突

```bash
# 查看当前版本
npm view ah-utils-js version

# 查看本地版本
cat package.json | grep version

# 如果本地版本已存在于 npm，手动升级版本号
# 编辑 package.json，修改 version 字段
```

### 4. 撤销已发布版本（24 小时内）

```bash
# ⚠️ 警告：撤销会影响已使用该版本的用户
npm unpublish ah-utils-js@1.0.1

# 推荐：使用 deprecate 标记为废弃
npm deprecate ah-utils-js@1.0.1 "此版本存在问题，请升级到 1.0.2"
```

---

## 📊 版本管理最佳实践

### 1. Git 标签

版本发布后会自动创建 Git 标签：

```bash
# 查看所有标签
git tag

# 推送标签到远程
git push --tags

# 删除错误的标签
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1
```

### 2. 发布日志

建议创建 `CHANGELOG.md` 记录版本变更：

```markdown
# Changelog

## [1.1.0] - 2024-01-15
### Added
- 新增 `string.truncate()` 方法
- 新增 `array.sample()` 方法

### Fixed
- 修复 `math.divide()` 除零错误

## [1.0.1] - 2024-01-10
### Fixed
- 修复 TypeScript 类型定义错误
```

### 3. 版本规划

- **Patch 版本**：随时发布（bug 修复）
- **Minor 版本**：每月发布（新功能积累）
- **Major 版本**：谨慎发布（重大变更）

---

## 🔗 相关链接

- [npm 文档](https://docs.npmjs.com/)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [conventional commits](https://www.conventionalcommits.org/zh-hans/)
- [ahUtils GitHub](https://github.com/ahe-qyss/ah-utils-js)
- [ahUtils npm](https://www.npmjs.com/package/ah-utils-js)

---

## 💡 提示

发布前建议：
1. ✅ 在本地充分测试
2. ✅ 检查所有文档是否更新
3. ✅ 确保所有测试通过
4. ✅ Review 代码变更
5. ✅ 选择正确的版本类型

祝发布顺利！🎉

