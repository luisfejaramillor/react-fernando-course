import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form type="text" onSubmit={handleSubmit} aria-label="form">
      <input type="text" onChange={handleInputValue} value={inputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
