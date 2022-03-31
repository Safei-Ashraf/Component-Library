import '../src/styles/tailwind.css';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

// this will provide us where is log statment from
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  //   sorting stories aphabetically
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
