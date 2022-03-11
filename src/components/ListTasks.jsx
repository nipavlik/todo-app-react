import styled from 'styled-components'

import Task from './Task'
import { useTasks } from '../hooks/useTasks'

function ListTasks() {

  const { tasks } = useTasks()

  if (tasks.length === 0) 
    return <center>Нет задач</center>

  return (
    <ListTasksWrapper>
      
      { tasks.map((task, index) => {
        return <Task name={ task.name } key={ index } id={ task.id } />
      }) }
      
    </ListTasksWrapper>
  )
}

const ListTasksWrapper = styled.div`

`

export default ListTasks
