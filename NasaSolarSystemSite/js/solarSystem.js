import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

// Texture
const textureLoader = new THREE.TextureLoader();
const terraTexture = textureLoader.load("/img/terra.jpg");
const terraNotteTexture = textureLoader.load("/img/terraNotte.jpeg");
const lunaTexture = textureLoader.load("/img/luna.jpg");
const soleTexture = textureLoader.load("/img/sole.jpg");
const saturnoTexture = textureLoader.load("/img/saturno.jpg");
const anelliSaturnoTexture = textureLoader.load("/img/anelliSaturno.jpeg");
const marteTexture = textureLoader.load("/img/marte.jpg");
const mercurioTexture = textureLoader.load("/img/mercurio.jpg");
const gioveTexture = textureLoader.load("/img/giove.jpg");
const venereTexture = textureLoader.load("/img/venere.jpg");
const uranoTexture = textureLoader.load("/img/urano.jpg");
const nettunoTexture = textureLoader.load("/img/nettuno.jpg");
const milkyWayTexture = textureLoader.load("/NasaSolarSystemSite/img/mikyWay.jpeg")
// Canvas
const canvas = document.querySelector("canvas.webgl");
// Scene
const sceneSistemaSolare = new THREE.Scene();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Scene BG
//Objects
// const bg = new THREE.PlaneGeometry( 10, 10 );
// const materialBg = new THREE.MeshStandardMaterial();
// materialBg.map = milkyWayTexture;

// const shapeBg = new THREE.Mesh(bg, materialBg);
// sceneSistemaSolare.add(shapeBg)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Scene SOLE
// Objects
const sole = new THREE.SphereBufferGeometry( 25, 300, 100 );
// Materials
const materialSole = new THREE.MeshStandardMaterial();
materialSole.map = soleTexture;

// Mesh
const shapeSole = new THREE.Mesh(sole, materialSole);
sceneSistemaSolare.add(shapeSole);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene MERCURIO
// Objects
const mercurio= new THREE.SphereBufferGeometry( 0.8, 300, 100 );
// Materials
const materialMercurio = new THREE.MeshStandardMaterial();
materialMercurio.map = mercurioTexture;

// Mesh
const shapeMercurio = new THREE.Mesh(mercurio, materialMercurio);
sceneSistemaSolare.add(shapeMercurio);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene VENERE
// Objects
const venere = new THREE.SphereBufferGeometry( 1.8, 300, 100 );
// Materials
const materialVenere = new THREE.MeshStandardMaterial();
materialVenere.map = venereTexture;

// Mesh
const shapeVenere = new THREE.Mesh(venere, materialVenere);
sceneSistemaSolare.add(shapeVenere);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene TERRA
// Objects
const terra = new THREE.SphereBufferGeometry( 2, 300, 100 );
// Materials
const materialTerra = new THREE.MeshStandardMaterial();
materialTerra.map = terraTexture;

// Mesh
const shapeTerra = new THREE.Mesh(terra, materialTerra);
sceneSistemaSolare.add(shapeTerra);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene LUNA
// Objects
const luna = new THREE.SphereBufferGeometry( 0.5, 300, 100 );
// Materials
const materialLuna = new THREE.MeshStandardMaterial();
materialLuna.map = lunaTexture;
// Mesh
const shapeLuna = new THREE.Mesh(luna, materialLuna);
//sceneSistemaSolare.add(shapeLuna);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene MARTE
// Objects
const marte = new THREE.SphereBufferGeometry( 1, 300, 100 );
// Materials
const materialMarte = new THREE.MeshStandardMaterial();
materialMarte.map = marteTexture;

// Mesh
const shapeMarte = new THREE.Mesh(marte, materialMarte);
sceneSistemaSolare.add(shapeMarte);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene GIOVE
// Objects
const giove = new THREE.SphereBufferGeometry( 5, 300, 100 );
// Materials
const materialGiove = new THREE.MeshStandardMaterial();
materialGiove.map = gioveTexture;

