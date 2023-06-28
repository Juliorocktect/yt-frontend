import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Player from "./components/player/Player";
import { Routes, Route } from "react-router-dom";
import Search from "./components/navbar/search/Search";
import Upload from "./components/upload/Upload";
import Profile from "./components/profile/Profile";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/slider" element={<Slider />}></Route>
        <Route path="/layout" element={<Layout />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/player/:id" exact element={<Player />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/profile/:userName" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
