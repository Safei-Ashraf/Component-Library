import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PollTab } from './PollTab';

export default {
  title: 'Form/PollTab',
  component: PollTab,

  // in case controls not working
  argTypes: {
    type: { control: 'radio', options: ['img', 'poll', 'file'] },
    text: { control: 'text' },
  },
} as ComponentMeta<typeof PollTab>;

// arg in story book
const Template: ComponentStory<typeof PollTab> = (args) => (
  <PollTab {...args} />
);

export const PollTabA = Template.bind({});
