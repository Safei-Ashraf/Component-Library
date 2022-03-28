import { CorrectIcon } from '../../Icons/CorrectIcon';
import { WrongIcon } from '../../Icons/WrongIcon';
import { HomeIcon } from '../../Icons/HomeIcons';

interface StaticInputProps {
  status: string;
  disabled: boolean;
  icon: string;
  prefix: string;
  direction: string;
  placeholder: string;
}

export const StaticInput = ({
  status,
  disabled,
  icon,
  prefix,
  direction,
  placeholder,
}: StaticInputProps) => {
  let statusStyle, iconDisplay;
  if (status === 'error') {
    statusStyle = 'border-error border';
    iconDisplay = <WrongIcon />;
  }
  if (status === 'normal') {
    statusStyle = 'border-dark border border-opacity-25';
    iconDisplay = '';
  } else if (status === 'success') {
    statusStyle = 'border-success border';
    iconDisplay = <CorrectIcon />;
  }
  let opacity = disabled ? 'opacity-50' : '';
  let disablCheck = disabled ? 'none' : '';
  //const homeDisplay = <HomeIcon className="pl-1 pr-1 pt-2.5 inline-block" />;
  const homeDisplay = icon === 'home' ? <HomeIcon /> : '';
  if (prefix !== 'none') {
    return (
      <>
        <div
          style={{
            pointerEvents: `${disablCheck}`,
          }}
          className={`${statusStyle} rounded-md  w-64 flex ${direction} items-start content-center px-1 ${opacity} bg-white label-container hover:border-grey-shd1 focus-within:border-opacity-100 `}
        >
          <div className="pl-1 pr-1 pt-2.5 inline-block">{homeDisplay}</div>
          <div className="inline-block">
            <span className="text-sm text-grey border-r-2 border-grey-shd6 pr-1.5">
              {prefix}
            </span>
            <input
              placeholder={placeholder}
              style={{ width: '80%' }}
              className="px-1.5 py-1 outline-none inline-block"
              type="search"
              disabled={disabled}
            ></input>
          </div>
          <div className="pt-2.5 pr-1 mr-3">{iconDisplay}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            pointerEvents: `${disablCheck}`,
          }}
          className={`${statusStyle} rounded-md  w-64 flex ${direction} items-start content-center px-1 ${opacity} bg-white label-container hover:border-grey-shd1 focus-within:border-opacity-100 `}
        >
          <div className="pl-1 pr-1 pt-2.5 inline-block">{homeDisplay}</div>
          <div className="inline-block">
            <input
              placeholder={placeholder}
              style={{ width: '80%' }}
              className="px-1.5 py-1 outline-none inline-block"
              type="search"
              disabled={disabled}
            ></input>
          </div>
          <div className="pt-2.5 pr-1 mr-3">{iconDisplay}</div>
        </div>
      </>
    );
  }
};
