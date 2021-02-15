import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js';

export function HrefChart(props) {
  const { hrefPercent } = props.data.controlsResult;
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
  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        fontColor: '#2E2E3A',
        fontSize: 15,
      },
    },
    title: {
      display: true,
      text: ['Links with href Attribute'],
      fontSize: 15,
    },
    elements: {
      center: {
        text: `${Math.ceil(hrefPercent)}%`,
        color: bgColor,
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        maxFontSize: 35,
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    animation: {
      duration: 500,
      easing: 'easeInExpo',
      from: 1,
      to: 0,
      loop: false,
      delay: 0,
    },
    // plugins: {
    //   deferred: {
    //     enabled: true,
    //     delay: 0,
    //   },
    // },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return `Your score is ${Math.ceil(hrefPercent)}%`;
        },
      },
    },
  };

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Links with href Attribute'],
            datasets: [
              {
                data: [hrefPercent, 100 - hrefPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 0.5)'],
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

  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        fontColor: '#2E2E3A',
        fontSize: 15,
      },
    },
    title: {
      display: true,
      text: ['Links to New Tab or Window'],
      fontSize: 15,
    },
    elements: {
      center: {
        text: `${100 - newTabPercent}%`,
        color: bgColor,
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        maxFontSize: 35,
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInExpo',
      loop: false,
      delay: 250,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return `Your score is ${Math.ceil(100 - newTabPercent)}%`;
        },
      },
      // plugins: {
      //   deferred: {
      //     enabled: true,
      //     delay: 250,
      //   },
      // },
    },
  };

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: [['Links to New Tab or Window']],
            datasets: [
              {
                data: [100 - newTabPercent, newTabPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 0.5)'],
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
  const chartOptions = {
    cutoutPercentage: 65,
    elements: {
      center: {
        text: `${Math.ceil(buttonsPercent)}%`,
        color: bgColor,
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        maxFontSize: 35,
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        fontColor: '#2E2E3A',
        fontSize: 15,
      },
    },
    title: {
      display: true,
      text: 'Buttons with Type Attribute',
      fontSize: 15,
    },
    animation: {
      duration: 1250,
      easing: 'easeInExpo',
      loop: false,
      delay: 500,
    },
    // plugins: {
    //   deferred: {
    //     enabled: true,
    //     delay: 500,
    //   },
    // },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return `Your score is ${Math.ceil(buttonsPercent)}%`;
        },
      },
    },
  };

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Buttons with Type Attribute'],
            datasets: [
              {
                data: [buttonsPercent, 100 - buttonsPercent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 0.5)'],
              },
            ],
            text: Math.ceil(buttonsPercent),
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
  const chartOptions = {
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        fontColor: '#2E2E3A',
        fontSize: 15,
      },
    },
    title: {
      display: true,
      text: 'Score for this Category',
      fontSize: 15,
    },
    elements: {
      center: {
        text: `${Math.ceil(percent)}%`,
        color: bgColor,
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        maxFontSize: 35,
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInExpo',
      loop: false,
      delay: 250,
    },
    // plugins: {
    //   deferred: {
    //     enabled: true,
    //     delay: 750,
    //   },
    // },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return `Your score is ${Math.ceil(percent)}%`;
        },
      },
    },
  };

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ['Score for this Category'],
            datasets: [
              {
                data: [percent, 100 - percent],
                backgroundColor: [bgColor, 'rgba(173, 173, 173, 0.5)'],
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

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.chart.ctx;

      // Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Helvetica Neue';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      // Start with a base font of 30px
      ctx.font = '30px ' + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + 'px ' + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];

      // Break words up into multiple lines if necessary
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }

      // Move the center up depending on line height and number of lines
      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  },
});
