import { GeneralTextInput } from './GeneralTextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Form/GeneralTextInput',
  component: GeneralTextInput,
} as ComponentMeta<typeof GeneralTextInput>;

export const Small: ComponentStory<typeof GeneralTextInput> = () => (
  <GeneralTextInput onChange={console.log('changed')} />
);

// renaming of stories
const Template = (args: any) => <GeneralTextInput {...args} />;
export const GeneralInput = Template.bind({});
