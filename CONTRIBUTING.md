# Contributing

Contributions are always welcome, no matter how large or small!

## Development Utilities

This Turborepo has some additional tools already setup for you:

- 📘 [TypeScript](https://www.typescriptlang.org/) for static type checking
- 📏 [ESLint](https://eslint.org/) for code linting
- ✨ [Prettier](https://prettier.io) for code formatting
- 🧪 [Jest](https://jestjs.io/) for unit and integration testing
- 🥊 [Lefthook](https://github.com/evilmartians/lefthook) for managing Git hooks
- 📜 [commitlint](https://commitlint.js.org/) for ensuring commit messages meet the conventional commit format
- 🤖 [GitHub Actions](https://github.com/features/actions) for continuous integration and deployment workflows

Our pre-commit hooks verify that the linter and tests pass when committing.

## Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.
- `ci`: Continuous Integration changes, e.g. tweak GitHub Actions workflow.

Our pre-commit hooks verify that your commit message matches this format when committing. (see [Lefthook](https://github.com/evilmartians/lefthook) and [commitlint](https://commitlint.js.org))

```sh
type(scope?): subject  # scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

## Publishing

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```sh
pnpm release
```
