import { useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChangeHandler];
};

export default useInput;
