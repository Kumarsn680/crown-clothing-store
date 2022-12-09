import { useEffect } from "react";
import { createContext, useState } from "react";
// import { shopData } from "../assets/shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getData = async () =>{
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    }
    getData()
  }, []);
  

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
