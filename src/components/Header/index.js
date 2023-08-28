import React from 'react';
import * as C from "./styles"; {/* == import {Container} from "./styles";  */ }

const Header = () => {
  return (
    <C.Container>
        <C.Header>
            <C.Title>Finance Tech</C.Title>
        </C.Header>
    </C.Container>
  )
}

export default Header