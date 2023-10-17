import { useMemo, useState } from "react";

function App() {
  const [cont, setCont] = useState(0);
  const [page, setPage] = useState(0);

  const handleClick = () => {
    const newCont = cont + 1;
    setCont(newCont);
    console.log(newCont);
    if (newCont == 5 || newCont == 10) {
      setPage(page + 1);
    }
  };

  const calculatedTime = useMemo(() => {
    const newTime = new Date();
    return newTime;
  }, [page]);

  return (
    <>
      <div className="h-56 w-full">
        <button onClick={handleClick}>Now</button>
        <div className="flex flex-col">
          <span>{cont}</span>
          <span>Time: {calculatedTime.toString()}</span>
        </div>
        <label htmlFor="username">Click me</label>
        <input type="text" id="username"></input>
      </div>
    </>
  );
}

export default App;
