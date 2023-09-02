import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Mypage from './components/Mypage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/sign-up/`} element={<SignUp />} />
          <Route path={`/sign-in/`} element={<SignIn />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
