---
name: handoff-executor
description: Execute the current Codex-to-Claude handoff strictly. Use when the user asks Claude Code to implement tasks from docs/handoffs/codex-to-claude.md.
---

# Handoff Executor

## Source of Truth

The current source of truth is:

1. docs/handoffs/codex-to-claude.md
2. TASKS.md
3. ACCEPTANCE_CHECKLIST.md

Do not infer extra requirements from previous conversations unless they are written in these files.

## Execution Steps

1. Read the handoff file.
2. Identify the current phase and current task.
3. List the files likely to be modified.
4. Implement only the requested changes.
5. Run available validation commands.
6. Update implementation report.
7. Stop and summarize.

## Strict Limits

Do not:
- Add new pages unless requested
- Add new dependencies unless necessary
- Change routing unless requested
- Change styling globally unless requested
- Change product copy outside the specified scope
- Rewrite the whole project

## Final Response Format

Return:

1. Files changed
2. Tasks completed
3. Validation run
4. Remaining issues
5. Suggested next handoff
