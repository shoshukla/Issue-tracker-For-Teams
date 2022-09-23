import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddIssue from './components/AddIssue';
import HomePage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/" />
          <Route element={<Register/>} path="Register" />
          <Route element={<Login/>} path="login" />
          <Route element={<AddIssue/>} path="addissue" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
