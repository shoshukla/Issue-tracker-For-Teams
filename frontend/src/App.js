import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddIssue from './components/AddIssue';
import Header from './components/Header';
import HomePage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Track from './components/Track';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<HomePage/>} path="/" />
          {/* <Route element={<Headers/>} path="Header" /> */}
          <Route element={<Register/>} path="Register" />
          <Route element={<Login/>} path="login" />
          <Route element={<AddIssue/>} path="addissue" />
          <Route element={<Track/>} path="track" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
