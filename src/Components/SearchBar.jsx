import { useEffect, useRef } from "react";

const SearchBar = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) {
        return;
      }
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);
    inputEl.current.focus();

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  useEffect(() => {});

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default SearchBar;
