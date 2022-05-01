import React, { useState } from "react";
import {
  Input,
  Button,
  CardBody,
  Card,
  CardTitle,
  FormGroup,
  InputGroup,

  InputGroupText,
} from "reactstrap";
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
    setEditValue("");
  }
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div style={{ marginBottom: "13px" }}>
        <Input onChange={(event) => setInput(event.target.value)} />{" "}
      </div>
      <div style={{ marginBottom: "13px" }}>
        <Button color="primary" onClick={addToList}>
          Add to List
        </Button>
      </div>

      {list.map((item) => {
        return (
          <div>
            <Card
              style={{ marginBottom: "13px" }}
              body
              color="secondary"
              outline
            >
              <CardBody>
                <FormGroup>
                  {edit === item.key ? (
                    <div>
                      <InputGroup>
                        <Input
                          type="text"
                          defaultValue={item.task}
                          onChange={(event) => setEditValue(event.target.value)}
                         
                        />

                
                  

                        <Button
                          color="primary"
                          onClick={() => updateList(item.key)}
                        >
                          Done
                        </Button>
                      </InputGroup>
                    </div>
                  ) : (
                      <div>
                    <CardTitle tag="h5">
                      <div>{item.task}</div>
                    </CardTitle>
                    <Button color="primary" onClick={() => setEdit(item.key)}>
                    Edit
                    
                  </Button>
                  <Button onClick={() => removeFromList(item.key)}>
                    Delete
                  </Button>
                  </div>
                  )}
                  
                
                </FormGroup>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
