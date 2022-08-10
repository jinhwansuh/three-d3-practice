import * as d3 from 'd3';

const makeD3Map = () => {
  const width = 900;
  const height = 600;

  const svg = d3
    .select('#d3')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g');
};

export default makeD3Map;
