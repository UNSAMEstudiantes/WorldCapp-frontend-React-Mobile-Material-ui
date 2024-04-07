import { useState } from 'react'
import { TextField, Button, Typography, Container, Box, InputAdornment, InputLabel, Alert } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'
import usuarioService from '../services/usuarioService'
import { useNavigate } from "react-router-dom"
import { Footer } from 'src/components/footer/Footer'


const LoginView = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const iniciarSesion = async () => {
    try {
      if (!username || !password) {
        setError('Por favor, complete todos los campos')
        return
      }
      const usuarioId = await usuarioService.validarUsuario(username, password)
      console.log('Inicio de sesión exitoso. ID de usuario:', usuarioId)
      localStorage.setItem('usuId', usuarioId.toString())
      navigate('/home')
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message)
      setError('Error al iniciar sesión. Por favor, verifica tus datos.')
    }
  }

  return (
    <Container maxWidth="xs" className='main'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          WorldApp
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            iniciarSesion()
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <InputLabel htmlFor="username" sx={{ alignSelf: 'flex-start' }}>
            Usuario
          </InputLabel>
          <TextField
            variant="outlined"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ,
            }}
            sx={{ width: '100%' }}
          />
          <InputLabel htmlFor="password" sx={{ alignSelf: 'flex-start' }}>
            Contraseña
          </InputLabel>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ,
            }}
            sx={{ width: '100%' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>


        </form>
        {error && <Alert severity="error" style={{ position: 'absolute', bottom: '60px' }}> {error}</Alert>
        }

      <Footer />
      </Box>

    </Container>


  )
}

export default LoginView
