import React, { useState } from "react";
import * as C from "./styles"; // Importe o mesmo objeto C com seus estilos

const Search = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <C.Container>
        <C.InputContent>
          <C.Label>Buscar Finança</C.Label>
            <C.Input // Use o estilo do objeto C para aplicar o estilo desejado
                type="text"
                placeholder="Buscar por descrição"
                onChange={handleSearch}
            />
        </C.InputContent>
    </C.Container>
    
  );
};

export default Search;