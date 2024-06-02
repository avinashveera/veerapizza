import  Topbar  from "./component/Navbar";
import {
  Routes,
  Route
} from "react-router-dom";
import About from '../src/about/About';
import Contact from '../src/contact/Contact';
import Home from './component/screen/Home';
import TermsAndPolicy from "../src/policy/policy.jsx";
import Nav2 from "./Nav2";
import Login from './component/auth/Login'
import Register from "./component/auth/Register";
import Cart from "./component/Cart"
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
  <Topbar/>
  <Nav2 />
  <Routes>
  <Route exact path="/login"  element={localStorage.getItem("token")?<Home/>:<Login />} />
  <Route exact path="/Register"  element={<Register />} />
    <Route exact path="/"  element={localStorage.getItem('token')?<Home/>:<Login />} />
    <Route  path="/about"    element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/TermsAndPolicy" element={<TermsAndPolicy/>} />
    <Route exact path="/cart"  element={localStorage.getItem('token')?<Cart />:<Login />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
