import "../css/index.css";

import * as THREE from "three";
const random = require("random");
const seedrandom = require("seedrandom");

random.use(seedrandom());

var size = window.innerWidth * window.innerHeight;
var data = new Float32Array(size * 3);
for (var i = 0; i < data.length; i++) {
  data[i] = random.float();
}

var texture = new THREE.DataTexture(
  data,
  window.innerWidth,
  window.innerHeight,
  THREE.RGBFormat,
  THREE.FloatType
);

var scene = new THREE.Scene();
scene.background = texture;
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  data = scene.background.image.data;
  for (var i = 0; i < data.length; i++) data[i] = random.float();
  texture = new THREE.DataTexture(
    data,
    window.innerWidth,
    window.innerHeight,
    THREE.RGBFormat,
    THREE.FloatType
  );
  scene.background = texture;
  renderer.render(scene, camera);
}
animate();
