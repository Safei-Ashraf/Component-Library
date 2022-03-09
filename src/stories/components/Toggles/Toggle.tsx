interface ToggleProps {
  variant: string;
}

const classes = {
  toggleButton: `relative`,
};

function Toggle({ variant }: ToggleProps) {
  return (
    <form>
      <input
        type="checkbox"
        name="toggle"
        id="toggle-button"
        className="toggle-button"
      />
    </form>
  );
}

export default Toggle;
