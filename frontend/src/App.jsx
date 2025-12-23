// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SignUp from "./components/SignUp";
import My_gallery from "./components/My_gallery";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTES WITH HEADER */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/my-gallery" element={<My_gallery></My_gallery>}></Route>
          <Route path="/settings" element={<Settings></Settings>}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* SIGNUP MODAL ROUTE (outside layout content) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
