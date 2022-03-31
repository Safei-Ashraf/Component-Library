import './Toggle.css';

interface ToggleProps {
  sizeSetting: string;
  disabled?: boolean;
  on?: boolean;
  onclick?: () => void;
}

export const Toggle = ({
  sizeSetting,
  disabled,
  on,
  onclick,
}: ToggleProps): JSX.Element => {
  let size = '0.666';
  if (sizeSetting !== 'sm') {
    size = '1';
  }

  return (
    <div style={{ transform: `scale(${size})` }}>
      <label className="switch">
        <input
          type="checkbox"
          disabled={disabled}
          checked={on}
          onClick={onclick}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
