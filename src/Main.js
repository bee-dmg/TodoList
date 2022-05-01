import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import uuidv4 from "react-uuid";
export default function Main() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();
  const [editValue, setEditValue] = useState();

  function addToList() {
    const updatedListArray = [
      ...list,
      {
        task: input,
        key: uuidv4(),
      },
    ];
    setList(updatedListArray);
    console.log(list);
  }

  function removeFromList(item) {
    const updatedArray = list.filter((piece) => {
      return piece.key !== item;
    });
    setList(updatedArray);
  }

  function updateList(item) {
    const updatedArray = list.filter((piece) => {
      return piece.key !== item;
    });

    setList([
      ...updatedArray,
      {
        task: editValue,
        key: item,
      },
    ]);
    setEdit("");
  }
  return (
    <div>
        <h1>Todo List</h1>
      <Input onChange={(event) => setInput(event.target.value)} />
      <Button onClick={addToList}>Add to List</Button>

      {list.map((item) => {
        return (
          <div>
            {edit === item.key ? (
              <div>
                <Input onChange={(event) => setEditValue(event.target.value)}>
                  {item.task}
                </Input>{" "}
                <Button onClick={() => updateList(item.key)}>Done</Button>
              </div>
            ) : (
              <div>{item.task}</div>
            )}
            <Button onClick={() => setEdit(item.key)}>Edit</Button>
            <Button onClick={() => removeFromList(item.key)}>Delete</Button>
          </div>
        );
      })}
    </div>
  );
}
