import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = props => {
  let labes = [];
  let weights = { label: "weights", data: [] };
  function createLabels(array) {
    array
      .sort((a, b) => {
        return a.id - b.id;
      })
      .forEach(item => {
        labes.push(item.date.slice(0, 10));
      });
  }
  function createWeights(array) {
    array
      .sort((a, b) => {
        return a.id - b.id;
      })
      .forEach(item => {
        weights.data.push(item.weight);
      });
  }
  createLabels(props.weight);
  createWeights(props.weight);

  let chartData = {
    labels: labes,
    datasets: [
      {
        label: weights.label,
        data: weights.data
      }
    ],
    backgroundColor: ["#e45re3"]
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
