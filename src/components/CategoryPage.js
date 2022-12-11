import { React } from "react";
import "./category.styles.scss";
import CategoryPreview from "./CategoryPreview";
import { useSelector } from "react-redux";

const CategoryPage = () => {
  const categories = useSelector((state) => state.categories.categories);
  const categoryList = Object.keys(categories);
  return (

    categoryList.map((productType) => (
    <CategoryPreview key={productType} category={productType}></CategoryPreview>
  ))
  )
};

export default CategoryPage;
