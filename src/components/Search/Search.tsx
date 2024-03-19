import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../UI/Input/Input";
import { SearchDropDown } from "./SearchDropDown/SearchDropDown";
import { MoviesSearchList } from "./MoviesSearchList/MoviesSearchList";

export const Search = () => {
  const { value, handlerChange, handlerClear } = useInput("");
  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const closeDropDown = () => {
    setIsShowDropDown(false);
    handlerClear();
  };

  const openDropDown = () => {
    setIsShowDropDown(true);
  };

  return (
    <>
      <Input value={value} onChange={handlerChange} onFocus={openDropDown} />
      {isShowDropDown && (
          <>
            <SearchDropDown close={closeDropDown}>
              <MoviesSearchList search={value} />
            </SearchDropDown>
          </>
      )}
    </>
  );
};
