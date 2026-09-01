# Portfolio Improvement Plan

**Source:** [Portfolio Website Audit](PORTFOLIO_AUDIT.md)  
**Created:** 31 August 2026  
**Scope:** All 15 items in the audit's Prioritized Roadmap

## Ordering Method

This plan is ordered by the amount of intervention required from
Rigved, not by the roadmap's P0/P1/P2 priority or implementation
effort.

| Intervention level | Meaning                                                                              |
| ------------------ | ------------------------------------------------------------------------------------ |
| None               | Can be implemented and validated from the repository alone.                          |
| Review             | Can be drafted independently but needs approval of wording, thresholds, or behavior. |
| Decision           | Requires a product, deployment, privacy, or branding choice before completion.       |
| Content/assets     | Requires facts, links, images, or artifacts that are not in the repository.          |

Items within the same level are ordered by dependency and
implementation value. This sequencing minimizes interruptions; it does
not replace the P0-P2 business priorities in the audit.

## Implementation Order

| Order | Roadmap item                                | Audit priority | Intervention | Main dependency                                       |
| ----: | ------------------------------------------- | -------------- | ------------ | ----------------------------------------------------- |
|     1 | Add a custom 404 page (Done)                | P2             | None         | None                                                  |
|     2 | Add sticky section navigation (Done)        | P1             | None         | None                                                  |
|     3 | Correct and validate structured data (Done) | P0             | None         | Visible resume and education content                  |
|     4 | Add automated quality checks (Done)         | P2             | None         | CI/tooling choices can follow repository conventions  |
|     5 | Establish Lighthouse budgets (Done)         | P2             | None         | Baseline measurement after item 4                     |
|     6 | Move repeated content into structured data  | Later          | None         | Preferably after content changes stabilize            |
|     7 | Feature projects before full history        | P1             | None         | Approved featured-project set                         |
|     8 | Reduce and differentiate content (Done)     | P1             | None         | Preserve verified facts and personal tone             |
|     9 | Sharpen the hero positioning                | P0             | None         | Approved title, audience, and positioning             |
|    10 | Refresh the social preview                  | P0             | None         | Approved enterprise-editorial direction               |
|    11 | Align deployment with the production branch | P2             | None         | Automatic deployment after required checks            |
|    12 | Refine privacy-aware analytics              | Later          | None         | Approved goals, provider, retention, and audience     |
|    13 | Add credential links and classification     | P1             | None         | Retain and classify all five entries                  |
|    14 | Review profile imagery                      | P1             | None         | Retain and optimize the current illustration          |
|    15 | Publish three featured case studies         | P0             | Review       | Verify published metrics and final publication safety |

## 1. Add a Custom 404 Page

**Status:** Done (31 August 2026)  
**Roadmap priority:** P2  
**Intervention required:** None  
**Goal:** Give invalid routes a branded recovery path instead of the
hosting platform's generic response.

### Implementation

- Add `src/pages/404.astro` using the existing `Layout.astro` shell.
- Show a concise not-found message and actions for Home, Projects,
  resume, and email contact.
- Reuse existing typography, button, theme, and spacing conventions.
- Include an appropriate page title, `noindex` metadata, and
  accessible heading structure.

### Validation

- Build the site and confirm `dist/404.html` is generated.
- Open an unknown route through the production preview.
- Verify keyboard focus, light/dark themes, mobile layout, and
  recovery links.

### Done When

Unknown routes show the branded page and every recovery action works.

## 2. Add Sticky Section Navigation

**Status:** Done (31 August 2026)  
**Roadmap priority:** P1  
**Intervention required:** None  
**Goal:** Make the long single page directly navigable on desktop and
mobile.

### Implementation

- Add stable IDs to About, Skills, Experience, Education, Projects,
  and Certifications; use the footer as the Contact target.
- Expand `Header.astro` with anchor links for the highest-value
  sections.
- Use a compact desktop navigation and an accessible mobile menu that
  does not crowd the header.
- Make the header sticky with an opaque or blurred background and
  account for anchor scroll offset.
- Provide visible hover, active, and keyboard-focus states.
- Preserve the theme switcher and respect reduced-motion preferences.

