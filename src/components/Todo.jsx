import styled from 'styled-components'

import Header from './Header'
import AddTodo from './AddTodo'
import ListTasks from './ListTasks'

function Todo() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <AddTodo />
        <ListTasks />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 600px;
`

const Main = styled.main`
  padding: 15px;
`

export default Todo
