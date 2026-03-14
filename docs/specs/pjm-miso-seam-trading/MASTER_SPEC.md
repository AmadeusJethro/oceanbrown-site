# PJM-MISO Seam Trading - Master Spec

Last updated: 2026-03-14
Status: implemented, audited, and ready for use
Canonical thesis workspace: `C:/Users/obrown/.pi/writing/theses/pjm-miso-seam-trading/`
Public target file: `portfolio/academic-project-pages/pjm-miso-seam-trading.html`

## Title

What the PJM-MISO Seam Teaches: Validation Failures, Regime Lessons, and Market-Structure Findings

## Slug

`pjm-miso-seam-trading`

## Thesis

When an ML-driven spread-trading strategy is re-evaluated under stricter temporal integrity,
overfitting diagnostics, and public-safety constraints, the profitable-looking edge story
collapses into a methodology and market-structure lesson, revealing that the gap between
bias-free and statistically robust is wider than most backtesting practices acknowledge.

## Validation Verdict (from T1 source)

- Hourly Sharpe: 0.015 (threshold 0.70)
- DSR: 0.125 (threshold 0.90)
- PBO: 0.600 (ceiling 0.05; 12x over)
- CPCV fold dispersion: ~50x mean fold result

## Locked Constraints

- No absolute P&L figures
- No exact trade counts, MW sizing, thresholds, or rules
- No vendor names, node IDs, script paths, API keys
- No employer-identifying details
- VALIDATION_REPORT.md is the sole authority for quantitative verdicts
- STATUS.md used for negative findings only (contains exposed API key)
- COMPLETE_TRADING_STRATEGY.md is T5 blocked for evidence

## Charts (3 required, all implemented)

1. Confidence-collapse timeline (Introduction)
2. Validation scorecard: threshold gaps (Validation section)
3. Stress-window fragility, normalized (Winter/regime section)

## Evidence Verdict

- Writing workspace generated and audited
- External librarian audit: CONDITIONAL PASS (blocker B1 resolved)
- After blocker fix: PASS
- Zero remaining blockers
- Public page and navigation implemented

## Repo Artifacts

- `MASTER_SPEC.md`
- `source-manifest.json`
- `thesis-map.json`
- `claim-ledger.json`
- `main.qmd`
- `librarian-audit.md`
- `benchmark-report.json`
- `human-rubric.md`

## Implementation Outcome

1. Created `portfolio/academic-project-pages/pjm-miso-seam-trading.html`
2. Updated `portfolio/academic-project-pages/index.html` (Project 05 added)
3. Updated `portfolio/academic-project-pages/portfolio-compendium.html` (Summary 05 added)
4. No CSS changes needed
5. Passed external librarian re-audit after blocker fix

## Stop Conditions

- Any absolute P&L figure in the page
- Any vendor name, node ID, or API key
- Any results-section framing
- Any positive edge claims from pre-validation legacy sources
- Navigation pointing to the deferred follow-on before it is audited
