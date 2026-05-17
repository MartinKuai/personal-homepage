# Codex Review Prompt

你现在是本项目的外部验收审查员。

请只做审查，不要直接修改代码。

请检查：

1. Claude Code 是否严格完成 TASKS.md
2. 是否满足 ACCEPTANCE_CHECKLIST.md
3. 是否遵守 docs/handoffs/codex-to-claude.md
4. 是否出现超范围功能
5. 是否出现页面语言混乱
6. 是否出现空页面、按钮无效、流程断裂
7. 是否引入不必要依赖
8. 是否引入数据库、登录、支付、真实 API 等超范围能力
9. 是否存在明显安全问题
10. 是否存在用户流程逻辑漏洞

请输出：

## Verdict

通过 / 部分通过 / 不通过

## Critical Issues

## Required Fixes

## Optional Improvements

## Evidence From Diff

## Next Handoff for Claude Code
