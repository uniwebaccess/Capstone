import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';

function makeTooltipContent(entry) {
  return `${entry.title}`;
}

function ImgPieChart(props) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: '#b0bec5',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <div data-tip="" data-for="chart">
    <PieChart
      style={{
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: '6px',
      }}
      data={data}
      radius={PieChart.defaultProps.radius - 14}
      lineWidth={60}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      animate
      label={({ dataEntry }) => {
        let percentage = Math.round(dataEntry.percentage);
        if (percentage === 0) {
          return '';
        }

        return `${dataEntry.value} (${percentage}%)`;
      }
           }
      labelPosition={100 - lineWidth / 2}
      center={[50, 45]}
      labelStyle={{
        fill: '#fff',
        opacity: 0.70,
        pointerEvents: 'none',
      }}
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
    />
    <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>
  );
}

export default ImgPieChart;
