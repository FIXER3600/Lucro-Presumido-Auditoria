import { Home } from "./pages/Home"
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStorage } from "./context"
function App() {


  return (
    <ChakraProvider>
    <GlobalStorage>
      <Home/>
      </GlobalStorage>
    </ChakraProvider>
  )
}

export default App