### Validation

- Test every anchor by keyboard, mouse, and direct URL fragment.
- Confirm headings are not hidden beneath the sticky header.
- Check common mobile and desktop widths for wrapping and overlap.
- Verify menu semantics with an automated accessibility smoke test.

### Done When

Visitors can reach the key sections without prolonged scrolling and
navigation remains usable at all supported widths.

## 3. Correct and Validate Structured Data

**Status:** Done (31 August 2026)  
**Roadmap priority:** P0  
**Intervention required:** None for the initial correction  
**Goal:** Make machine-readable claims consistent with the visible
portfolio.

### Implementation

- Update `StructuredData.astro` so `jobTitle`, `worksFor`, and
  education match the visible Hero, Experience, and Education
  sections.
- Represent the EIT Digital master's program and participating
  institutions without implying multiple separate master's degrees.
- Keep only claims supported by the page and current resume.
- Add stable profile image and relevant public profile URLs where
  appropriate.
- Keep Person and WebSite schemas small; add project schema only when
  case-study pages exist.

### Validation

- Inspect generated JSON-LD in `dist/index.html`.
- Run it through Schema.org Validator and Google Rich Results Test.
- Compare every property with visible page content and the resume PDF.

### Done When

The schema validates without factual conflicts, unsupported claims, or
malformed properties.

## 4. Add Automated Quality Checks

**Status:** Done (31 August 2026)  
**Roadmap priority:** P2  
**Intervention required:** None  
**Goal:** Catch content and implementation regressions before
deployment.

### Implementation

- Add Astro type checking with `astro check` and the required checker
  package.
- Add scripts for lint, formatting, type checking, production build,
  internal link checks, and an accessibility smoke test.
- Check external links with retries and fail CI when a link remains
  unavailable after the configured attempts.
- Add a CI workflow for pull requests and production-branch pushes.
- Cache pnpm dependencies and pin compatible action/runtime versions.
- Keep deployment dependent on successful quality checks.
- Start with a small browser test covering page load, section anchors,
  external CTA attributes, resume availability, theme control, and the
  404 page.

### Validation

- Run every script locally from a clean dependency install.
- Intentionally break one link and one accessible label to prove CI
  fails.
- Restore both and confirm the workflow passes.

### Done When

Type, lint, format, build, link, accessibility, and smoke-test
failures block merging or deployment.

## 5. Establish Lighthouse Budgets

**Roadmap priority:** P2  
**Intervention required:** None for initial thresholds  
**Goal:** Replace performance assumptions with repeatable
production-like measurements.

### Implementation

- Add Lighthouse CI against the built preview, initially using three
  mobile runs to reduce variance.
- Record the first baseline before setting blocking thresholds.
- Budget performance, accessibility, best practices, SEO, LCP, CLS,
  total JavaScript, and total image weight.
- Use warning thresholds for noisy metrics initially; tighten them
  after the baseline is stable.
- Run the audit after the production build in CI and retain reports as
  artifacts.

### Approved Initial Budgets

| Metric                   |       Initial target |
| ------------------------ | -------------------: |
| Accessibility            |                >= 95 |
| Best practices           |                >= 95 |
| SEO                      |                >= 95 |
| Performance              |                >= 90 |
| Largest Contentful Paint |             <= 2.5 s |
| Cumulative Layout Shift  |              <= 0.10 |
| Total client JavaScript  | <= 100 KB compressed |

These initial targets are approved. Adjust them only from documented
baseline evidence, not to make a regression pass.

### Validation

- Run Lighthouse CI locally and in the hosted workflow.
- Confirm reports are retained and an intentional budget violation
  fails CI.
- Compare synthetic results with production Core Web Vitals when
  enough field data becomes available.

### Done When

Every deployment produces a comparable report and material regressions
are blocked.

## 6. Move Repeated Content Into Structured Data

**Roadmap priority:** Later  
**Intervention required:** None after copy is approved  
**Goal:** Remove manual duplication and make portfolio content easier
to update.

### Implementation

