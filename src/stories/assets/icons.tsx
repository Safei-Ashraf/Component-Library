interface IconProps {
  Variant: string;
}

function icons({ Variant }: IconProps) {
  return (
    <div className="flex item-center">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.293 0.292999L5.99997 4.586L1.70697 0.292999L0.292969 1.707L5.99997 7.414L11.707 1.707L10.293 0.292999Z"
          fill={
            Variant === "secondary"
              ? "#7048E8"
              : Variant === "primary"
              ? "white"
              : "#00A8E8"
          }
        />
      </svg>
    </div>
  );
}

export default icons;
