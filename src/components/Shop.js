import { Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import PageForCategory from "./PageForCategory";


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPage/>}></Route>
      <Route path=":category" element={<PageForCategory/>}></Route>
    </Routes>
  );
};

export default Shop;
