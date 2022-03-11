import styled from 'styled-components'

import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'

function AddTodo() {

  const { addTasks } = useTasks()

  const [name, setName] = useState('')

  let submit = () => {
    if(name.length !== 0) {
      addTasks(name)
      setName('')
    }
  }

  return (
    <AddTodoWrapper>
      <Input placeholder='Введите задачу здесь' value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={submit}>Добавить</Button>
    </AddTodoWrapper>
  )
}

const AddTodoWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
`

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #c5c5c5;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  height: 30px;
  flex-grow: 1;
  box-sizing: content-box;
  padding: 1px 10px;
`

const Button = styled.button`
  background-color: #407ca3;
  border: 1px solid #407ca3;
  color: #fff;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
  height: 30px;
  box-sizing: content-box;
  padding: 1px 20px;
`

export default AddTodo
