import { Checkbox } from './Checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export {};

export default {
  title: 'Form/Checbox',
  component: Checkbox,
  // default args

  // in case controls not working
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const ChecboxA = Template.bind({});
