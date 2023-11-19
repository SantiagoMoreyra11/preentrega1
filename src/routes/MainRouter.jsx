import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../Components/NavBar/NavBar";
import Category from "../pages/Category";
import Item from "../pages/item";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item/>} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
