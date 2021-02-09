import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  //console.log('pieChart props', props);
  return (
    <div>
      <Pie
        data={{
          labels: props.data.imagesName,
          datasets: [
            {
              label: ' Total Images',
              data: props.data.imagesData,
              backgroundColor: [
                'rgba(33, 158, 188, 0.7)',
                'rgba(255, 183, 3, 0.7)',
                'rgba(2, 48, 71, 0.7)',
                'rgba(142, 202, 230, 0.7)',
                'rgba(251, 133, 0, 0.7)',
                'rgba(166, 255, 245, 1)',
              ],
              borderColor: [
                'rgba(33, 158, 188, 1)',
                'rgba(255, 183, 3, 1)',
                'rgba(2, 48, 71, 1)',
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
            // yAxes: [{
            //   ticks: {
            //     beginAtZero: true,
            //     // suggestedMax: 100
            //   }
            // }]
          },
          legend: {
            labels: {
              fontColor: '#3812E3',
              fontFamily: 'arial',
              fontSize: 15,
              fontStyle: 'bold',
            },
          },
          title: {
            display: true,
            text: 'IMG Tag Test',
          },
        }}
      />
    </div>
  );
}
