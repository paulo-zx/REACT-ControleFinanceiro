import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
    const formattedValue = `R$ ${Math.abs(value).toFixed(2)}`;
    const valueWithSign = value < 0 ? `- ${formattedValue}` : formattedValue;
  
    return (
      <C.Container>
        <C.Header>
          <C.HeaderTitle>{title}</C.HeaderTitle>
          <Icon />
        </C.Header>
        <C.Total>{valueWithSign}</C.Total>
      </C.Container>
    );
  };

export default ResumeItem;