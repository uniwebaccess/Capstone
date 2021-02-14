import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function formatPercent(value, context) {
  if (value == 0) {
    return '';
  }
  let values = context.dataset.data;
  let sum = values.reduce((a, b) => a + b);

  return Math.round(value*100/sum) + ' %';
}

export default function PieChart(props) {
  //console.log('pieChart props', props);
  return (
    <div>
      <Pie
        plugins={[ChartDataLabels]}
        data={{
          labels: props.data.imagesName,
          datasets: [
            {
              label: ' Total Images',
              data: props.data.imagesData,
              backgroundColor: [
                'rgba(33, 158, 188, 0.7)',
                'rgb(253, 197, 0)',
                'rgb(44, 98, 131)',
                'rgba(142, 202, 230, 0.7)',
                'rgba(251, 133, 0, 0.7)',
                'rgba(166, 255, 245, 1)',
              ],
              borderColor: [
                'rgba(33, 158, 188, 1)',
                'rgb(253, 197, 0)',
                'rgb(44, 98, 131)',
                'rgba(142, 202, 230,1)',
                'rgba(251, 133, 0, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {

            //   label: "AVERAGE SCORE",
            //   data: [88, 86, 60, 45, 77, 65],
            // }
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            legend: {
              labels: {
                fontColor: '#023047',
                fontFamily: 'arial',
                fontSize: 15,
                fontStyle: 'bold',
              },
            },
          },
          scales: {
            // yAxes: [{
            //   ticks: {
            //     beginAtZero: true,
            //     // suggestedMax: 100
            //   }
            // }]
          },
          legend: {
            labels: {
              fontColor: '#1D3557',
              fontFamily: 'arial',
              fontSize: 17,
              fontStyle: 'bold',
            },
            position:'bottom'
          },

          plugins: {
            datalabels: {
                display: true,
                color: 'rgba(255, 255, 255, 0.7)',
                font: {
                  family: 'Helvetica, Arial',
                  size: 32,
                },
                formatter: formatPercent
            }
          }
        }}
      />
    </div>
  );
}
