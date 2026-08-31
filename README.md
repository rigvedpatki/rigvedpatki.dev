# rigvedpatki.dev

Personal portfolio built with Astro, SolidJS, Tailwind CSS, and
DaisyUI.

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and
files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to
[our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or
jump into our [Discord server](https://astro.build/chat).

## Quality checks

Run `pnpm quality` to execute linting, formatting validation, Astro
type checking, a production build, recursive link checks, and
Playwright browser and accessibility smoke tests. Before the first
local browser run, install Chromium with
`pnpm exec playwright install chromium`.

Individual checks are available through `pnpm lint`,
`pnpm format:check`, `pnpm typecheck`, `pnpm links`, and
`pnpm test:browser`.

## Deployment

GitHub Actions runs the quality gate for pull requests and pushes to
`feature/astro-portfolio`. Successful pushes to that canonical
production branch are deployed automatically to GitHub Pages. The
workflow also supports manual dispatch.
