import React from 'react'
import { Bar } from 'react-chartjs-2'


export default function BarChart(props) {
  console.log("barChart props", props)
  return (
    <div>
      <Bar
        data={{
          labels: props.data.testNames,
          datasets: [{
            label: " SCORE FOR YOUR APP IN %",
            data: props.data.eachTest,
            backgroundColor: [
              'rgba(255, 173, 128, 0.7)',
              'rgba(227, 84, 85, 0.7)',
              'rgba(230, 105,250, 0.7)',
              'rgba(111, 84, 227, 0.7)',
              'rgba(94, 169, 255, 0.7)',
              'rgba(166, 255, 245, 1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
          {

            label: "AVERAGE SCORE",
            data: [88, 86, 60, 45, 77, 65],
          }
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax: 100
              }
            }]
          },
          legend: {
            labels: {
              fontColor: "#3812E3",
              fontFamily: "arial",
              fontSize: 15,
              fontStyle: "bold"
            }
          },
          title: {
            display: true,
            text: 'Headings Chart'
          }
        }}
      />
    </div>
  )
}
