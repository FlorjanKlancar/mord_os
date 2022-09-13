import React from "react";

type OpenButtonProps = {
  buttonTitle: string;
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
};

function OpenButton({ buttonTitle, isShown, setIsShown }: OpenButtonProps) {
  return (
    <button
      className="px-8 py-3 bg-slate-900 rounded-xl hover:bg-slate-900/70"
      onClick={() => setIsShown(!isShown)}
    >
      {buttonTitle}
    </button>
  );
}

export default OpenButton;
