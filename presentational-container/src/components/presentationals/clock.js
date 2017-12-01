import React from 'react';

export default function(props) {
  const [ hours, minutes, seconds] = [
    props.hours,
    props.minutes,
    props.seconds
  ].map(num => num < 10 ? '0' + num : num);

  return (<h1>{hours} : {minutes} : {seconds}</h1>);
}