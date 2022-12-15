import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    // Podemos desestructurar la propiedad target del evento
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange} // Al tener un solo parametro la funcion, no hace falta que lo llamemos aqui, podemos solamente invocar la funcion.
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}