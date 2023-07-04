import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Layout from "./Components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
