import { useState } from "react";

const useInputLocation = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState([]);

  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const onChangeHandler = async (e) => {
    setValue(e.target.value);

    try {
      const geocodingEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${token}&autocomplete=true`;
      const response = await fetch(geocodingEndpoint);
      const responseJson = await response.json();
      setSuggestions(responseJson.features);
    } catch (error) {
      console.log("Something was wrong!", error);
    }
  };

  return {
    value,
    onChangeHandler,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default useInputLocation;
