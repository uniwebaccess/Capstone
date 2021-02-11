
//npm install --save renature

import React from 'react';
import { useFrictionGroup } from 'renature';
function FrictionGroup() {
  const [nodes] = useFrictionGroup(4, i => ({
    from: {
      transform: 'translateX(0px)',
      fill: '#f1faee',
    },
    to: {
      transform: 'translateX(20px)',
      fill: '#457b9d',
    },
    config: {
      mu: 0.5,
      mass: 200,
      initialVelocity: 5,
    },
    delay: i * 500,
    infinite: true,
  }));
  return (
    <svg width="330" height="150" viewBox="0 0 220 100">
      {nodes.map((props, i) => {
        const xOffset = i * 50;
        const points =
          xOffset.toString() +
          ",20 " +
          (xOffset + 50).toString() +
          ",50 " +
          xOffset.toString() +
          ",80";
        return (
          <polygon points={points} fill="#a8dadc" key={i} {...props} />
        );
      })}
    </svg>
  );
}

export default FrictionGroup


