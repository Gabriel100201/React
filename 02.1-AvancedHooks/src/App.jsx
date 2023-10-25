import { useContext, useState } from "react";
import { ColorContext } from "./context/color";
import { Header } from "./components/Header";

function App() {
  const { color, changeColorBlue } = useContext(ColorContext);

  const handleClickPrimary = () => {
    changeColorBlue();
  };

  const handleClickSecondary = () => {
    changeColorBlue();
  };

  return (
    <>
      <div className="flex justify-center p-32">
        <div
          className={`${color} flex h-[500px] w-[90%] flex-col items-center gap-5 p-5`}
        >
          <span className="w-full text-center">App</span>
          <Header></Header>
          <button
            onClick={handleClickPrimary}
            className="min-w-32 rounded-lg bg-sky-100 p-3"
          >
            Change Primary
          </button>
          <button
            onClick={handleClickSecondary}
            className="min-w-32 rounded-lg bg-sky-100 p-3"
          >
            Change Secondary
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
