import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
