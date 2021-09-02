import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const values = props.dataPoints.map(obj => obj.value);
  const max = Math.max(...values);
  return (
    <div className="chart">
       {props.dataPoints.map(point => 
       <ChartBar 
          key = {point.label}
          value={point.value} 
          max={max} 
          label={point.label} />)}
    </div>
  )
};

export default Chart;