import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// import GUI from 'lil-gui';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js';
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

/**
 * Base
 */
// Debug const gui = new GUI(); Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcap5Texture = textureLoader.load('textures/matcaps/5.png');
matcap5Texture.colorSpace = THREE.SRGBColorSpace;

/**
 * Fonts
 */
const fontLoader = new FontLoader();

fontLoader.load('/fonts/helvetiker_regular.typeface.json', (fontHelvetikerRegular) => {
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: matcap5Texture});
    const textGeometry = new TextGeometry("Creative Frontend \n 3D Web Developer", {
        font: fontHelvetikerRegular,
        size: 0.3,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
    });
    textGeometry.center();
    const text = new THREE.Mesh(textGeometry, textMaterial);
    
    scene.add(text);
});

/**
 * Geometries
 */
const shapeArray = [
  {
    "radius": 0.3,
    "tube": 0.10,
    "radialSegments": 8,
    "tubularSegments": 12,
    "arc": 6.283,
    "wireframe": true,
    "color": 0x69_68_80,
  },
  {
    "radius": 0.3,
    "tube": 0.3,
    "radialSegments": 8,
    "tubularSegments": 10,
    "arc": 6.283,
    "wireframe": true,
    "color": 0xad_ad_c9,
  },
  {
    "radius": 0.1,
    "tube": 0.4,
    "radialSegments": 6,
    "tubularSegments": 28,
    "arc": 6.283,
    "wireframe": true,
    "color": 0xc5_c6_d0,
  },
  {
    "radius": 0.1,
    "tube": 0.4,
    "radialSegments": 4,
    "tubularSegments": 12,
    "arc": 2,
    "wireframe": true,
    "color": 0xbc_c2_c2,
  },
  {
    "radius": 0.1,
    "tube": 1,
    "radialSegments": 3,
    "tubularSegments": 28,
    "arc": 6.283,
    "wireframe": true,
    "color": 0x98_97_a9,
  },
  {
    "radius": 0.1,
    "tube": 1,
    "radialSegments": 3,
    "tubularSegments": 18,
    "arc": 2,
    "wireframe": true,
    "color": 0x7f_7d_9c,
  },
]

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < shapeArray.length; j++) {
        const material = new THREE.MeshBasicMaterial({
            "wireframe": shapeArray[j].wireframe,
            "color": shapeArray[j].color
        });
        const geometry = new THREE.TorusGeometry(
          shapeArray[j].radius, 
          shapeArray[j].tube, 
          shapeArray[j].radialSegments, 
          shapeArray[j].tubularSegments, 
          shapeArray[j].arc
        );
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.x = (Math.random() - 0.5) * 10;
        mesh.position.y = (Math.random() - 0.5) * 10;
        mesh.position.z = (Math.random() - 0.5) * 10;
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        const scale = Math.random();
        mesh
            .scale
            .set(scale, scale, scale);

        scene.add(mesh);
    }
}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();