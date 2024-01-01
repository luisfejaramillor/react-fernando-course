import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Breaking bad"]);

  const handleNewCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={handleNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
