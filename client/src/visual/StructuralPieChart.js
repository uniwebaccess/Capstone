import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function StructuralPieChart(props) {
  //console.log('pieChart props', props);
  return (
    <div>
      <Pie
        data={{
          labels: props.data.testNames,
          datasets: [
            {
              label: [props.data.testNames],
              data: [props.data.sectionTag.score, props.data.headerTag.score, props.data.inputAndLabel.score],
              backgroundColor: [
                'rgba(251, 133, 0, 1)',
                'rgba(142, 202, 230, 1)',
                'rgba(2,48,205, 1)',
                'rgba(255, 183, 3, 1)',

              ],
              borderColor: [
                'rgba(251, 133, 0, 1)',
                'rgba(142, 202, 230, 1)',
                'rgba(2,48,205, 1)',

                'rgba(255, 183, 3, 1)',
              ],
              borderWidth: 1,
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
                fontColor: '#023047',
                fontFamily: 'arial',
                fontSize: 15,
                fontStyle: 'bold',
              },
            },
          },
          title: {
            display: true,
            text: 'Overall in % :',
            color: "#fb8500",
            fontSize: 20,
          },

        }}
      />
    </div>
  );
}
