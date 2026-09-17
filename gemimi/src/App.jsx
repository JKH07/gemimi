import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scene from "./components/Scene.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AppPage from "./pages/AppPage.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Scene />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
