import { Avatar } from '../../Atoms/Avatar/Avatar';
import { GeneralTextInput } from '../../Atoms/TextInput/GeneralTextInput/GeneralTextInput';

interface GeneralProps {
  avatarType: string;
  avatarSize: string;
}
export const General = ({ avatarType, avatarSize }: GeneralProps) => {
  return (
    <div className="flex flex-row  content-start">
      <div className="inline-block mr-4">
        <Avatar type={avatarType} size={avatarSize}  />
      </div>
      <div className="inline-block mr-4">
        <GeneralTextInput />
      </div>
    </div>
  );
};
