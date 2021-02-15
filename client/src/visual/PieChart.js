import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function formatPercent(value, context) {
  let values = context.dataset.data;
  let sum = values.reduce((a, b) => a + b);

  let percent = Math.round(value*100/sum);
  if (percent < 10) {
    return '';
  }

  return percent + ' %';
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
                'rgba(186, 24, 27, 1)',
                'rgb(253, 197, 0)',
                'rgb(44, 98, 131)',
                'rgba(251, 133, 0, 0.7)',
                'rgba(166, 255, 245, 1)',
              ],
              borderColor: [
                'rgba(186, 24, 27, 1)',
                'rgb(253, 197, 0)',
                'rgb(44, 98, 131)',
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

          legend: {
            labels: {
              fontColor: '#1D3557',
              fontFamily: 'arial',
              fontSize: 17,
              fontStyle: 'bold',
            },
            position:'top'
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
