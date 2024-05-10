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
const matcap8Texture = textureLoader.load('textures/matcaps/8.png');
matcap8Texture.colorSpace = THREE.SRGBColorSpace;
const matcap5Texture = textureLoader.load('textures/matcaps/5.png');
matcap5Texture.colorSpace = THREE.SRGBColorSpace;

/**
 * Fonts
 */
const fontLoader = new FontLoader();

fontLoader.load('/fonts/helvetiker_regular.typeface.json', (fontHelvetikerRegular) => {
    // Material
    const textMaterial = new THREE.MeshMatcapMaterial({matcap: matcap5Texture});
    // const textMaterial = new THREE.MeshBasicMaterial({wireframe: true}); Text
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

    // Customed donut style - lampshadeGeometry
    // THREE.MeshMatcapMaterial({ matcap: matcap5Texture });
    const donutMaterial = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0x69_68_80
      }
    );

    const donutGeometry = new THREE.TorusGeometry(0.3, 0.10, 8, 12, 6.283);

    for (let i = 0; i < 10; i++) {
        const donut = new THREE.Mesh(donutGeometry, donutMaterial);
        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;
        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;
        const scale = Math.random();
        donut
            .scale
            .set(scale, scale, scale);

        scene.add(donut);
    }

    // Customed donut style - lampshadeGeometry
    const donut2Material = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0xad_ad_c9
      }
    );

    const donut2Geometry = new THREE.TorusGeometry(0.3, 0.3, 8, 10, 6.283);

    for (let i = 0; i < 10; i++) {
        const donut2 = new THREE.Mesh(donut2Geometry, donut2Material);
        donut2.position.x = (Math.random() - 0.5) * 10;
        donut2.position.y = (Math.random() - 0.5) * 10;
        donut2.position.z = (Math.random() - 0.5) * 10;
        donut2.rotation.x = Math.random() * Math.PI;
        donut2.rotation.y = Math.random() * Math.PI;
        const scale = Math.random();
        donut2
            .scale
            .set(scale, scale, scale);

        scene.add(donut2);
    }

    // Customed lampshade style - lampshadeGeometry
    const lampshadeMaterial = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0xc5_c6_d0
      }
    );

    const lampshadeGeometry = new THREE.TorusGeometry( 0.1, 0.4, 6, 28, 6.283 ); 

    for (let i = 0; i < 10; i++) {
      const lampshade = new THREE.Mesh(lampshadeGeometry, lampshadeMaterial);
      lampshade.position.x = (Math.random() - 0.5) * 10;
      lampshade.position.y = (Math.random() - 0.5) * 10;
      lampshade.position.z = (Math.random() - 0.5) * 10;
      lampshade.rotation.x = Math.random() * Math.PI;
      lampshade.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      lampshade
          .scale
          .set(scale, scale, scale);
          
      scene.add( lampshade );
    }

    // Customed lampshade3 style - lampshadeGeometry
    const lampshade3Material = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0xbc_c2_c2
      }
    );

    const lampshade3Geometry = new THREE.TorusGeometry( 0.1, 0.4, 4, 12, 2 ); 

    for (let i = 0; i < 10; i++) {
      const lampshade3 = new THREE.Mesh(lampshade3Geometry, lampshade3Material);
      lampshade3.position.x = (Math.random() - 0.5) * 10;
      lampshade3.position.y = (Math.random() - 0.5) * 10;
      lampshade3.position.z = (Math.random() - 0.5) * 10;
      lampshade3.rotation.x = Math.random() * Math.PI;
      lampshade3.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      lampshade3
          .scale
          .set(scale, scale, scale);
          
      scene.add( lampshade3 );
    }

    // Customed lampshade4 style - lampshadeGeometry
    const lampshade4Material = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0x98_97_a9
      }
    );

    const lampshade4Geometry = new THREE.TorusGeometry( 0.1, 1, 3, 28, 6.283 ); 

    for (let i = 0; i < 10; i++) {
      const lampshade4 = new THREE.Mesh(lampshade4Geometry, lampshade4Material);
      lampshade4.position.x = (Math.random() - 0.5) * 10;
      lampshade4.position.y = (Math.random() - 0.5) * 10;
      lampshade4.position.z = (Math.random() - 0.5) * 10;
      lampshade4.rotation.x = Math.random() * Math.PI;
      lampshade4.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      lampshade4
          .scale
          .set(scale, scale, scale);
          
      scene.add( lampshade4 );
    }

    // Customed lampshade2 style - lampshadeGeometry
    const lampshade2Material = new THREE.MeshBasicMaterial(
      {
        wireframe: true, 
        color: 0x7f_7d_9c
      }
    );

    const lampshade2Geometry = new THREE.TorusGeometry( 0.1, 1, 3, 18, 2 ); 

    for (let i = 0; i < 10; i++) {
      const lampshade2 = new THREE.Mesh(lampshade2Geometry, lampshade2Material);
      lampshade2.position.x = (Math.random() - 0.5) * 10;
      lampshade2.position.y = (Math.random() - 0.5) * 10;
      lampshade2.position.z = (Math.random() - 0.5) * 10;
      lampshade2.rotation.x = Math.random() * Math.PI;
      lampshade2.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      lampshade2
          .scale
          .set(scale, scale, scale);
          
      scene.add( lampshade2 );
    }

});

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