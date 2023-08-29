import React from "react";
import * as C from "./styles"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ income, expense, total }) => {
    
  const data = {
    labels: ["Total", "Entradas", "Saídas"],
    datasets: [
      {
        label: "Quantidade",
        data: [total, income, expense], // Passando os valores para o gráfico
        backgroundColor: ["blue", "red", "green"],
        borderColor: ["blue", "red", "green"],
      },
    ],
  };

  const options = {};

  return (
    <C.Container>
      <Doughnut data={data} options={options} />
    </C.Container>
  );
};

export default Chart;
