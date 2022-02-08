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
      className={`button ${disable ? "secondary" : varient}`}
      {...rest}
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
}

export default Buttons;
