import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src/'),
          '@assets': `${path.resolve(__dirname, '../src/assets/')}`,
          '@components': `${path.resolve(__dirname, '../src/components/')}`,
          '@constants': `${path.resolve(__dirname, '../src/constants/')}`,
          '@layouts': `${path.resolve(__dirname, '../src/layouts/')}`,
          '@types': `${path.resolve(__dirname, '../src/types/')}`,
          '@utils': `${path.resolve(__dirname, '../src/utils/')}`,
          '@pages': `${path.resolve(__dirname, '../src/pages/')}`,
          '@hooks': `${path.resolve(__dirname, '../src/hooks/')}`
        }
      }
    })
  }
}
export default config
