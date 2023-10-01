// react
import { FC } from "react";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  textarea,
}) => {
  // Render input element
  const renderInputElement = () => (
    <input
      type="text"
      id={placeholderText}
      autoComplete="off"
      className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textsecondary outline-none resize-none border-[1px] border-transparent focus:border-hoversecondary"
    />
  );

  // Render textarea element
  const renderTextareaElement = () => (
    <textarea
      id={placeholderText}
      rows={9}
      placeholder="Message"
      className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textsecondary outline-none resize-none border-[1px] border-transparent focus:border-hoversecondary"
    ></textarea>
  );

  return (
    <div className="flex flex-row gap-2.5 flex-1 w-full">
      {/* Label */}
      <label
        htmlFor={placeholderText}
        className="text-textPrimary text-base sm:text-lg font-bold"
      >
        {labelText}
      </label>

      {/* Input/Textarea */}
      {textarea ? renderTextareaElement() : renderInputElement()}
    </div>
  );
};

export default LabelInput;
