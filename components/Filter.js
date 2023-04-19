import React from 'react';

const Filter = ({ setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <form>
      <label htmlFor="price">Precio:</label>
      <select id="price" name="price" onChange={handleFilterChange}>
        <option value="">Todos</option>
        <option value="menor">Menor a Mayor</option>
        <option value="mayor">Mayor a Menor</option>
      </select>

      <label htmlFor="size">Talla:</label>
      <select id="size" name="size" onChange={handleFilterChange}>
        <option value="">Todos</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
      </select>

      <label htmlFor="gender">Género:</label>
      <select id="gender" name="gender" onChange={handleFilterChange}>
        <option value="">Todos</option>
        <option value="mujer">Mujer</option>
        <option value="hombre">Hombre</option>
        <option value="unisex">Unisex</option>
      </select>
    </form>
  );
};

export default Filter;
