interface IAvatar {
  size?: string;
  type?: string;
  source?: string;
}
export const Avatar = ({ size, type, source }: IAvatar): JSX.Element => {
  source =
    type === 'user'
      ? '/avatar.png'
      : type === 'anon'
      ? '/anon.svg'
      : '/default.svg';
  const classes =
    size === 'lg' ? 'h-14 w-14' : size === 'md' ? 'h-10 w-10' : 'h-8 w-8 ';
  return (
    <div className="inline-block">
      <img
        src={source}
        className={`rounded-full ${classes} mt-1`}
        alt={`${type} avatar img`}
      />
    </div>
  );
};
