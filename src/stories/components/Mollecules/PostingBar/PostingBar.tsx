import { PostOptions } from '../PostOptions/PostOptions';
import { Button } from '../../Atoms/Button/Button';

interface postingBarProps {
  disabled: boolean;
}

export const PostingBar = ({ disabled }: postingBarProps) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <PostOptions />
      </div>
      <div>
        <Button disabled={disabled} type="primary" />
      </div>
    </div>
  );
};
