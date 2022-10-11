import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BASE_URL from './services/BaseURL';
import AppBarLogin from './components/AppBarLogin';

function App() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

   function handleSubmit (event) { 
    event.preventDefault()
    fetch(`${BASE_URL}jwt-auth/v1/token`, {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({username: user, password: password})})
    .then((response) => response.json())
    .then((data) => setToken(data.token))
    }

  return (
    <div className="App">
      <AppBarLogin label="Login/Criar"/>
      <form onSubmit={handleSubmit}>
      <p>Usuário</p>
      <input type="text" value={user} onChange={(e)=> setUser(e.target.value)} />
      <p>Senha</p>
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button>Entrar</button>
      </form>
    </div>
  );
}

export default App;
