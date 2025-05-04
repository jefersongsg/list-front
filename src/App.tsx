import { v4 as uuid } from "uuid";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdRemoveShoppingCart } from "react-icons/md";

import { Container, Divlist, H1, Button, Input, ListItem } from "./styles";

function App() {
  // const list , setList = useState([])
  const [inputValue, setInputValue] = useState([{id:uuid(),task:''}]) 
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
    <Container>
      <Divlist>
      <H1>Lista de Compras </H1>
      <Input onChange={inputChanged} type="text" placeholder="Digite um item" />
      <Button onClick={clickButton}>Adicionar</Button>

      <ul>
        {
          inputValue.map((item) => (
          <ListItem>
            <BsCartCheck size={20} color="#2E7D32"/>  
              <li key={item.id}>{item.task}</li>
            <MdRemoveShoppingCart size={20} color="#fff"/>
          </ListItem>
          ))
        }
      </ul>
      </Divlist>
    </Container>
  )
}

export default App