// Mesh
const shapeGiove = new THREE.Mesh(giove, materialGiove);
sceneSistemaSolare.add(shapeGiove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene SATURNO
// Objects
const saturno = new THREE.SphereBufferGeometry( 4, 300, 100 );
// Materials
const materialSaturno = new THREE.MeshStandardMaterial();
materialSaturno.map = saturnoTexture;

// Mesh
const shapeSaturno = new THREE.Mesh(saturno, materialSaturno);
sceneSistemaSolare.add(shapeSaturno);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene ANELLISATURNO
// Objects
const anelliSaturno = new THREE.RingGeometry( 7, 5.7, 32, 32, 1);
// Materials
const materialAnelliSaturno = new THREE.MeshBasicMaterial( { map: textureLoader.load("/img/anelliSaturno.jpg"), side: THREE.DoubleSide} );
// // Mesh
const shapeAnelliSaturno = new THREE.Mesh(anelliSaturno, materialAnelliSaturno);
sceneSistemaSolare.add(shapeAnelliSaturno);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene URANO
// Objects
const urano = new THREE.SphereBufferGeometry( 3, 300, 100 );
// Materials
const materialUrano = new THREE.MeshStandardMaterial();
materialUrano.map = uranoTexture;

// Mesh
const shapeUrano = new THREE.Mesh(urano, materialUrano);
sceneSistemaSolare.add(shapeUrano);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene NETTUNO
// Objects
const nettuno = new THREE.SphereBufferGeometry( 2.5, 300, 100 );
// Materials
const materialNettuno = new THREE.MeshStandardMaterial();
materialNettuno.map = nettunoTexture;

// Mesh
const shapeNettuno = new THREE.Mesh(nettuno, materialNettuno);
sceneSistemaSolare.add(shapeNettuno);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  // Lights
 const pointLightGiove = new THREE.PointLight(0xffffff, 1);
 pointLightGiove.position.x = 5;
 pointLightGiove.position.y = 3;
 pointLightGiove.position.z = 15;
sceneSistemaSolare.add(pointLightGiove);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  50,
  sizes.width / sizes.height,
  0.1,
  100
);
// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 50;
camera.position.set(0, 0, 50);
/**
 * OrbitControls
 */
//const orbit = new OrbitControls(camera, renderer);
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// sceneSistemaSolare.add(controls);

//sceneLuna.add(camera);
sceneSistemaSolare.add(camera);
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();



  // Update objects
  //shapeBg.position.z = -100;
  //shapeBg.position.x = 0;
  shapeSole.rotation.y = 0.05 * elapsedTime;
  shapeSole.rotation.x = 0.0 * elapsedTime;
  shapeSole.position.x = -55;
  
  shapeMercurio.rotation.y = 0.4 * elapsedTime;
  shapeMercurio.rotation.x = 0.0 * elapsedTime;
  shapeMercurio.position.x = -20;

  shapeVenere.rotation.y = 0.4 * elapsedTime;
  shapeVenere.rotation.x = 0.0 * elapsedTime;
  shapeVenere.position.x = -16;

  shapeTerra.rotation.y = 0.4 * elapsedTime;
  shapeTerra.rotation.x = 0.0 * elapsedTime;
  shapeTerra.position.x = -10;

  // shapeLuna.rotation.y = 0.9 * elapsedTime;
  // shapeLuna.rotation.x = 0.0 * elapsedTime;
  // shapeLuna.position.x = -8.5;

  shapeMarte.rotation.y = 0.4 * elapsedTime;
  shapeMarte.rotation.x = 0.0 * elapsedTime;
  shapeMarte.position.x = -5;

  shapeGiove.rotation.y = 0.4 * elapsedTime;
  shapeGiove.rotation.x = 0.0 * elapsedTime;
  shapeGiove.position.x = 3;

  shapeSaturno.rotation.y = 0.4 * elapsedTime;
  shapeSaturno.rotation.x = 0.0 * elapsedTime;
  shapeSaturno.position.x = 17;

  shapeAnelliSaturno.rotation.y = 0.0 * elapsedTime;
  shapeAnelliSaturno.rotation.x = 0.0 * elapsedTime;
  shapeAnelliSaturno.position.x = 17;
  shapeAnelliSaturno.rotation.x = 45.6;
  shapeAnelliSaturno.rotation.y = 35;

  shapeUrano.rotation.y = 0.4 * elapsedTime;
  shapeUrano.rotation.x = 0.0 * elapsedTime;
  shapeUrano.position.x = 30;

  shapeNettuno.rotation.y = 0.4 * elapsedTime;
  shapeNettuno.rotation.x = 0.0 * elapsedTime;
  shapeNettuno.position.x = 40;

  // Render
  renderer.render(sceneSistemaSolare, camera);
  //renderer.render(sceneLuna, camera);
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();