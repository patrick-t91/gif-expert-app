import { useState } from "react";
import {  GifGrid, AddCategory } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // Tarea: agregar una nueva categoria
    // setCategories([...categories, !true ? "Nothing" : "Slum Dunk"]); // Podemos aplicar logica para agregar elementos
    // Otra forma de actualizar estado:
    // setCategories(cat => [...cat, 'Slam Dunk'])

    /*Antes de React v18, si habia un setState dentro de una funcion, se renderizaba el 
    componente una vez por cada setState y ademas por la funcion. Ahora solo se renderiza 
    al final de la funcion, lo cual hace a React aun mas rapido de lo que ya era */
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        // onNewCategory es una forma de emitir un valor del componente hijo (AddCategory) al padre (GifExpertApp)
        onNewCategory={onAddCategory} // onNewCategory={(value)=>onAddCategory(value)} al haber un solo parametro, no hace falta pasarlo
      />
      <button onClick={() => onAddCategory()}>Agregar</button>
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
