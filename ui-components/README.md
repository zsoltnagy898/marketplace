# App Marketplace UI components

[Vue.js](https://vuejs.org/) UI component library for Vodafone App Marketplace, largely based on the [WS2 Framework](https://github.com/dd-vodafone-group/vodafone-ws2).

## Usage

At present, this component library is packaged without base WS2 framework styles and fonts. The WS2 framework will need to be included separately in the parent project.

To compile, parent projects will need an equivalent Webpack 4 build environment with [Vue Loader](https://vue-loader.vuejs.org/guide/#manual-setup).

Usage documentation and examples can be explored in Storybook as below.

## Development

View all components hosted in [Storybook](https://storybook.js.org):

    yarn run storybook

### Warnings on install/when adding packages

Note that a current Yarn bug ([4743](https://github.com/yarnpkg/yarn/issues/4743)) where `peerDependencies` aren't being interpreted correctly with workspaces may mean warnings of the format `warning <package> has unmet peer dependency <package>` appear when modifying packages in this workspace. For the most part, these should be ignored.
