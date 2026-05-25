---
title: "企业模糊需求澄清 Agent"
summary: "一个面向企业协作早期阶段的 AI 工具实验，把模糊需求转化为结构化 Brief。"
status: "进行中"
started: "2026-05"
updated: "2026-05"
role: "个人项目"
stack:
  - AI Workflow
  - LLM API
  - Cloudflare Pages
tags:
  - AI 工具
  - 企业协作
  - 需求分析
featured: true
draft: false
placeholder: false
order: 1
topics:
  - ai-tools
  - digital-products
---

## 项目背景

在企业协作的早期阶段，需求往往来自客户、领导或跨部门同事的一句话，通常模糊、碎片化、缺乏上下文。

这个工具实验尝试把这类模糊输入转化为可执行的结构化输出。

## 核心功能

- **结构化 Brief 生成** - 把一句话需求展开为包含背景、目标、约束的 Brief
- **信息缺口识别** - 识别当前信息中缺失的关键要素
- **澄清问题生成** - 自动生成需要向需求方确认的问题清单
- **沟通话术输出** - 提供向不同角色澄清需求的表达建议
- **Fallback 明确提示** - 当信息不足时明确提示，不伪装为模型输出

## 技术实现

- 真实大模型 API 接入
- 结构化 Prompt 设计
- Cloudflare Pages 部署

## 当前状态

这是一个工具实验 / Demo，用于探索 AI 在需求澄清场景中的应用边界。

## 在线预览

[查看 Demo](https://preview-mimo-cloudflare.enterprise-requirement-agent.pages.dev/)
