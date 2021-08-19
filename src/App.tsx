import styled from 'styled-components'
import FileScreen from './components/FileScreen'

const AppContainer = styled.div`
  height: 100vh;
`
function App() {
  return (
    <AppContainer>
      <FileScreen />
    </AppContainer>
  )
}

export default App
