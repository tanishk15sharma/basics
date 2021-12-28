import React, { useEffect, useState } from "react";

// https://quick-access-api.desaihetav.repl.co/

const Apihandler = () => {
  const [state, setstate] = useState([]);
  const url = "https://mock-practice.prakhar10v.repl.co/items";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setstate(data);
      });
  }, []);

  return <div> {state.map((data) => data.item)} </div>;
};

export default Apihandler;
