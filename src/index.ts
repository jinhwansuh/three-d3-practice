import * as THREE from 'three';
import { WEBGL } from './webgl.js';

if (WEBGL.isWebGLAvailable()) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1234);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const canvas = document.querySelector('#example1');

  const renderer = new THREE.WebGLRenderer({ canvas });

  // renderer.setSize(window.innerWidth, window.innerHeight);
  // css로 조절가능

  // document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
} else {
}
