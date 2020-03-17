# Vodafone App Marketplace

The Vodafone Cloud for SME App Marketplace project.

## Workspaces

This project consists of multiple applications and subcomponents that are organised as separate packages within this repository using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

#### [landing-pages](./landing-pages)

Static campaign landing pages for use in inbound marketing platforms.

#### [ui-components](./ui-components)

The Vue.js UI component library shared by local packages, based on the WS2 framework.

#### [vodafone-global-storefront-theme](./vodafone-global-storefront-theme)

The branded Vodafone Global theme for AppMarket Storefront.

#### [vodafone-ws2](./vodafone-ws2)

Prebuilt version of the [Vodafone WS2 framework](https://github.com/dd-vodafone-group/vodafone-ws2) shared by local packages.

## Git workflow

This project uses the [Git-Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model.

- `develop` represents the latest stable version of the codebase. A feature branch based on `develop` should be created for new additions to the codebase.
- `master` represents the current production codebase. Merge commits into `master` from `develop` should be tagged with the corresponding release version.

All feature branches should be reviewed and merged via Pull Request. Merge commits should always be used for contributions to `develop` and `master`.

## Development

### Getting started

This repository uses [Git LFS](https://git-lfs.github.com/) to manage large asset files. Please make sure this is installed on your system, in addition to Git.

Install dependencies for each workspace using [Yarn](https://yarnpkg.org/):

    yarn

### Workspace development

Please refer to the README in each workspace for package-specific documentation and usage.

Each workspace in this repository should be considered an isolated package with a public API that is exposed, and then shared between other workspaces. Dependencies should always be required within the `package.json` file of each workspace and not at the root of this repository.

New workspaces can be created by running `yarn init` in this directory. The named workspace should then be added to the `workspaces` list in `package.json` and referenced in this README.
