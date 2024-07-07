import { join, dirname } from 'path'
import { StorybookConfig } from '@storybook/react-webpack5'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const main: StorybookConfig = {
  stories: [
    '../../../apps/storybook/stories/**/*.mdx',
    '../../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-react-native-web'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
}

export default main