- Define typed records for skills, roles, projects, education, and
  credentials under a dedicated `src/data/` or Astro
  content-collection boundary.
- Render existing components from those records while preserving
  semantic HTML.
- Reference shared employer, date, technology, and outcome fields
  instead of copying strings between sections.
- Keep narrative fields section-specific so Experience and Projects do
  not become identical views of the same data.
- Add schema checks for required fields and chronological consistency.

### Validation

- Compare rendered content before and after migration.
- Run type checking, build, link, and browser smoke tests.
- Confirm editing one shared fact updates every intended surface.

### Done When

Portfolio facts have one typed source of truth without changing
approved content or page semantics.

## 7. Feature Projects Before Full History

**Roadmap priority:** P1  
**Intervention required:** None; featured projects are selected  
**Goal:** Surface evidence of engineering ability earlier in the
visitor journey.

### Implementation

- Move a compact Featured Work section after the hero/About
  introduction and before the full Experience chronology.
- Feature System Health Insights, Support Engineer Triage Application,
  and IoT Analytics Dashboard.
- Keep the complete work history below and link each featured card to
  its future case study.
- Avoid duplicating full project descriptions in both locations.

### Validation

- Check that the first two viewport lengths expose a meaningful
  project signal on desktop and mobile.
- Verify heading hierarchy and section navigation after reordering.
- Conduct a five-second comprehension check with representative
  reviewers.

### Done When

Visitors encounter selected proof of work before the detailed
chronology without losing access to the complete resume narrative.

## 8. Reduce and Differentiate Content

**Status:** Done (1 September 2026)  
**Roadmap priority:** P1  
**Intervention required:** None; substantial rewriting is approved  
**Goal:** Improve scanning and give each section a distinct purpose.

**Editorial decision:** Copy may be substantially shortened and
restructured while preserving verified facts and the author's personal
tone.

### Implementation

- Reduce About from six paragraphs to two or three concise paragraphs
  covering professional identity, leadership style, and motivation.
- Keep technology lists in Skills rather than repeating them in About.
- Make Experience emphasize scope, progression, and outcomes.
- Make Projects emphasize problem, constraints, decisions,
  contribution, and evidence.
- Remove generic phrases that do not distinguish this portfolio.
- Correct visible spelling, punctuation, capitalization, and product
  naming as part of the copy pass.

### Validation

- Compare word counts and repeated phrases before and after editing.
- Confirm no metric, date, employer, or responsibility changes
  meaning.
- Review mobile scan length and ask a reviewer to summarize the
  profile quickly.

### Done When

Each section answers a different visitor question and no important
claim is needlessly repeated.

## 9. Sharpen the Hero Positioning

**Roadmap priority:** P0  
**Intervention required:** None; title, audience, and positioning are
approved  
**Goal:** Communicate seniority, specialization, and value
immediately.

**Positioning decision:** Optimize for a hybrid technical leader: a
senior full-stack engineer with architecture ownership and team
leadership. Use **Senior Full-Stack Engineer** as the public-facing
title while retaining Member of Technical Staff III in the employment
history.

### Implementation

- Replace the generic subtitle with a role-specific value statement.
- Add one short supporting line using verified scope or impact.
- Keep employer, location, contact links, and resume action in the
  first viewport.
- Align the page title, meta description, JSON-LD role, resume, and
  social preview with the approved positioning.

### Draft Direction

> Senior Full-Stack Engineer | Frontend Architecture, Cloud-Native
> Systems, and Technical Leadership

The title, target persona, and audience are approved. The supporting
value statement may be drafted within those decisions.

**Audience decision:** Optimize supporting copy and project evidence
for product/SaaS companies and enterprise infrastructure teams. Lead
with product engineering, architecture, customer outcomes, cloud and
data-platform scale, and reliability. No location or remote-work
constraint is currently specified.

### Validation

- Test the hero at mobile and desktop sizes for wrapping and
  first-viewport fit.
- Ask representative reviewers to identify role, seniority, specialty,
  and next action after five seconds.
- Confirm metadata and visible wording remain consistent.

### Done When

A first-time visitor can accurately describe the professional
positioning after a brief glance.

