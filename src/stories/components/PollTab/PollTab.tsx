import './PollTab.css';
import { ImageIcon } from './Icons/ImageIcon';
import { FileIcon } from './Icons/FileIcon';
import { PollIcon } from './Icons/PollIcon';

interface PollTabProps {
  type?: string;
  text: string;
}

export const PollTab = ({ type, text }: PollTabProps) => {
  let source;
  if (!text) {
    text = 'Default Poll';
  }

  if (type === 'img') {
    source = <ImageIcon />;
  } else if (type === 'poll') {
    source = <PollIcon />;
  } else {
    source = <FileIcon />;
  }
  return (
    <button
      className="group text-sm relative flex items-center justify-around px-3.5 py-1.5 h-8 border border-grey border-opacity-0 bg-grey-shd7  hover:bg-white hover:border-opacity-100  rounded-full focus:outline-none transition duration-500 ease-in-out"
      style={{ paddingRight: '12px', marginRight: '18px' }}
    >
      <label
        className="cursor-pointer relative flex items-center justify-items-center content-center"
        htmlFor="poll-option"
      >
        <input
          type="radio"
          name="poll-option"
          className="bg-primary opacity-0"
          style={{ zIndex: 3 }}
        />
        <span className="checkmark h-4 w-4 rounded-full border border-primary  bg-white text-transparent absolute left-0 top-1 mr-2 hover:bg-grey-shd4 transition duration-500 ease-in-out">
          {' '}
        </span>
        <span className="ml-2 scale-50">{source}</span>
        <span className="ml-2 text-sm font-medium">{text}</span>
      </label>
    </button>
  );
};
