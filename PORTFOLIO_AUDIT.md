# Portfolio Website Audit

**Website:** [rigvedpatki.dev](https://rigvedpatki.dev/)  
**Audit date:** 31 August 2026  
**Overall score:** **76.3/100**  
**Assessment:** **Strong resume site; developing portfolio**

## Executive Summary

The site communicates an experienced full-stack engineer with credible
career progression, leadership experience, and several quantified
outcomes. The resume download, LinkedIn, GitHub, and email actions are
easy to find, while the SEO and semantic foundations are stronger than
those of many personal sites.

Its main limitation is proof. Projects are detailed descriptions of
work, but they do not include screenshots, architecture diagrams, live
demos, source links, testimonials, or other artifacts that let a
visitor independently assess the work. The long single-page format
also lacks section navigation, making the most valuable evidence
slower to find.

The highest-return improvement is to turn three representative
projects into concise, visual case studies and sharpen the opening
message around technical leadership and measurable outcomes.

## Methodology

This assessment combines:

- Inspection of the content rendered at the production URL.
- Static review of the Astro components, metadata, structured data,
  assets, styling, and deployment workflow in this repository.
- Portfolio-focused expert judgment from the perspective of a
  recruiter, hiring manager, and senior engineering interviewer.

Each category receives a score from 0 to 10. Its weighted contribution
is:

`category score / 10 x category weight`

This is an internal quality benchmark, not a percentile comparison
against a representative dataset of portfolio sites.

No Lighthouse, Core Web Vitals, automated accessibility,
assistive-technology, analytics, or physical-device results were
available for this baseline. Those areas are scored from observable
implementation evidence and are marked for measurement in the roadmap.

## Scorecard

| Aspect                                        |   Weight |  Score |  Contribution | Assessment                                                                                                                                                    |
| --------------------------------------------- | -------: | -----: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Professional positioning and first impression |      15% | 8.0/10 |         12.00 | Name, role, employer, location, and actions are immediate, but "Full Stack Developer" undersells seniority and leadership.                                    |
| Resume content and career narrative           |      15% | 9.0/10 |         13.50 | Strong progression, scope, mentoring, and quantified outcomes create a credible senior-level narrative.                                                       |
| Project credibility and proof of work         |      15% | 6.0/10 |          9.00 | Substantial descriptions and stacks are present, but visual or independently verifiable proof is absent.                                                      |
| Visual design and information hierarchy       |      10% | 7.5/10 |          7.50 | Consistent cards, spacing, icons, and themes aid reading; repeated dense cards make sections feel uniform and lengthy.                                        |
| Usability and navigation                      |      10% | 6.0/10 |          6.00 | The page order is logical, but the header only links home and offers no path directly to key sections.                                                        |
| Accessibility foundation                      |      10% | 7.5/10 |          7.50 | Semantic landmarks, alternative text, labels, and a keyboard-operable theme control are present; automated and manual testing are missing.                    |
| Responsive and mobile readiness               |       5% | 8.0/10 |          4.00 | Mobile-first flex and wrapping utilities are used consistently; long content remains a mobile scanning concern.                                               |
| Performance and technical quality             |      10% | 8.0/10 |          8.00 | Astro static output, optimized assets, limited client JavaScript, linting, and formatting provide a good base; no measured budget or regression suite exists. |
| SEO and social discoverability                |       5% | 8.5/10 |          4.25 | Canonical, Open Graph, Twitter, sitemap, robots, and JSON-LD support discovery; schema accuracy and social preview freshness need attention.                  |
| Contact and conversion effectiveness          |       5% | 9.0/10 |          4.50 | Resume, LinkedIn, GitHub, and email actions are prominent and accessible from the first viewport.                                                             |
| **Total**                                     | **100%** |        | **76.25/100** | **Rounded headline score: 76.3/100**                                                                                                                          |

## What Works Well

### Credible Career Story

The experience section is the site's strongest asset. It shows
progression from implementation roles to Member of Technical Staff
III, and it supports claims with team size, customer scale,
performance improvements, uptime, request volume, and delivery-time
reductions. This is much more persuasive than a list of
responsibilities.

Evidence: [Experience component](src/components/Experience.astro) and
the [production website](https://rigvedpatki.dev/).

### Clear Conversion Paths

The opening section answers the basic questions quickly and gives
visitors four useful next actions: view LinkedIn, view GitHub, send
email, or download the resume. External links use appropriate labels
and safe new-tab attributes.

Evidence: [Hero component](src/components/Hero.astro).

### Broad Technical Range

Skills are grouped into languages, frontend, backend, cloud and
DevOps, and databases. The breadth supports the full-stack positioning
and aligns with the work history.

Evidence: [Skills component](src/components/Skills.astro).

### Sound SEO Foundation

The site includes canonical URLs, descriptions, Open Graph and Twitter
cards, a dedicated social preview image, Person and WebSite JSON-LD, a
sitemap, and a permissive robots policy. These are appropriate
foundations for a personal brand site.

Evidence: [SEO component](src/components/SEO.astro),
[structured data](src/components/StructuredData.astro),
[social preview image](public/og-image.png), and
[robots policy](public/robots.txt).

### Lightweight Implementation

Astro renders the content while only the theme switcher is hydrated on
the client. Local images use Astro's asset pipeline, and the
repository provides lint, formatting, build, and deployment commands.

Evidence: [Layout](src/layouts/Layout.astro),
[theme switcher](src/components/ThemeSwitcher.tsx), and
[package scripts](package.json).

## Improvement Scope

### 1. Portfolio Proof Is Limited

The projects explain responsibilities, technologies, and some
outcomes, but all entries use text-only cards. There are no product
images, diagrams, demos, repositories, talks, technical articles, or
sanitized artifacts. Several projects repeat information already
present under Experience.

For confidential enterprise work, proof does not need to expose
proprietary details. A sanitized workflow diagram, anonymized
screenshot, architecture decision, challenge-and-result narrative, or
public technical write-up can show how the work was approached.

Evidence: [Projects component](src/components/Projects.astro).

### 2. The Opening Positioning Is Too Generic

"Full Stack Developer" is accurate but does not distinguish a Member
of Technical Staff III with more than nine years of experience,
frontend architecture ownership, backend experience, Scrum leadership,
and mentoring impact. The illustrated profile image is personable, but
a professional photo or a work-focused visual would create a stronger
recruiting signal.

Evidence: [Hero component](src/components/Hero.astro) and
[profile asset](src/assets/images/ghibli-profile.webp).

### 3. Long-Page Navigation Is Missing

The content order is sensible, but the header contains only the
name/home link and theme switcher. Visitors cannot jump to Experience,
Projects, Skills, or Contact. This matters because seven substantial
sections are stacked on one page.

Evidence: [Header component](src/components/Header.astro) and
[content composition](src/components/Content.astro).

### 4. Content Is Repetitive and Hard to Scan

The About section contains six paragraphs and repeats skills and
leadership details found later. Experience and Projects also describe
some of the same work. On mobile, this produces a particularly long
path to the highest-value project evidence.

Evidence: [About component](src/components/About.astro),
[Experience component](src/components/Experience.astro), and
[Projects component](src/components/Projects.astro).

### 5. Credentials Need Stronger Verification

Certifications list providers and dates but do not link to
credentials. Course completion certificates can support learning, but
they should be clearly distinguished from proctored professional
certifications where relevant.

Evidence:
[Certifications component](src/components/Certifications.astro).

### 6. Structured Data Needs a Factual Review

The Person schema lists `University of Pune` as the sole `alumniOf`
value, while the visible education history names Vishwakarma Institute
of Technology, Technische Universitat Berlin, KTH Royal Institute of
Technology, and Aalto University. The schema also uses the broader
title "Full Stack Developer" instead of the current visible role.
Search metadata should match the page's factual claims.

Evidence: [Structured data](src/components/StructuredData.astro) and
[Education component](src/components/Education.astro).

### 7. Quality Is Not Continuously Measured

The project has linting, formatting, and a production build, but no
Astro type-check script, automated link test, accessibility test,
Lighthouse budget, or component/end-to-end regression test. The
deployment workflow builds on pushes to `feature/astro-portfolio`
rather than a conventional production branch, and it does not run
explicit quality gates before deployment.

Evidence: [package scripts](package.json) and
[deployment workflow](.github/workflows/deploy.yml).

## Prioritized Roadmap

| Priority | Improvement                                 | Impact    | Effort | Acceptance criteria                                                                                                                                                      |
| -------- | ------------------------------------------- | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P0       | Publish three featured case studies         | Very high | Medium | Each case study states the problem, constraints, personal contribution, key decision, measurable result, and includes at least one sanitized visual or public artifact.  |
| P0       | Sharpen the hero positioning                | High      | Low    | The subtitle communicates seniority, specialty, and value in one concise statement; the first viewport still exposes resume and contact actions.                         |
| P0       | Correct and validate structured data        | High      | Low    | Person schema matches visible role and education; JSON-LD passes Schema.org and Google rich-result validation without factual conflicts.                                 |
| P0       | Refresh the social preview                  | Medium    | Low    | Open Graph image reflects current positioning and renders correctly in LinkedIn and other major preview debuggers.                                                       |
| P1       | Add sticky section navigation               | High      | Medium | Keyboard- and mobile-friendly links reach About, Experience, Projects, Skills, and Contact; active/focus states are visible.                                             |
| P1       | Reduce and differentiate content            | High      | Medium | About is reduced to two or three short paragraphs; Experience focuses on outcomes; Projects focus on decisions and evidence rather than repeating duties.                |
| P1       | Feature projects before full history        | High      | Medium | Two or three strongest projects are reachable within the early page flow, with the complete chronology still available below.                                            |
| P1       | Add credential links and classification     | Medium    | Low    | Verifiable credentials link to issuers, and course certificates are labeled distinctly from professional certifications.                                                 |
| P1       | Review profile imagery                      | Medium    | Low    | The chosen image is intentional for the target role, sharp at rendered size, and consistent across the page and social preview.                                          |
| P2       | Add automated quality checks                | Medium    | Medium | CI runs Astro type checking, linting, formatting, production build, internal/external link checks, and an automated accessibility smoke test.                            |
| P2       | Establish Lighthouse budgets                | Medium    | Medium | Mobile CI baselines and budgets cover performance, accessibility, best practices, SEO, LCP, CLS, and total JavaScript.                                                   |
| P2       | Align deployment with the production branch | Medium    | Low    | Production deploys from the documented primary branch after quality checks pass, while manual deployment remains available.                                              |
| P2       | Add a custom 404 page                       | Low       | Low    | Unknown routes render a branded page with routes back to the portfolio and contact options.                                                                              |
| Later    | Move repeated content into structured data  | Medium    | High   | Skills, roles, projects, education, and credentials are generated from typed content records without changing rendered semantics.                                        |
| Later    | Refine privacy-aware analytics              | Medium    | Medium | Events answer defined questions about resume downloads, case-study engagement, and contact conversion while honoring the site's privacy policy and consent requirements. |

## Recommended First Release

A focused first release should contain:

1. A role-specific hero statement.
2. Three visual case studies with measurable results.
3. Section navigation and a shorter About section.
4. Corrected structured data and refreshed social preview content.
5. Automated type, link, accessibility, and Lighthouse checks.

Completing the P0 and P1 items should reasonably move the site into
the **85-88/100** range, provided browser measurements confirm the
current performance and accessibility assumptions.

## Re-Audit Checklist

- Can a first-time visitor explain the specialization and seniority
  after five seconds?
- Can a recruiter reach Experience, Projects, the resume, and contact
  actions without prolonged scrolling?
- Does every featured project show the problem, individual
  contribution, decision process, result, and credible evidence?
- Are repeated claims removed or adapted to the purpose of each
  section?
- Do resume, employment dates, visible content, metadata, and JSON-LD
  agree?
- Do all external, credential, email, social, and download links work?
- Can all controls be reached and understood with a keyboard and
  screen reader?
- Does the layout remain readable at representative mobile, tablet,
  and desktop sizes?
- Do production Lighthouse and Core Web Vitals results meet documented
  budgets?
- Does CI block deployment when type, lint, formatting, link,
  accessibility, or build checks fail?

## Evidence Boundary

The score reflects the production content and repository state
available on the audit date. Performance, accessibility,
responsiveness, and conversion should be rescored after collecting
browser-based results and representative analytics. No unmeasured
Lighthouse score, Core Web Vital, accessibility conformance level, or
conversion rate is asserted in this report.