## 10. Refresh the Social Preview

**Roadmap priority:** P0  
**Intervention required:** None; visual direction is approved  
**Goal:** Make shared links recognizable, current, and aligned with
the hero.

**Image decision:** Use the retained profile illustration with the
approved name and Senior Full-Stack Engineer positioning.

**Visual decision:** Use an enterprise-editorial treatment with
restrained charcoal and white, coral/red accents, and
publication-style typography.

### Implementation

- Redesign `public/og-image.png` at 1200 x 630 pixels.
- Include name, approved positioning, domain, and one intentional
  visual asset.
- Preserve safe margins for platform cropping and readable contrast at
  thumbnail size.
- Add explicit image alternative text and dimensions to social
  metadata where supported.
- Keep the asset optimized while avoiding text that will become stale
  quickly.

### Validation

- Verify direct asset loading in production.
- Test previews with LinkedIn Post Inspector and other relevant
  platform tools.
- Check the image at full size and small-card size for legibility.

### Done When

Major social platforms render a current, legible preview without
clipping or stale positioning.

## 11. Align Deployment With the Production Branch

**Roadmap priority:** P2  
**Intervention required:** None; release policy is approved  
**Goal:** Make production deployment intentional, documented, and
gated.

**Branch decision:** Keep `feature/astro-portfolio` as the canonical
production branch. The existing branch trigger is intentional.

**Release decision:** Deploy automatically after all required checks
pass. Retain `workflow_dispatch` as a manual fallback; do not require
environment approval.

### Implementation

- Preserve the `feature/astro-portfolio` push trigger and document it
  as the canonical production branch.
- Run the quality workflow before the deploy job and require it to
  pass.
- Retain `workflow_dispatch` for controlled manual deployments.
- Configure GitHub environment protection if approvals are required.
- Update README documentation with the branch and deployment flow.

### Validation

- Open a pull request and verify checks run without deploying.
- Merge a controlled change to the production branch and verify one
  deployment.
- Confirm a failed quality check prevents deployment.

### Done When

The documented production branch is the only automatic deployment
source and failed checks cannot publish the site.

## 12. Refine Privacy-Aware Analytics

**Roadmap priority:** Later  
**Intervention required:** None; measurement and configuration
decisions are approved  
**Goal:** Measure useful portfolio outcomes without collecting
unnecessary data.

**Measurement decision:** Track resume downloads, contact conversion,
LinkedIn/GitHub profile clicks, and navigation effectiveness. Do not
add case-study engagement events unless that goal changes.

**Provider decision:** Retain Google Analytics without adding a
consent banner. Document the chosen privacy basis and configuration,
and do not send personal data in event payloads. This implementation
decision is not a legal determination.

**Retention decision:** Configure the shortest available GA retention
period corresponding to two months and treat the site audience as
global.

### Implementation

- Define a small measurement plan before adding events.
- Standardize declarative event attributes for resume downloads, email
  contact, social links, and navigation.
- Avoid event payloads containing personal data or free-form visitor
  content.
- Verify whether the chosen GA configuration and audience require
  consent under applicable policy and law; implement consent behavior
  if required.
- Document event names, parameters, purpose, and retention
  expectations.
- Add a concise privacy notice if analytics remains enabled.

### Approved Questions to Measure

- How often do visitors download the resume or initiate contact?
- Which external profile is most useful to visitors?
- Does improved navigation increase visits to Projects and Experience?

### Validation

- Test events in GA DebugView without recording personal data.
- Verify Do Not Track and consent behavior against the approved
  policy.
- Confirm the site remains fully functional when analytics is blocked.

### Done When

Every tracked event answers a documented question, privacy behavior is
explicit, and analytics failure does not affect the portfolio.

## 13. Add Credential Links and Classification

**Roadmap priority:** P1  
**Intervention required:** Retention decision only; no public
verification links are available  
**Goal:** Let visitors verify credentials and understand their type.

**Verification decision:** Do not add links or IDs because no public
verification records are available. Classify retained entries
accurately and avoid implying third-party verification.

**Retention decision:** Keep all five current entries and label each
as employer training or a course certificate, as applicable.

