import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PostOptions } from './PostOptions';

export default {
  title: 'Post/PostOptions',
  component: PostOptions,
} as ComponentMeta<typeof PostOptions>;

// arg in story book
const Template: ComponentStory<typeof PostOptions> = () => <PostOptions />;

export const PostOptionsA = Template.bind({});
