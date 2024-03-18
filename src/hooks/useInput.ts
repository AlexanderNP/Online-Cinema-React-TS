import { useState, ChangeEvent} from 'react';

interface IInputHook {
  value: string;
  handlerChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlerClear: () => void;
}

export const useInput = (initialValue: string): IInputHook => {
  const [value, setValue] = useState<string>(initialValue);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlerClear = () => {
    setValue('');
  }

  return { value, handlerChange, handlerClear };
};