import { React, useContext } from "react";
import { CategoriesContext } from "../context/Categories_context";
import ProductCard from "./ProductCard";
import "./category.styles.scss";
import CategoryPreview from "./CategoryPreview";

const CategoryPage = () => {
  const { categories } = useContext(CategoriesContext);
  console.log("page")
  const categoryList = Object.keys(categories);
  return (

    categoryList.map((productType) => (
    <CategoryPreview key={productType} category={productType}></CategoryPreview>
  ))
  )
};

export default CategoryPage;