### Implementation

- Do not add issuer-verification links or credential IDs unless a
  public record becomes available later.
- Label entries consistently as professional certification, course
  certificate, employer training, or other appropriate type.
- Add credential IDs only when they are intended to be public.
- Use accessible external-link labels and safe new-tab attributes.
- Consider reducing older course certificates if they no longer
  support the target positioning.

### Validation

- Open every credential URL and confirm it identifies the correct
  person and course/certification.
- Run automated external-link checks and inspect keyboard behavior.
- Confirm no private certificate identifiers or account URLs are
  exposed.

### Done When

Every retained credential is accurately classified and verifiable
where the issuer supports public verification.

## 14. Review Profile Imagery

**Roadmap priority:** P1  
**Intervention required:** None; retain the current illustration  
**Goal:** Use imagery that reinforces the intended professional brand.

**Image decision:** Keep the current Ghibli-style illustration as an
intentional part of the portfolio's personal brand.

### Implementation

- Retain the current illustration and verify that its source asset is
  sharp enough for every rendered size.
- Generate optimized AVIF/WebP variants through Astro's asset pipeline
  where they improve delivery.
- Use the approved image consistently in the hero, metadata, and
  social preview where appropriate.
- Preserve descriptive alternative text and stable dimensions.

### Validation

- Review crop, sharpness, loading, contrast, and layout stability
  across widths.
- Confirm image metadata does not expose unwanted location or device
  data.
- Verify the production and social-preview assets match the approved
  direction.

### Done When

The chosen image is deliberate, optimized, accessible, and consistent
across brand surfaces.

## 15. Publish Three Featured Case Studies

**Roadmap priority:** P0  
**Intervention required:** Final review of metric evidence and
publication safety  
**Goal:** Convert project claims into credible evidence of senior
engineering work.

**Publication boundary:** Only project details already published on
the website are currently cleared for public use. Do not add internal
facts, architecture details, screenshots, or workflows without
separate approval.

**Metric decision:** Retain currently published metrics provisionally,
but verify their source and context before featuring them more
prominently. Remove or soften any metric that cannot be substantiated.

**Artifact decision:** No project screenshots, diagrams, repositories,
articles, testimonials, awards, or other artifacts are currently
available. Case studies may use original conceptual visuals derived
only from already-public facts, clearly labeled as illustrative rather
than internal architecture.

**Ownership decision:** Describe individual contribution using only
ownership claims already published on the site. Omit alternatives and
tradeoffs that are not public; do not infer or invent them.

### Implementation

- Build the three approved studies: System Health Insights, Support
  Engineer Triage Application, and IoT Analytics Dashboard.
- Use a consistent case-study structure based on available public
  evidence: context, problem, constraints, personal ownership,
  implementation, measurable result, and lessons learned. Include
  alternatives and tradeoffs only if they are later approved.
- Clearly distinguish individual contribution from team outcomes.
- Where useful, add an original conceptual visual derived only from
  approved public facts and label it as illustrative. Do not imply
  that it reproduces internal architecture or interfaces.
- Remove customer, security, scale, and implementation details that
  are not cleared for publication.
- Create dedicated routes with concise featured summaries on the home
  page.
- Add appropriate metadata and structured data after the pages exist.

### Recommended Starting Candidates

1. System Health Insights: frontend architecture and enterprise
   analytics.
2. Support Engineer Triage Application: end-to-end product and
   debugging workflow ownership.
3. IoT Analytics Dashboard: real-time product engineering and IoT
   scale.

This selection is approved for emphasis, subject to confidentiality
and evidence review.

### Validation

- Obtain factual and publication-safety review for each study.
- Verify every metric has an explainable source and context.
- Test pages for responsive media, accessibility, navigation,
  metadata, and link previews.
- Ask senior engineering reviewers whether the studies reveal decision
  quality, ownership, tradeoffs, and impact.

### Done When

Three approved studies provide credible, role-relevant proof without
exposing confidential information.

## Decision Record

All original open questions are resolved below. New factual claims,
internal project details, or assets remain outside the approved scope
unless separately reviewed.

