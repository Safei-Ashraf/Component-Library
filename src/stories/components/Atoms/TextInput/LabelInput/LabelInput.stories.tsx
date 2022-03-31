import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LabelInput } from './LabelInput';

export default {
  title: 'Form/LabelInput',
  component: LabelInput,

  // in case controls not working
  argTypes: {
    status: { control: 'radio', options: ['error', 'success', 'other'] },
    placeholder: { control: 'text' },
  },
} as ComponentMeta<typeof LabelInput>;

// arg in story book
const Template: ComponentStory<typeof LabelInput> = (args) => (
  <LabelInput {...args} />
);

export const LabelInputA = Template.bind({});
