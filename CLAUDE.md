# kcmillares-static — Project Context

## Overview
Static personal website for `kcmillares.com`, built with React + TypeScript + Vite.
Hosted on GitHub Pages with a custom domain configured through GoDaddy.

## Tech Stack
| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework, strict mode enabled |
| Vite 5 | Build tool and dev server |
| Vitest + React Testing Library | Unit testing |
| Tailwind CSS 3 | Utility-first styling |
| ESLint + Prettier | Linting and formatting |
| react-router-dom v6 | Client-side routing |
| GitHub Actions | CI/CD pipeline |

## Project Structure
```
src/
  components/     # Reusable UI components (one file per component)
    ui/           # Primitive UI pieces (Button, Card, etc.)
  pages/          # Route-level page components
  hooks/          # Custom React hooks
  types/          # Shared TypeScript interfaces and types
  utils/          # Pure utility functions
  test/           # Test setup only (setup.ts)
  App.tsx         # Root component and route definitions
  main.tsx        # React entry point
public/
  CNAME           # GitHub Pages custom domain
.claude/
  commands/       # Claude Code slash commands (agent roles)
```

## Conventions

### Components
- One component per file, named with PascalCase matching the filename
- Keep components under 200 lines; split if larger
- Co-locate test files: `Button.tsx` → `Button.test.tsx`
- No default props — use TypeScript optional params with defaults in destructuring

### TypeScript
- Strict mode is on — no `any`, no `as unknown as X`
- Define prop types inline with `interface` above the component
- Export types from `src/types/index.ts` when shared across files

### Styling
- Tailwind utility classes only — no custom CSS unless unavoidable
- Use the `cn()` helper from `src/utils/index.ts` for conditional class merging
- Responsive-first: mobile → tablet → desktop breakpoints

### Testing
- Test behaviour, not implementation details
- Use `screen.getBy*` queries (accessible roles/labels first)
- Wrap components with `MemoryRouter` when they use routing
- One `describe` block per component, one `it` per behaviour

### Imports
- Use the `@/` path alias for all `src/` imports (e.g., `import { cn } from '@/utils'`)
- Group order: React → third-party → `@/` aliases → relative

## Development Commands
```bash
yarn dev            # Start dev server (http://localhost:5173)
yarn build          # Production build (output: dist/)
yarn preview        # Preview the production build locally
yarn test           # Run tests in watch mode
yarn test:run       # Run tests once (used in CI)
yarn test:coverage  # Run tests with coverage report
yarn lint           # ESLint check (zero warnings policy)
yarn format         # Prettier format all src files
yarn format:check   # Prettier check (used in CI)
```

## Deployment
- Push to `main` → GitHub Actions runs tests → builds → deploys to GitHub Pages
- Custom domain `kcmillares.com` is set via `public/CNAME`
- GoDaddy DNS: point `A` records to GitHub Pages IPs and add `CNAME` for `www`

## Agent Workflow
Five specialist agents collaborate on every feature. Invoke them via slash commands:

| Command | Role | Trigger |
|---------|------|---------|
| `/ui-ux-designer` | Defines visual design, responsive layouts, color, typography, motion | Start here — before architecture |
| `/architect` | Designs components, routing, and interfaces from the Design Spec | After design is approved |
| `/frontend-dev` | Implements the architect's spec | After architecture is defined |
| `/tester` | Runs tests, adds missing coverage | After implementation |
| `/code-quality` | Enforces enterprise standards | After tests pass |
| `/build-feature` | **Orchestrates all five agents end-to-end** | One command for full feature delivery |

### Quality Gates
- Zero TypeScript errors
- Zero ESLint warnings
- All tests pass
- No component exceeds 200 lines
- No code duplication without justification
