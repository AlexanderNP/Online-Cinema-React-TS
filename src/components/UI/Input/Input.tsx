import "./Input.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}


export const Input = ({value, onChange, onFocus}: InputProps ) => {
  return (
    <input className="searchInput" 
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          type="text" 
          placeholder="Search"/>
  );
};
