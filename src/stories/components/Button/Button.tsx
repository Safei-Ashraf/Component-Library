import "./ButtonStyle.css";

interface ButtonProps {
  varient: string;
  children: string;
}

function Buttons({ varient = "primary", children, ...rest }: ButtonProps) {
  return (
    <button className={`button ${varient}`} {...rest}>
      {children}
    </button>
  );
}

export default Buttons;
