import React from 'react';
import type { Preview } from '@storybook/react';
import './app/globals.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Sections', 'UI'],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
