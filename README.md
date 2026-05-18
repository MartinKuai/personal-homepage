# Personal Homepage

Martin Kuai 的长期个人主页。

用于记录项目、笔记、方法和一些阶段性的思考。

## Current Stage

- V0: 首页框架搭建完成
- Phase 1: 内容资产系统搭建完成

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Markdown / MDX

## Project Structure

```
src/
  components/        # 页面组件
  content/
    projects/        # 项目 Markdown
    writing/         # 写作 Markdown
  data/              # 数据文件
  layouts/           # 布局组件
  pages/             # 页面
  styles/            # 样式

docs/
  content/           # 内容资产文档
  templates/         # 内容模板
  reviews/           # 验收报告
```

## Content Assets

Phase 1 已建立内容资产系统：

- `docs/content/project-inventory.md` — 作品集候选项目
- `docs/content/writing-ideas.md` — Writing 主题灵感
- `docs/content/methodology-map.md` — 方法论整理
- `docs/content/profile-assets.md` — 个人主页素材
- `docs/content/tone-and-style-guide.md` — 表达风格指南

## How to Add Content

### 添加第一个作品

1. 在 `src/content/projects/` 下新建 Markdown 文件
2. 在 `docs/content/project-inventory.md` 中填写项目信息
3. 更新 `src/data/profile.ts` 中的 works 数组

### 添加第一篇 Writing

1. 在 `src/content/writing/` 下新建 Markdown 文件
2. 在 `docs/content/writing-ideas.md` 中记录主题
3. 参考 `docs/templates/writing-note-template.md` 格式

## Expression Style

- 中性、自然、克制
- 不自夸、不浮夸
- 不过度包装
- 旧静态 demo 不作为首页核心内容

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
