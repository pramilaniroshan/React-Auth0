import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/login' ;
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
