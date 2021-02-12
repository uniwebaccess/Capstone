import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export function HrefChart(props) {
  const { hrefPercent } = props.data.controlsResult;

  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: '#2E2E3A',
        fontFamily: 'arial',
        fontSize: 15,
      },
    },
  };

  let bgColor;

  if (hrefPercent >= 80) {
    bgColor = '#5fad56';
  }
  if (hrefPercent < 80 && hrefPercent >= 40) {
    bgColor = '#ffd500';
  }
  if (hrefPercent < 40) {
    bgColor = '#ff2400';
  }
  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Links with href Attribute'],
            datasets: [
              {
                data: [hrefPercent, 100 - hrefPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 1)'],
              },
            ],
            text: hrefPercent,
          }}
          height={200}
          width={300}
          options={chartOptions}
        />
      </div>
    </>
  );
}

export function TargetChart(props) {
  const { allLinks, linksToNewTab } = props.data.controlsResult;
  const newTabPercent = Math.floor((linksToNewTab / allLinks) * 100);

  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: '#2E2E3A',
        fontFamily: 'arial',
        fontSize: 15,
      },
    },
  };

  let bgColor;

  if (newTabPercent <= 80) {
    bgColor = '#5fad56';
  }
  if (newTabPercent > 80 && newTabPercent <= 40) {
    bgColor = '#ffd500';
  }
  if (newTabPercent > 40) {
    bgColor = '#ff2400';
  }
  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Links Opening in a New Tab or Window'],
            datasets: [
              {
                data: [100 - newTabPercent, newTabPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 1)'],
              },
            ],
            text: newTabPercent,
          }}
          height={200}
          width={300}
          options={chartOptions}
        />
      </div>
    </>
  );
}

export function ButtonsChart(props) {
  const { buttonsPercent } = props.data.controlsResult;

  const chartOptions = {
    cutoutPercentage: 65,
    elements: {
      center: {
        text: 'inner text',
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: '#2E2E3A',
        fontFamily: 'arial',
        fontSize: 15,
      },
    },
  };

  let bgColor;

  if (buttonsPercent >= 80) {
    bgColor = '#5fad56';
  }
  if (buttonsPercent < 80 && buttonsPercent >= 40) {
    bgColor = '#ffd500';
  }
  if (buttonsPercent < 40) {
    bgColor = '#ff2400';
  }
  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Buttons with Type Attribute'],
            datasets: [
              {
                data: [buttonsPercent, 100 - buttonsPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 1)'],
              },
            ],
            text: buttonsPercent,
          }}
          height={200}
          width={300}
          options={chartOptions}
        />
      </div>
    </>
  );
}

export function ControlsScoreChart(props) {
  const { percent } = props.data.controlsResult;

  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: '#2E2E3A',
        fontFamily: 'arial',
        fontSize: 15,
      },
    },
  };

  let bgColor;

  if (percent >= 80) {
    bgColor = '#5fad56';
  }
  if (percent < 80 && percent >= 40) {
    bgColor = '#ffd500';
  }
  if (percent < 40) {
    bgColor = '#ff2400';
  }
  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Score for this Category'],
            datasets: [
              {
                data: [percent, 100 - percent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 1)'],
              },
            ],
            text: percent,
          }}
          height={200}
          width={300}
          options={chartOptions}
        />
      </div>
    </>
  );
}
