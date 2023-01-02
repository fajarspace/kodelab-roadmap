import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Layout from "./pages/Layout";
import Home from "./pages/Home.tsx";
import Roadmap from "./pages/roadmaps/Roadmap.tsx";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="roadmaps" element={<Roadmap />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);