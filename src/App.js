import { useState } from "react"
const App = () => {
  const [name, setName] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const addItem = () =>{
    let copyTodoItem = [...todoItem, name];
    setTodoItem(copyTodoItem);
    setName("")
  }
  const deleteItem = (index) =>{
    let copyTodoItem = [...todoItem]
    copyTodoItem.splice(index ,1);
    setTodoItem(copyTodoItem);
  }
  const updateItem = (e,i) =>{
    let copyTodoItem = [...todoItem]
    copyTodoItem.splice(i,1,e.target.value);
    setTodoItem(copyTodoItem);
  }
  return (
    <>
      <h3>Todo List </h3>
      <input type="text" placeholder="Enter item name " value= {name} onChange = {(e)=>setName(e.target.value)} />
      <button onClick={addItem}>Add item </button>
      <br /><br />
      <ol>
        {
          todoItem.map((item,i)=>(
            <div>
              <span key={i}> {i + 1} {item} </span>
              <button onClick={()=>deleteItem(i)}>delete</button>
              <input type="text" placeholder="update item" onChange={(e)=>updateItem(e,i)} />
            </div>
          ))
        }
      </ol>
    </>
  )
}

export default App