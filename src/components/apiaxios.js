import React, { useState } from "react";
import axios from "axios";

const AxiosHandler = () => {
  const [state, setstate] = useState([]);
  //   const url = "https://quick-access-api.desaihetav.repl.co/";
  const url = "https://mock-practice.prakhar10v.repl.co/items";

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
      <br></br>
      <ul>
        {state.map((item) => (
          <li>
            {item.id} {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosHandler;
