# Turborepo starter

[Turborepo](https://turbo.build/repo) is a high-performance system for monorepos, simplifies managing multiple packages shared across web and native environments. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

[![Test](https://github.com/du5rte/turborepo/actions/workflows/test.yml/badge.svg)](https://github.com/du5rte/turborepo/actions/workflows/test.yml)

## What's inside?

This guide explains how to this monorepo powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- ⚡️ [Next.js](https://nextjs.org/) — React framework for high-performance websites
- 📚 [Nextra](https://nextra.vercel.app/) — Next.js static site generator for creating documentation
- 📱 [Expo](https://expo.dev/) — Platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- 📚 [Storybook](https://storybook.js.org/) — Streamlines creating and testing UI components in a sandboxed environment.

### Apps

    .
    ├── ...
    ├── apps
    │   ├── docs            # Documentation site for the project
    │   ├── mobile          # Mobile application built with Expo and React Native
    │   ├── storybook       # Storybook for developing and testing UI components
    │   └── web             # Web single-page application
    └── ...

## Turbo

### Useful Commands

- `pnpm dev` - Previews all apps locally
- `pnpm lint` - Lint all apps and packages
- `pnpm build` - Build all packages
- `pnpm release` - Bumps version, updates changelog and releases
- `pnpm clean` - Clean up all `node_modules` and `dist` folders

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/). See more on [CONTRIBUTING](/CONTRIBUTING.md) on developer tools.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

### Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
