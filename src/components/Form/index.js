import React, { useState } from "react";
import Grid from "../Grid";
import Search from "../Search"; // Importe o componente Search
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para a busca

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
            style={{ cursor: 'pointer' }}
          />
          <C.Label htmlFor="rIncome" style={{ cursor: 'pointer' }}>Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
            style={{ cursor: 'pointer' }}
          />
          <C.Label htmlFor="rExpenses" style={{ cursor: 'pointer' }}>Saída</C.Label >
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Search setSearchTerm={setSearchTerm} /> {/* Componente de busca */}
      <Grid
        itens={transactionsList.filter(item =>
          item.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        setItens={setTransactionsList}
      />
    </>
  );
};

export default Form;