# Codex Planning Prompt

你现在是本项目的强模型规划负责人。

请只读项目，不要直接修改代码。

请完成：

1. 理解当前项目目标
2. 明确目标用户
3. 明确 MVP 边界
4. 判断是否存在过度工程化风险
5. 拆解适合 Claude Code 执行的小任务
6. 为每个任务定义验收标准
7. 输出给 Claude Code 的 handoff

请输出到以下结构：

## Project State

## MVP Boundary

## Non-Goals

## Task Breakdown for Claude Code

## Acceptance Criteria

## Risk Notes

## Handoff Content for docs/handoffs/codex-to-claude.md

限制：

- 不要要求 Claude Code 自行决定产品方向
- 不要让 Claude Code 一次性完成整个项目
- 不要提前引入数据库、登录、支付、真实 API
- 不要设计复杂多 agent 系统
- 每个任务必须可验证
