interface ButtonProps {
  variant: string;
  size: string;
  disable: boolean;
  children?: string;
}

const classes = {
  button({ variant, size, disable }: ButtonProps): string | undefined {
    const ButtonDisable = disable ? "opacity-50 cursor-not-allowed" : "";
    const Button = `rounded-xl border-solid border-2 font-sans font-normal transition delay-250 ease-linear ${ButtonDisable}`;
    const PrimaryVariant = `${Button} text-white hover:bg-primary-dark`;
    const SecondaryVariant = `${Button} text-primary hover:bg-secondary`;
    const LargeSize = `text-md px-8 py-3.5 font-bold`;
    const MediumSize = `text-base px-6 py-2.5`;
    const SmallSize = `text-sm px-4 py-1.5`;

    switch (size) {
      case "medium":
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${MediumSize}`;
        }
        if (variant === "secondary") {
          return `bg-${variant} ${SecondaryVariant} ${MediumSize}`;
        }
        break;

      case "small":
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${SmallSize}`;
        }
        if (variant === "secondary") {
          return `bg-${variant} ${SecondaryVariant} ${SmallSize}`;
        }
        break;

      default:
        if (variant === "primary") {
          return `bg-${variant} ${PrimaryVariant} ${LargeSize}`;
        }
        if (variant === "secondary") {
          return `bg-${variant} ${SecondaryVariant} ${LargeSize}`;
        }
        break;
    }

    return "";
  },
};

function Buttons({ variant, size, disable, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={classes.button({ variant, size, disable })}
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
}

export default Buttons;
