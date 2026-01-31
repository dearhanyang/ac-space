# 个人技术博客项目规则

## 项目简介

本项目是一个使用 Docusaurus 构建的个人技术博客网站，用于记录和分享个人在技术领域的学习和经验。项目部署在 GitHub Pages 上，通过静态网站生成方式提供高效的访问体验。

### 技术栈

- **框架**：Docusaurus 3.9.2
- **语言**：TypeScript、JavaScript、Markdown
- **样式**：CSS Modules
- **部署**：GitHub Pages

## 目录结构

```
├── .github/             # GitHub 相关配置
│   └── workflows/       # GitHub Actions 工作流
├── blog/                # 博客文章目录
│   ├── YYYY-MM-DD-title/ # 博客文章（带资源的格式）
│   ├── YYYY-MM-DD-title.md # 博客文章（纯文本格式）
│   ├── authors.yml      # 作者配置
│   └── tags.yml         # 标签配置
├── docs/                # 文档目录
│   ├── tutorial-basics/ # 基础教程
│   └── tutorial-extras/ # 高级教程
├── src/                 # 源代码目录
│   ├── components/      # React 组件
│   ├── css/             # 全局样式
│   └── pages/           # 自定义页面
├── static/              # 静态资源目录
│   ├── img/             # 图片资源
│   └── common/          # 通用静态资源
├── docusaurus.config.ts # Docusaurus 配置
├── package.json         # 项目依赖配置
├── sidebars.ts          # 文档侧边栏配置
└── tsconfig.json        # TypeScript 配置
```

## 开发规范

### 分支管理

- **main**：主分支，用于部署生产环境
- **gh-pages**：GitHub Pages 部署分支
- **feature-\***：功能开发分支
- **fix-\***：bug 修复分支

### 代码规范

1. **TypeScript**：遵循项目的 tsconfig.json 配置
2. **JavaScript**：使用 ES6+ 语法
3. **CSS**：优先使用 CSS Modules，避免全局样式冲突
4. **Markdown**：遵循 GitHub Flavored Markdown 规范

### 提交规范

提交信息应遵循以下格式：

```
<类型>(<范围>): <描述>

<详细说明>

<footer>
```

#### 类型

- **feat**：新功能
- **fix**：bug 修复
- **docs**：文档更新
- **style**：代码风格调整
- **refactor**：代码重构
- **test**：测试相关
- **chore**：构建或依赖更新

#### 示例

```
feat(blog): 添加博客文章分类功能

- 实现文章分类展示
- 添加分类筛选功能
- 更新相关文档

Closes #123
```

## 博客文章规范

### 文章格式

#### 基本格式

```markdown
---
title: '文章标题'
date: '2023-12-01'
author: '作者名称'
tags:
  - 标签1
  - 标签2
---

文章内容...
```

#### 带资源的文章

对于需要包含图片等资源的文章，使用目录结构：

```
blog/
└── 2023-12-01-article-title/
    ├── index.md        # 文章内容
    └── image.png       # 文章图片
```

### 写作规范

1. **标题**：简洁明了，准确反映文章内容
2. **内容**：结构清晰，逻辑连贯，语言流畅
3. **格式**：合理使用 Markdown 格式，增强可读性
4. **引用**：对于引用的内容，注明来源
5. **代码**：使用代码块，添加适当的语言标识
6. **图片**：使用有意义的文件名，添加适当的 alt 文本

### 文章审核

- 发布前请仔细检查文章内容，确保准确性和完整性
- 检查链接是否可用
- 检查代码示例是否可运行
- 检查图片是否正确显示

## 部署流程

### 本地构建

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 本地预览
npm run serve
```

### GitHub Pages 部署

#### 方法 1：使用 GitHub Actions（推荐）

项目已配置 GitHub Actions 自动部署工作流：

1. 推送代码到 `main` 分支
2. GitHub Actions 会自动构建并部署到 `gh-pages` 分支
3. 部署完成后，网站会在 https://dearhanyang.github.io/blog/ 可用

#### 方法 2：手动部署

```bash
# 创建并切换到 gh-pages 分支
git checkout --orphan gh-pages
git rm -rf .

# 复制构建文件
cp -r build/* .
cp -r build/.nojekyll .

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 切换回主分支
git checkout main
```

### 部署配置

在 `docusaurus.config.ts` 中配置：

```typescript
url: 'https://dearhanyang.github.io/',
baseUrl: '/ac-space/',
organizationName: 'dearhanyang',
projectName: 'ac-space',
```

## 维护规范

### 定期更新

- **依赖**：定期更新项目依赖，确保安全性和性能
- **框架**：关注 Docusaurus 版本更新，及时升级
- **内容**：定期发布新的博客文章，保持网站活跃

### 问题处理

- **Bug**：及时修复网站中的 bug
- **性能**：关注网站加载速度，优化静态资源
- **SEO**：优化网站结构，提高搜索引擎排名

### 备份策略

- 使用 GitHub 版本控制作为主要备份
- 定期导出博客内容作为本地备份

## 安全规范

### 代码安全

- 避免在代码中硬编码敏感信息
- 定期更新依赖，修复安全漏洞

### 内容安全

- 确保发布的内容符合法律法规
- 尊重他人知识产权，引用内容注明来源

## 其他注意事项

### 开发环境

- 使用 Node.js 20.0 或更高版本
- 建议使用 VS Code 编辑器，配合相关插件提高开发效率

### 资源管理

- **图片**：优先使用压缩后的图片，减小网站体积
- **代码**：合理组织代码结构，提高可维护性
- **文档**：保持文档与代码同步更新

### 社区互动

- 欢迎通过 GitHub Issues 提出问题和建议
- 鼓励分享有价值的技术内容，促进技术交流

## 总结

本项目规则旨在规范个人技术博客的开发和维护流程，确保网站质量和内容价值。请严格遵守各项规范，共同打造一个高质量的技术分享平台。

---

**最后更新时间**：2026-01-29
**维护者**：dearhanyang
