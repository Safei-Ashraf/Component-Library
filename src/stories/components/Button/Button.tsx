/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import "./Button.css";

export interface ButtonProps {
  type: string;
  size?: string;
  disabled?: boolean;
  text?: string;
  hasIcon?: boolean;
  iconDirection?: string;
  onClick?: () => void;
}

function Button({
  type,
  size,
  disabled,
  text,
  hasIcon,
  iconDirection,
  onClick,
}: ButtonProps): JSX.Element {
  let opacity;
  let _size;
  let _type;
  let iconOrder;
  let marginSetting;
  let iconColor;
  iconOrder = `flex-row`;

  if (!text) {
    text = "Click";
  }

  // size = ['lg', 'md', 'sm]:
  if (size === "lg") _size = "px-xl py-3.5 text-md font-bold ";
  else if (size === "md") _size = "px-l py-xs text-base font-medium";
  else {
    _size = "px-m py-1.5 font-medium text-sm";
  }

  // type = ['primary', 'secondary', 'text']
  if (type === "secondary") {
    _type = "secondary bg-white text-primary border border-primary";
  } else if (type === "text") {
    _type = "text text-accent focus-within";
  } else {
    _type = "primary bg-primary text-white border-2 border-primary";
  }
  // dsiabled?
  if (disabled) {
    opacity = "opacity-25 cursor-not-allowed";
  }
  if (hasIcon) {
    iconOrder = iconDirection === "left" ? "flex-row" : "flex-row-reverse";
    marginSetting = iconDirection === "left" ? "ml" : "mr";
    iconColor =
      type === "text" ? "#00A8E8" : type === "secondary" ? "#7048E8" : "white";
  }

  return hasIcon ? (
    <button
      type="button"
      className={` ${_type} ${_size}   rounded-full hover-state focus:outline-none focus-state flex ${iconOrder} items-center justify-center content-center ${opacity}`}
      disabled={disabled}
    >
      <span className="inline-block font-medium	">{text}</span>
      <span className="inline-block">
        <svg
          className={`h-3 w-3 mt-2.5 ${marginSetting}-4 mt-0`}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.293 0.29303L5.99997 4.58603L1.70697 0.29303L0.292969 1.70703L5.99997 7.41403L11.707 1.70703L10.293 0.29303Z"
            fill={`${iconColor}`}
          />
        </svg>
      </span>
    </button>
  ) : (
    <button
      type="button"
      data-testid="btn-case"
      className={` ${_type} ${_size}   rounded-full hover-state focus:outline-none focus-state flex items-center justify-center content-center ${opacity}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="inline-block font-medium	">{text}</span>
    </button>
  );
}

export default Button;
