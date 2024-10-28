import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import MyAppoinment from "./pages/MyAppoinment";
import Navber from "./components/Navber";

const App = () => {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-appoinment" element={<MyAppoinment />} />
        <Route path="/my-appoinment/:docId" element={<MyAppoinment />} />
      </Routes>
    </div>
  );
};

export default App;
