import Navbarr from "./components/Navbar";
import FooterC from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <FooterC />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
