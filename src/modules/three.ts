import * as THREE from 'three';

const three = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x004ff);

  // 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  // 렌더러
  const canvas = document.querySelector('#three');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  // css로 조절가능
  renderer.setSize(window.innerWidth, window.innerHeight);
  /* 
  * 직접 적용할수도 있고 querySelector를 사용해서 적용할 수도 있다.
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  document.body.appendChild(renderer.domElement);
  */

  // 빛
  const pointLight = new THREE.PointLight(0xfffff, 1);
  pointLight.position.set(0, 2, 12);
  scene.add(pointLight);

  // 매쉬

  const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material01 = new THREE.MeshStandardMaterial({ color: 0x999999 });
  const obj01 = new THREE.Mesh(geometry01, material01);
  obj01.position.x = -1;

  scene.add(obj01);

  const geometry02 = new THREE.DodecahedronGeometry(0.4, 0);
  const material02 = new THREE.MeshStandardMaterial({ color: 0x999999 });
  const obj02 = new THREE.Mesh(geometry02, material02);

  scene.add(obj02);

  const geometry03 = new THREE.OctahedronGeometry(0.5, 0);
  const material03 = new THREE.MeshStandardMaterial({ color: 0x999999 });
  const obj03 = new THREE.Mesh(geometry03, material03);
  obj03.position.x = 1;

  scene.add(obj03);

  const render = (time) => {
    time *= 0.0005; // convert time to seconds

    obj01.rotation.x = time;
    obj01.rotation.y = time;
    obj02.rotation.x = time;
    obj02.rotation.y = time;
    obj03.rotation.x = time;
    obj03.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // 반응형 처리
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize);
};

export default three;
