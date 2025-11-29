import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"
import "./App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Login from "./components/Login";
import Register from "./components/Register";
import GalleryDetail from "./components/GalleryDetail";
import Test from "./components/Test";
import ResultPage from "./components/ResultsPage";
import Inspiration from "./components/Inspiration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/studio" element={<Studio></Studio>}></Route>
          <Route path="/result" element={<ResultPage />} />
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/test" element={<Test></Test>}></Route>
          <Route path="/inspiration" element={<Inspiration></Inspiration>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
