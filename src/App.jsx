import { RecoilRoot } from 'recoil'

import GlobalStyle from './globalStyles'
import Todo from './components/Todo'

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Todo />
    </RecoilRoot>
  )
}

export default App
