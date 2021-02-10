import React from "react";
import { Bar } from "react-chartjs-2";

export default function MainResultsChart(props) {
  const {
    controlsResult,
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
          labels: ["Images", "Headings", "Controls", "Global Code", "Overall"],
          datasets: [
            {
              label: "Your Score",
              data: [
                imagesResult.percent,
                headingsResult.percent,
                controlsResult.percent,
                globalCodeResult.percent,
                score.percent,
              ],
              backgroundColor: [
                "rgba(33, 158, 188, 0.7)",
                "rgba(255, 183, 3, 0.7)",
                "rgba(2, 48, 71, 0.7)",
                "rgba(142, 202, 230, 0.7)",
                "rgba(251, 133, 0, 0.7)",
                "rgba(166, 255, 245, 1)",
              ],
              borderColor: [
                "rgba(33, 158, 188, 1)",
                "rgba(255, 183, 3, 1)",
                "rgba(2, 48, 71, 1)",
                "rgba(142, 202, 230,1)",
                "rgba(251, 133, 0, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "Average Score",
              data: [
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
                props.selectField(
                  tooltipItem.label[0].toLowerCase() +
                    tooltipItem.label.replace(/\s/g, "").substring(1)
                );
                // props.selectField(
                //   console.log(
                //   tooltipItem.label.replace(/\s/g, "")[0].toLowercase()
                // ))
                if (tooltipItem.dataset === 0) {
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
              fontColor: "#3812E3",
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
