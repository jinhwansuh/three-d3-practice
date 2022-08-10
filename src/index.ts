import makeD3Map from './modules/d3-map';
import three from './modules/three';
import { WEBGL } from './webgl.js';

if (WEBGL.isWebGLAvailable()) {
  makeD3Map();
  three();
} else {
  const warning = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
}
