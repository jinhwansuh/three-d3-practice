import * as d3 from 'd3';
import { GeoData } from '../models/data';
import geo from '../../public/data/ctp_rvn.json';

const makeD3Map = () => {
  const width = 600;
  const height = 500;

  const svg = d3
    .select('#d3')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const projection = d3
    .geoNaturalEarth1()
    .scale(width / 1.3 / Math.PI)
    .translate([width / 2, height / 2]);

  // Load external data and boot
  d3.json(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  ).then((data: any) =>
    svg
      .append('g')
      .selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('fill', '#69b3a2')
      .attr('d', d3.geoPath().projection(projection))
      .style('stroke', '#fff')
  );
};
export default makeD3Map;
