import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const Chat = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await axios.get("https://4qd5e8-5000.csb.app/api/chat");
    console.log(res);
    setData(res.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Chat app</h1>
      <Button>click</Button>
      {data.map((elem) => (
        <div>{elem.name}</div>
      ))}
    </div>
  );
};

export default Chat;
