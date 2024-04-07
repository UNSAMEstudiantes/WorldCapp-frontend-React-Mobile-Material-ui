import { Box, createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { WorldCappRouter } from './routes'
import { Provider } from './context/Provider'
import { ProviderOperaciones } from './context/ProviderOperaciones'

function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#000040', // rojo en hexadecimal
      },
      secondary: {
        main: '#c0c0c0', // azul en hexadecimal
      },
    },
  })



  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <ProviderOperaciones>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              minWidth: '100vw'
            }}
          >
            <WorldCappRouter />
          </Box>
        </ProviderOperaciones>
      </Provider>
    </ThemeProvider>
  )
}

export default App
