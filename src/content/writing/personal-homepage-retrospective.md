---
title: "个人主页：从展示页到长期整理空间"
description: "一次关于个人主页定位、内容结构和技术取舍的整理。"
date: 2026-05-18
tags: ["Personal Site", "Writing", "Projects"]
status: published
category: "项目复盘"
topics:
  - personal-systems
  - writing
---

## 一开始只是想有一个入口

最开始，我只是想给自己做一个更清晰的线上入口。

当时的想法很简单：别人点进来，至少能知道我最近在做什么，看过哪些项目，写过哪些东西。页面不用复杂，能把入口放清楚就行。

真正开始做之后，问题才慢慢冒出来。项目在 GitHub 里，笔记在本地文件里，Demo 的复盘散在聊天记录和临时文档里。有些东西当时写完就放下了，过一阵再找，已经想不起来放在哪里。

所以这个主页后来不只是“放一个链接集合”。它更像是我给自己留的工作台：先把做过的东西摆出来，再慢慢补上过程和判断。

## 第一次做出来以后，问题反而更清楚

做个人主页时，很容易把它做成一个"展示自己"的页面：放经历、放标签、放项目链接，然后尽量让页面看起来完整、漂亮、专业。

我也踩过这个坑。有一次让 Gemini 3.5 Flash 帮我改 About，它把页面语气改得很重，像一份包装过的求职材料，还顺手动了导航和 UI。那次改完以后，页面确实更“完整”了，但不像我自己的主页。

后来我回滚到干净基线，换 Claude Code 做最小内容补齐。那次之后，我对这个主页的判断变得清楚了一些：它不需要把我包装得更完整，先把真实做过的事放对位置更重要。

这也是后来几次改版的方向。页面不急着变成一个很成熟的作品集，而是先让项目、文章和近期变化各自有地方放。

<figure>
  <button type="button" class="article-image-preview" data-preview-src="/images/writing/personal-homepage/homepage-overview.webp" data-preview-alt="个人主页首页整体视图" aria-label="预览首页整体视图大图">
    <img src="/images/writing/personal-homepage/homepage-overview.webp" alt="个人主页首页整体视图" loading="lazy" />
  </button>
  <figcaption>图 1：首页整体视图，用于说明当前个人主页的主要结构。</figcaption>
</figure>

## 这次改版实际动了哪些地方

这次改版先补的是首页入口。About 继续保留，但不再承担所有解释；Works / Projects 里补进了三个 AI Demo；Recent 里放近期节点，让页面能看出最近确实在推进东西，而不是只停留在静态介绍。

Topics 也改了一轮。最早它只是几个静态入口页，点进去以后信息不多。后来我把它改成 Related Projects / Related Notes 的索引机制：比如 AI Tools 下面能看到相关 Demo 和方法笔记，Writing 下面能看到项目复盘和工作流记录。这个改动不大，但让主题页开始有用。

Writing 这一块也从占位慢慢变成了真实内容。现在里面放的不只是“我想写什么”，而是几个已经做完的项目复盘：三个 AI Demo、Agent 工作流、主页这次改版。它们还不算完整，但至少开始形成连续的线索。

表达上我也收了一遍。之前有些句子太像简介，现在更倾向于直接写过程：哪次改坏了，怎么回滚，后来保留了什么。

## 现在几个栏目怎么分工

目前这个主页主要靠几个栏目支撑。

**Notes / Writing** 放项目复盘和工作流笔记。我希望这些文章以后重新读时还能看出当时的取舍，而不是只剩一个结论。

**Topics** 还是几个关注方向：AI Tools、Digital Products、Personal Systems、Writing 和 Learning。现在它更像索引，而不是标签墙。一个主题下面如果没有相关项目或文章，就说明我还没真正补内容。

**Builds / Works** 放项目。这里不会只放最终结果，也会尽量写清楚为什么开始、做到哪一步、哪里还不稳。三个 AI Demo 被补进去以后，这块才不再像空架子。

**Recent** 留给最近发生的变化。它不需要覆盖所有事情，只保留那些会影响后面判断的节点。

<figure>
  <button type="button" class="article-image-preview" data-preview-src="/images/writing/personal-homepage/content-structure.webp" data-preview-alt="首页信息架构示意图" aria-label="预览首页信息架构示意大图">
    <img src="/images/writing/personal-homepage/content-structure.webp" alt="首页信息架构示意图" loading="lazy" />
  </button>
  <figcaption>图 2：首页内容结构示意，Notes 为核心内容入口，Topics 用于组织主题。</figcaption>
</figure>

这个分工还很粗，但目前够用。后面内容变多，再看哪些地方需要拆得更细。

## 技术上的克制

这个主页使用 Astro、TypeScript、Tailwind CSS，以及 Markdown / MDX 内容结构。

选择这套技术栈的原因很直接：页面内容多，交互少，用 Astro 和 Markdown 足够。文章和项目都能放在 `src/content` 里，改起来也比较直观。

这次没有加数据库、登录、后台系统、复杂表单或 AI API。不是做不了，而是现在用不上。主页目前最需要的是内容能补进去，页面能稳定生成，出问题能快速回滚。

现在每次重要修改，我会先本地 `npm run build`，确认通过后再 commit。这个习惯是前面几次 Agent 改坏页面之后留下来的。它不复杂，但能让我知道哪个状态是干净的。

<figure>
  <button type="button" class="article-image-preview" data-preview-src="/images/writing/personal-homepage/mobile-reading-view.webp" data-preview-alt="移动端阅读场景示意" aria-label="预览移动端阅读场景示意大图">
    <img src="/images/writing/personal-homepage/mobile-reading-view.webp" alt="移动端阅读场景示意" loading="lazy" />
  </button>
  <figcaption>图 3：移动端阅读场景示意，用于观察内容区块和正文节奏。</figcaption>
</figure>

## 后面会继续怎么补

接下来还是慢慢补，不追求一次做完整。

短期内我会优先补项目过程：AI Demo 为什么做、验证了什么、哪里失败过、后来怎么修。工作流类文章也会继续写，但会尽量从具体场景出发，而不是先搭一个很完整的框架。

这次改版之后，我对这个主页的期待也更实际了一点：它先帮我保存项目过程，再慢慢长出更清楚的目录。至于最后会变成作品集、笔记库，还是两者之间的东西，现在还不用定死。
