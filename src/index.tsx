import { ChakraProvider, theme, Center, extendTheme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as serviceWorker from "./serviceWorker"
import { QRCodeGenerator } from "./ui/QRCodeGenerator"

const App = () => (
  <ChakraProvider theme={theme}>
    <Center m='4rem'>
      <QRCodeGenerator />
    </Center>
  </ChakraProvider>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register()