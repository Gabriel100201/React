import { useState } from "react";
import { ImgContainer } from "./ImgContainer";

export const InputContainer = () => {
  const [word, setWord] = useState("");

  /*   const handleWord = (ev) => {
    const newWord = ev.target.value;
    if (newWord == " ") return;
    setWord(newWord);
  }; */
  const handleSubmit = () => {
    setWord(word);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex h-32 w-full items-center justify-center bg-slate-900"
      >
        <input className="h-7 w-1/3 rounded-lg px-7 py-5" type="text" />
        <button>LOAD</button>
      </form>
      <ImgContainer word={word}></ImgContainer>
    </>
  );
};
