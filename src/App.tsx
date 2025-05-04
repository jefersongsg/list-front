import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  // const list , setList = useState([])
  const [inputValue, setInputValue] = useState([{id:uuid(),task:'carne'}]) 
  // const [inputtask, setinputtask] = useState('')
  const [listInput, setListInput] = useState('')

  // function inputMudou
  function inputChanged(event: any) {
    setListInput(event.target.value) 
  }
  // function cliquei no botão
  function clickButton() {
    setInputValue([...inputValue, {id:uuid(),task:listInput}])
    console.log(inputValue)
  }

  return (
    <>
      <h1>Lista de Compras </h1>
      <input onChange={inputChanged} type="text" placeholder="Digite um item" />
      <button onClick={clickButton}>Adicionar</button>

      <ul>
        {
          inputValue.map((item) => (
          <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
