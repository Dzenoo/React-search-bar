import { useState, useRef } from "react";
import ListItem from "./ListItem";

import "./List.css";

const List = () => {
  const [listData, setlistData] = useState([
    {
      id: 1,
      title: "Computer",
    },
    {
      id: 2,
      title: "Keyboard",
    },
    {
      id: 3,
      title: "Programming",
    },
  ]);
  const [inputVal, setinputVal] = useState("");
  const enteredInput = useRef();

  const searchListHandler = () => {
    const enteredInputValue = enteredInput.current.value;
    setinputVal(enteredInputValue);
  };

  return (
    <>
      <input
        className="input"
        type="text"
        ref={enteredInput}
        onChange={searchListHandler}
      />
      <ul className="list">
        {listData
          .filter((item) => item.title.toLowerCase().startsWith(inputVal))
          .map((item) => (
            <ListItem key={item.id} title={item.title} />
          ))}
      </ul>
    </>
  );
};

export default List;
