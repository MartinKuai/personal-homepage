# CLAUDE.md

## Project Operating Rules

This project uses a Codex + Claude Code workflow.

Codex Desktop is responsible for planning, review, and acceptance.

Claude Code is responsible for scoped execution only.

## Required Behavior

Before implementation, read:
1. AI_WORKFLOW.md
2. TASKS.md
3. ACCEPTANCE_CHECKLIST.md
4. docs/handoffs/codex-to-claude.md

Use these skills when relevant:
- executor-guard
- handoff-executor
- acceptance-self-check
- implementation-reporter
- webapp-testing
- web-artifacts-builder
- skill-creator
- frontend-design
- claude-md-improver

## Language Rule

Unless explicitly requested otherwise:
- UI copy should be Chinese.
- Project documentation may use Chinese or bilingual structure.
- Do not randomly mix English UI labels into Chinese pages.

## Scope Rule

Do not add features outside the current task.

Do not introduce:
- Login
- Payment
- Database
- Real user data collection
- Real API integration
- Complex state management
- Multi-agent orchestration

unless explicitly requested in the current handoff.

## Project Mode: Light Mode

This project uses the AI engineering workflow template in Light Mode.

Use skills only when they directly support:
- requirement clarification
- project structure setup
- frontend page implementation
- content structure design
- documentation updates
- acceptance checks
- code review

Do not use or simulate heavy multi-agent workflow unless explicitly requested.

Avoid:
- backend architecture
- database design
- API design
- login system
- complex PRD process
- production-grade SaaS workflow
- unnecessary deployment automation

Current goal:
Build the V0 framework of a long-term personal homepage first. Portfolio, methodology, and writing content will be added later.
