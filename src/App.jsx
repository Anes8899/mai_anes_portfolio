import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
