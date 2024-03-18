import { FC } from "react";
import "./Input.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}


export const Input: FC <InputProps> = ({value, onChange, onFocus} ) => {
  return (
    <input className="searchInput" 
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          type="text" 
          placeholder="Search"/>
  );
};
