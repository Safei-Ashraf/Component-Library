import { PostingBar } from './PostingBar';

export default {
  title: 'Post/PostingBar',
  component: PostingBar,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ disabled }: any) => <PostingBar disabled={disabled} />;
export const _PostingBar = Template.bind({});
