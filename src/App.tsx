
import { useEffect, useState } from "react";
import api from "./api";

import { Container, Divlist, H1, Button, Input, ListItem, Check, Trash } from "./styles";

function App() {
  
  const [inputValue, setInputValue] = useState([]) 
  const [listInput, setListInput] = useState('')

   async function upTask() {
    const response = await api.get('/lists')
    
    setInputValue(response.data)
  }

  function inputChanged(event: any) {
    setListInput(event.target.value) 
  }
  
  async function clickButton() {
    listInput.length === 0 ? alert('Digite um item!') :
    await api.post('/lists', { task:listInput}) 

    upTask()
    setListInput('')
  }

  async function finisheTask(id: string, finished: boolean) {
    await api.patch(`/lists/${id}`, { finished: !finished })
    console.log(finished)
    upTask()
  }

  async function clearTask(id: string) {
    await api.delete(`/lists/${id}`)
    upTask()
  }

  useEffect(() => {
    upTask()
  }, [])
  
  return (
    <Container>
      <Divlist>
      <H1>Lista de Compras </H1>
      <Input onChange={inputChanged} type="text" placeholder="Digite um item" value={listInput}/>
      <Button onClick={clickButton}>Adicionar</Button>

      <ul>
        {
          inputValue.length === 0 ? <p>Lista vazia!</p> :
          inputValue.map((item: { finished: boolean, _id: string, task: string }) => (
          <ListItem $isFinished={item.finished} key={item._id}>
            <Check onClick={() => finisheTask(item._id, item.finished )}/>  
              <li>{item.task}</li>
            <Trash onClick={() => clearTask(item._id)}/>
          </ListItem>
          ))        }
      </ul>
      </Divlist>
    </Container>
  )
}

export default App;
