import styled from 'styled-components'

import { useTasks } from '../hooks/useTasks'

function Task({ name, id }) {

  const { deleteTasks } = useTasks()

  return (
    <TaskWrapper>
      <Name>{ name }</Name>
      <Control>
        <Button onClick={ () => deleteTasks(id) } >Удалить</Button>
      </Control>
    </TaskWrapper>
  )
}

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  padding: 10px;
  margin: 2px 0px;
  border-radius: 5px;
`

const Name = styled.div`
`

const Control = styled.div`
`

const Button = styled.button`
  background-color: #ff6565;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  padding: 2px 4px;
  box-sizing: content-box;
  margin-left: 10px;
`

export default Task
