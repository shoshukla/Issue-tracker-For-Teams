import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/Homepage';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/" />
          <Route element={<Login/>} path="login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
