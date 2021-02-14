import React from "react";
import { Bar } from "react-chartjs-2";

export default function MainResultsChart(props) {
  const {
    controlsResult,
    structuralResult,
    globalCodeResult,
    headingsResult,
    imagesResult,
    score,
  } = props.newScan;
  const { averages } = props;
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Structural HTML",
            "Images",
            "Headings",
            "Controls",
            "Global Code",
            "Overall Score",
          ],
          datasets: [
            {
              label: "Your Score",
              data: [
                structuralResult.percent,
                imagesResult.percent,
                headingsResult.percent,
                controlsResult.percent,
                globalCodeResult.percent,
                score.percent,
              ],
              backgroundColor: [
                "rgba(194, 75, 39, 1)",
                "rgba(33, 158, 188, 1)",
                "rgba(255, 183, 3, 1)",
                "rgba(2, 48, 71, 1)",
                "rgba(54, 65, 163, 1)",
                "rgba(251, 133, 0, 1)",
                "rgba(166, 255, 245, 1)",
              ],
            },
            {
              label: "Average Score",
              data: [
                averages.structuralResult.percent,
                averages.imagesResult.percent,
                averages.headingsResult.percent,
                averages.controlsResult.percent,
                averages.globalCodeResult.percent,
                averages.score.percent,
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                const fieldName =
                  tooltipItem.label[0].toLowerCase() +
                  tooltipItem.label.replace(/\s/g, "").substring(1);
                if (tooltipItem.datasetIndex === 0) {
                  return `Your score is ${tooltipItem.yLabel}%`;
                } else {
                  return `The average score is ${tooltipItem.yLabel}%`;
                }
              },
            },
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "#023047",
              fontFamily: "arial",
              fontSize: 15,
              fontStyle: "bold",
            },
          },
        }}
      />
    </div>
  );
}
