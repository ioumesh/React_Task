import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

function App() {
  return (
    <div className="container-fluid vw-100 vh-100">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Todos/>
      </div>

    </div>
  );
}

export default App;
