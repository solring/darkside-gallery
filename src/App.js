import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">

          <a class="navbar-brand mb-0 h1 d-flex align-items-center">
            <img src={logo} alt="logo" className="navbar-logo"/>
            <p>SCSS Template</p>
          </a>

          <a className="icon" href="https://github.com/solring/react-scss-template">
            <div className="logo-github bg-light"></div>
          </a>
        </div>
      </header>

      <div className="container bg-info text-center p-5">
          <img src={logo} className="App-logo m-auto" alt="logo" />

          <div className="text-left">
            <h1 className="h1">Hi!</h1>
            <p>
              This is a template created by <a href="https://create-react-app.dev/">Create React App</a>
              and <a href="https://getbootstrap.com/">Bootstrap</a>.
            </p>
            <p>SCSS and <a href="https://storybook.js.org/">Storybook</a> are also included.</p>
            <p>Please read <a href="https://github.com/solring/react-scss-template/blob/main/README.md">README</a> for more information.</p>

          </div>

          <hr/>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    </div>
  );
}

export default App;
