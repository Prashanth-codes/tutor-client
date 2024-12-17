import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchTutorPage from "./pages/SearchTutorPage";
import JoinTutorPage from "./pages/JoinTutorPage";
import Login from './auth/Login';
import Signup from './auth/Signup';


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-tutor" element={<SearchTutorPage />}></Route>
        <Route path="/join-tutor" element={<JoinTutorPage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
