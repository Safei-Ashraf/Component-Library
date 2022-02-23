/* eslint-disable no-console */
import "./ButtonStyle.css";

interface ButtonProps {
  varient: string;
  disable: boolean;
  children: string;
}

function Buttons({
  varient = "primary",
  children,
  disable,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-primary rounded-lg text-lg border-8"
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
}

export default Buttons;
