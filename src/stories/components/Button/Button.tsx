import "./ButtonStyle.css";

interface ButtonProps {
  varient: string;
  disable: boolean;
  children: string;
}

const Button = ({
  varient = "primary",
  children,
  disable,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-primary rounded-lg text-lg border-8"
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
};

export default Button;
