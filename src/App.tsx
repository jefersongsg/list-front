import { v4 as uuid } from "uuid";
import { useState } from "react";

import { Container, Divlist, H1, Button, Input, ListItem, Check, Trash } from "./styles";

function App() {
  // const list , setList = useState([])
  const [inputValue, setInputValue] = useState([{id:uuid(),task:'',finished: true}]) 
  // const [inputtask, setinputtask] = useState('')
  const [listInput, setListInput] = useState('')

  // function inputMudou
  function inputChanged(event: any) {
    setListInput(event.target.value) 
  }
  // function cliquei no botão
  function clickButton() {
     listInput.length === 0 ? alert('Digite um item!') :
    setInputValue([...inputValue, {id:uuid(), task:listInput, finished: false}])
    console.log(listInput)
  }
  function finisheTask(id: string) {
    const newList = inputValue.map((item) => {
      if(item.id === id) {
        return {...item, finished: !item.finished}
      }
      return item
    })
    setInputValue(newList)
  }
  function clearTask(id: string) {
    const newList = inputValue.filter((item) => item.id !== id)
    setInputValue(newList)
  }

  return (
    <Container>
      <Divlist>
      <H1>Lista de Compras </H1>
      <Input onChange={inputChanged} type="text" placeholder="Digite um item"/>
      <Button onClick={clickButton}>Adicionar</Button>

      <ul>
        {
          inputValue.length === 0 ? <p>Lista vazia!</p> :
          inputValue.map((item) => (
          <ListItem isFinished={item.finished} key={item.id}>
            <Check onClick={() => finisheTask(item.id)}/>  
              <li>{item.task}</li>
            <Trash onClick={() => clearTask(item.id)}/>
          </ListItem>
          ))
        }
      </ul>
      </Divlist>
    </Container>
  )
}

export default App
