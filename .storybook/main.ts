import type { StorybookConfig } from '@storybook/nextjs';
import remarkGfm from 'remark-gfm';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.docs.@(md|mdx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  staticDirs: ['../public', '../assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromaui/addon-visual-tests',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  webpackFinal: async (config) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.(js|jsx|ts|tsx)$/i,
    });

    config.resolve!.alias! = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src/'),
    };

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  managerHead: (head) => `
    ${head}
    <title>Design System | Netz</title>
    <meta name='description' content='This is a Design System that belongs to the Netz company.'>
    <link rel="icon" type="image/svg+xml" href="./favicon.jpg">
  `,
};
export default config;