### Positioning and Content

1. **Resolved:** Optimize for a hybrid technical leader: a senior
   full-stack engineer with architecture ownership and team
   leadership.
2. **Resolved:** Use "Senior Full-Stack Engineer" as the public-facing
   title. Keep "Member of Technical Staff III" in the employment
   history.
3. **Resolved:** Target product/SaaS companies and enterprise
   infrastructure teams. No location or remote-work preference was
   specified.
4. **Resolved:** Substantial rewriting is approved when it preserves
   verified facts and the author's personal tone.
5. **Resolved:** Feature System Health Insights, Support Engineer
   Triage Application, and IoT Analytics Dashboard. Keep Release
   Management Automation in the broader project history.

### Case Studies and Confidentiality

6. **Resolved:** Only project details already published on the website
   are currently cleared for public use. New internal details and
   artifacts require separate approval.
7. **Resolved:** Retain currently published metrics provisionally and
   flag them for source/context verification before prominent reuse.
   Remove or soften metrics that cannot be substantiated.
8. **Resolved:** No project artifacts are currently available. Use
   approved text and, where valuable, original conceptual visuals
   derived only from public facts.
9. **Resolved:** Use only existing public claims to distinguish
   individual contribution. Omit undocumented alternatives and
   tradeoffs rather than inferring them.

### Brand and Assets

10. **Resolved:** Retain the current Ghibli-style illustration as an
    intentional personal-brand choice.
11. **Resolved:** Use the retained profile illustration with the
    approved name and Senior Full-Stack Engineer positioning.
12. **Resolved:** Use an enterprise-editorial direction with
    restrained charcoal and white, coral/red accents, and
    publication-style typography.

### Credentials

13. **Resolved:** No public verification links or IDs are available.
    Classify retained entries accurately without implying external
    verification.
14. **Resolved:** Keep all five current credentials and classify each
    clearly by type.

### Deployment and Quality

15. **Resolved:** `feature/astro-portfolio` is the canonical
    production branch and should retain the automatic-deployment
    trigger.
16. **Resolved:** Deploy automatically from the production branch
    after all required checks pass. Retain manual dispatch as a
    fallback.
17. **Resolved:** Adopt the listed Lighthouse thresholds as the
    initial targets.
18. **Resolved:** Retry failed external links, then fail CI and block
    deployment if they remain unavailable.

### Analytics and Privacy

19. **Resolved:** Measure resume downloads, contact conversion,
    LinkedIn/GitHub profile clicks, and navigation effectiveness. Do
    not currently track case-study engagement.
20. **Resolved:** Retain Google Analytics without a consent banner.
    Document the privacy basis and avoid personal data in event
    payloads; treat this as an implementation choice rather than legal
    advice.
21. **Resolved:** Use a two-month analytics retention period and treat
    the audience as global.

## Suggested Execution Batches

### Batch A: Foundation

Implement items 1-5. These improve navigation, correctness,
resilience, and measurement without changing substantive personal
claims.

### Batch B: Approved Content and Brand

Implement items 8, 9, 13, and 14 using the approved editorial freedom,
positioning, credential classification, and retained illustration.
Then implement item 10 using the approved enterprise-editorial social
preview direction.

### Batch C: Portfolio Evidence

Draft item 15 from already-public facts and original illustrative
visuals. Complete its metric and publication-safety review, then
implement item 7 to feature the approved studies before the full work
history.

### Batch D: Consolidation and Release

Implement item 6 after content stabilizes, item 12 after navigation is
available for measurement, and item 11 after the quality gates are in
place. Production then deploys automatically from
`feature/astro-portfolio` when all required checks pass.

## Plan Completion Criteria

- Every roadmap item has an owner, dependency status, and
  implementation change.
- Every completed item passes its listed validation steps.
- Every case-study fact is already public or has explicit publication
  approval; no unavailable project artifact is required.
- The production build, automated checks, responsive review,
  accessibility review, and metadata validation pass before
  deployment.
- `PORTFOLIO_AUDIT.md` is updated with measured results and a new
  weighted score after the P0 and P1 work is deployed.
