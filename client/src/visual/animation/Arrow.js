
//npm install --save renature

import React from 'react';
import { useFrictionGroup } from 'renature';
function FrictionGroup() {
  const [nodes] = useFrictionGroup(4, i => ({
    from: {
      transform: 'translateX(0px)',
      fill: '#219ebc',
    },
    to: {
      transform: 'translateX(20px)',
      fill: '#ffb703',
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
          <polygon points={points} fill="#ffb703" key={i} {...props} />
        );
      })}
    </svg>
  );
}

export default FrictionGroup


