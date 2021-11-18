import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useRef, useState } from 'react';

function App() {


  const User = useSelector(store => store.User);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);

  const inputValue = useRef();


  function remove(index) {

    let newUser = [...User];

    newUser.splice(index, 1);

    dispatch({ type: "set", payload: newUser });

  }


  function add() {

    if (editMode !== null) {

      let newUser = [...User];

      newUser.splice(editMode, 1, inputValue.current.value);

      dispatch({ type: "set", payload: newUser });

      setEditMode(null);
      inputValue.current.value = "";
    }

    else {
      let newUser = [...User];
      newUser.push(inputValue.current.value);

      dispatch({ type: "set", payload: newUser });

      inputValue.current.value = "";
    }

  }


  function edit(index) {

    inputValue.current.value = User[index];

    setEditMode(index);

  }


  return (
    <div>
      <input ref={inputValue} type="text" placeholder="name" />
      <br />
      <br />
      <button onClick={add}>change</button>

      <hr />

      {

        User.map((item, index) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{item}</h3>
            <button onClick={() => remove(index)} style={{ height: "35px", marginLeft: "10px" }}>remove</button>
            <button onClick={() => edit(index)} style={{ height: "35px", marginLeft: "10px" }}>update</button>
          </div>
        ))

      }

    </div>
  );
}

export default App;
