import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import SobreMim from "./pages/AboutMe";
import DefaultRouter from "components/DefaultRoute";
import Footer from "components/Footer";
import Post from "pages/Post";

const Page404 = () => (
  <>
    <h1>Error 404</h1>
    <h2>Página não encontrada</h2>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultRouter />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
