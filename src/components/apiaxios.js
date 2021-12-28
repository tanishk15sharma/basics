import React, { useState } from "react";
import axios from "axios";

const AxiosHandler = () => {
  const [state, setstate] = useState("");
  const url = "https://quick-access-api.desaihetav.repl.co/";

  const getApi = () => {
    axios.get(url).then((response) => {
      console.log(response);
      setstate(response.data);
    });
  };

  return (
    <div>
      axios
      <button onClick={getApi}>get api</button>
      {state.message}
    </div>
  );
};

export default AxiosHandler;
