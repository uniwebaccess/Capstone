import React from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

function formatPercent(value, context) {
  if (value === 0) {
    return "";
  }
  let values = context.dataset.data;
  let sum = values.reduce((a, b) => a + b);

  return Math.round((value * 100) / sum) + " %";
}

export default function StructuralPieChart(props) {
  //console.log('pieChart props', props);
  return (
    <div>
      <Pie
        plugins={[ChartDataLabels]}
        data={{
          labels: props.data.testNames,
          datasets: [
            {
              label: [props.data.testNames],
              data: [
                props.data.sectionTag.score,
                props.data.headerTag.score,
                props.data.inputAndLabel.score,
              ],
              borderWidth: 4,
              backgroundColor: [
                "rgba(255, 183, 3, 1)",
                "rgba(194, 75, 39, 1)",
                "rgba(33, 158,188, 1)",
              ],
              borderColor: "rgba(255, 255, 255, 1)",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            legend: {
              labels: {
                fontColor: "#023047",
                fontFamily: "arial",
                fontSize: 15,
                fontStyle: "bold",
              },
            },
          },

          title: {
            display: true,
            text: "How your total score calculated:",
            color: "#fb8500",
            fontSize: 20,
          },

          legend: {
            labels: {
              fontColor: "#1D3557",
              fontFamily: "arial",
              fontSize: 17,
              fontStyle: "bold",
            },

            position: "top",
          },

          plugins: {
            datalabels: {
              display: true,
              color: "rgba(255, 255, 255, 0.7)",
              font: {
                family: "Helvetica, Arial",
                size: 28,
              },
              formatter: formatPercent,
            },
          },
        }}
      />
    </div>
  );
}
