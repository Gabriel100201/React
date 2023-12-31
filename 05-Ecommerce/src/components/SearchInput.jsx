import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
import { FiltersContext } from "../context/filters";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { updateFilters } = useContext(FiltersContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateFilters("word", inputValue);
    if (window.location.pathname == "/all") return;
    navigate("/all");
  };

  const handleChange = (ev) => {
    const word = ev.target.value;
    setInputValue(word);
  };

  return (
    <div>
      <div className="flex h-9 place-content-center opacity-90 hover:opacity-100">
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            value={inputValue}
            onChange={handleChange}
            placeholder="Buscar en BallShopp"
            className="h-full w-full rounded-bl-xl rounded-tl-xl border-none bg-primary-200/70 px-5 text-primary-800 outline-none"
            type="text"
            size={28}
          />
          <button
            className="h-full rounded-br-xl rounded-tr-xl bg-primary-800 px-3"
            type="text"
          >
            <BsSearch className="font-semibold text-primary-50" />
          </button>
        </form>
      </div>
    </div>
  );
};
