import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BASE_URL from './services/BaseURL';
import AppBarLogin from './components/AppBarLogin';
import Box from '@mui/material/Box';
import Dog from './Assets/dog-pexels.webp';
import Dog2 from './Assets/Dog-2.jpeg';
import { Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function App() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, setCreateUser] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

   function handleSubmit (event) { 
    setLoading(true)
    event.preventDefault()
    fetch(`${BASE_URL}jwt-auth/v1/token`, {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({username: user, password: password})})
    .then((response) => response.json())
    .then((data) => {
      data.data.status === 403 ? setError(true) : setToken(data.token)})
    .finally(()=>{
      setLoading(false)
    })}

    function createNewUser (event) {
      setLoading(true)
      event.preventDefault()
      fetch(`${BASE_URL}/api/user`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          username: createUser,
          password: createPassword,
          email: createEmail,
        },
      })
    }

  return (
    <>
      <AppBarLogin label="Login/Criar"/>
      <Box sx={{display:"grid",p:3 ,gridTemplateColumns: "auto auto auto ", backgroundColor:"#fffbb7"}}>
        <Box>
          <img src={Dog} alt="Dog" style={{width:"300px", borderRadius: "40px 40px 0 0", margin:"1rem"}}/> 
          <img src={Dog2} alt="Dog2" style={{width:"320px", borderRadius: "40px 40px 0 0"}}/>
        </Box>
        <Stack sx={{display:"flex", flexDirection: "column", alignItems:"flex-end"}}>
        <form onSubmit={handleSubmit}>
        <Typography variant="h5" sx={{color:"#5b7c8d"}}>Faça Login</Typography>
          <Typography variant="subtitle2" sx={{color:"#5b7c8d"}}>Usuário</Typography>
          <TextField error={!!error} helperText={!!error && "Usuário Incorreto"} variant="outlined" sx={{mt:1}} type="text" value={user} onChange={(e)=> setUser(e.target.value)} />
          <Typography variant="subtitle2" sx={{mt:2, color:"#5b7c8d"}}>Senha</Typography>
          <TextField variant='outlined' sx={{mt:1}} type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <br/>

        {/* {error && <span>Usuário ou Senha Incorretos!</span>} */}

        {!loading &&
          <Button 
            sx={{mt:3, width:"14rem", backgroundColor:"#5b7c8d", color:"#FFF", fontWeight:"600"}} 
            variant="contained" 
            onClick={handleSubmit}>
            Entrar
          </Button>
        }
        {loading &&
        <Button 
          sx={{mt:3, width:"14rem", backgroundColor:"#5b7c8d", color:"#FFF", fontWeight:"600"}} 
          variant="disabled">
          Carregando...
        </Button>
        }
        </form>
        <form>
        <Stack>
        <Typography variant="h6" sx={{mt:2, color:"#5b7c8d"}}>Não possui cadastro?</Typography>
          <TextField variant="outlined" placeholder='Nome de Usuário' sx={{mt:1}} type="text" value={createUser} onChange={(e)=> setCreateUser(e.target.value)} />
          <TextField variant="outlined" placeholder='Senha para Acesso' sx={{mt:1}} type="password" value={createPassword} onChange={(e)=> setCreatePassword(e.target.value)} />
          <TextField variant="outlined" placeholder='Email de Usuário' sx={{mt:1}} type="email" value={createEmail} onChange={(e)=> setCreateEmail(e.target.value)} />
        </Stack>
        {!loading &&
          <Button 
            sx={{mt:3, width:"14rem", backgroundColor:"#5b7c8d", color:"#FFF", fontWeight:"600"}} 
            variant="contained" 
            onClick={createNewUser}>
            Cadastrar
          </Button>
        }
        {loading &&
        <Button 
          sx={{mt:3, width:"14rem", backgroundColor:"#5b7c8d", color:"#FFF", fontWeight:"600"}} 
          variant="disabled">
          Carregando...
        </Button>
        }
        </form>
        </Stack>
      </Box>
    </>
  );
}

export default App;
