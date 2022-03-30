export const GeneralTextInput = ({ onChange }: any) => {
  return (
    <div className="inline-block w-full" onChange={onChange}>
      <label htmlFor="text-general"></label>
      <input
        placeholder="What do you want to ask about?"
        className="px-xl py-3 rounded-md border  border-grey-shd5 placeholder-grey-shd1 w-full hover:border-grey-shd1  outline-none focus:outline-none h-11 focus:border-dark"
        name="text-general"
        data-testid="text-general"
        type="text"
      />
    </div>
  );
};
