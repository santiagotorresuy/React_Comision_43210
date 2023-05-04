import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="div-form">
          <h1 className="login-h1">Log in</h1>
          <form action="" className='form'>
            <input type="text" className="input-box" placeholder="User name" id="nombre-usuario"></input>
            <input type="email" className="input-box" placeholder="name@example.com" id="email-usuario"></input>
            <input type="password" className="input-box" placeholder="Password" id="password-usuario"></input>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
