import styled from 'styled-components'

import { useTasks } from '../hooks/useTasks'

function Header() {

  const { count } = useTasks()

  return (
    <HeaderWrapper>
      <Title>Задачи ({ count })</Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #dbdbdb;
  padding: 15px;
`

const Title = styled.h1`
  font-size: 20px;
`

export default Header
