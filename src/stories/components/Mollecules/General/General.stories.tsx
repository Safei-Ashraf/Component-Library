import { ComponentMeta, ComponentStory } from '@storybook/react';
import { General } from './General';

export default {
  title: 'Post/General',
  component: General,

  // in case controls not working
  argTypes: {
    avatarSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    avatarType: {
      options: ['anon', 'user', 'default'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof General>;

// arg in story book
const Template: ComponentStory<typeof General> = (args) => (
  <General {...args} />
);

export const GeneralA = Template.bind({});
