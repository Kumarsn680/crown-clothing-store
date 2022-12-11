import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import PageForCategory from "./PageForCategory";
import { CATEGORIES_ACTION_TYPES } from "../store/Categories_Reducer";
import { getCategoriesAndDocuments } from "../utils/firebase";
import { useEffect } from "react";



const Shop = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch({
        type: CATEGORIES_ACTION_TYPES.CHANGE_IN_CATEGORY,
        payload: categoryMap,
      });
    };
    getData();
  }, []);

  return (
    <Routes>
      <Route index  element={<CategoryPage/>}></Route>
      <Route path=":category" element={<PageForCategory/>}></Route>
    </Routes>
  );
};

export default Shop;
