import Icons from "../../assets/icons";

interface ButtonProps {
  variant: string;
  size: string;
  disable: boolean;
  // eslint-disable-next-line react/require-default-props
  children?: string;
  // eslint-disable-next-line react/require-default-props
  hasIcon?: boolean;
  // eslint-disable-next-line react/require-default-props
  leftIcon?: boolean;
  // eslint-disable-next-line react/require-default-props
  hasText?: boolean;
}

const classes = {
  button({ variant, size, disable, leftIcon, hasText }: ButtonProps): string {
    console.log(hasText);
    const ButtonLeftIcon = leftIcon ? "flex-row-reverse" : "flex-row";
    const ButtonDisable = disable ? "opacity-50 cursor-not-allowed" : "";
    const isText = hasText ? "rounded-full" : "rounded-xl";
    const LargeWidth = hasText ? " w-48 h-14" : "w-14 h-14";
    const MediumWidth = hasText ? "w-36 h-10" : "w-10 h-10";
    const SmallWidth = hasText ? "w-28 h-8" : "w-8 h-8";
    const Button = `${ButtonDisable} flex gap-3 items-center ${ButtonLeftIcon} justify-center ${isText}  border-solid border-2 font-sans font-normal transition delay-250 ease-linear`;
    const TextVariant = `${Button} border-none text-accent`;
    const PrimaryVariant = `${Button} text-white hover:bg-primary-dark`;
    const SecondaryVariant = `${Button} text-primary hover:bg-secondary`;
    const LargeSize = `text-md p-6 font-bold ${LargeWidth}`;
    const MediumSize = `text-base p-4 ${MediumWidth}`;
    const SmallSize = `text-sm p-4 ${SmallWidth}`;

    const ButtonType = {
      large: () => {
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${LargeSize}`;
        }
        if (variant === "secondary") {
          return `bg-white ${SecondaryVariant} ${LargeSize}`;
        }

        if (variant === "text") {
          return `bg-white ${TextVariant} ${LargeSize}`;
        }

        return "";
      },

      medium: () => {
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${MediumSize}`;
        }
        if (variant === "secondary") {
          return `bg-white ${SecondaryVariant} ${MediumSize}`;
        }
        if (variant === "text") {
          return `bg-white ${TextVariant} ${MediumSize}`;
        }

        return "";
      },

      small: () => {
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${SmallSize}`;
        }
        if (variant === "secondary") {
          return `bg-white ${SecondaryVariant} ${SmallSize}`;
        }
        if (variant === "text") {
          return `bg-white ${TextVariant} ${SmallSize}`;
        }

        return "";
      },
    };

    const btn = ButtonType[size];

    return btn();
  },
};

function Buttons({
  variant,
  size,
  disable,
  children,
  leftIcon,
  hasIcon,
  hasText,
}: ButtonProps) {
  return hasIcon ? (
    <button
      type="button"
      className={classes.button({ variant, size, disable, leftIcon, hasText })}
      onClick={() => console.log("clicked")}
    >
      {hasText && children}
      <Icons Variant={variant} />
    </button>
  ) : (
    <button
      type="button"
      className={classes.button({ variant, size, disable, leftIcon, hasText })}
      onClick={() => console.log("clicked")}
    >
      {hasText && children}
    </button>
  );
}

export default Buttons;
