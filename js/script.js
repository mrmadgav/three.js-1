window.onload = function () {
  // Присвоили значения канвасу
  let width = window.innerWidth;
  let height = window.innerHeight;
  let canvas = document.getElementById("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);

  let ball = { rotationY: 0.01 };
  // GUI
  // let gui = new dat.GUI();
  // gui.add(ball, "rotationY").min(-0.2).max(0.2).step(0.001);
  // Рендерер
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setClearColor(0x000000);
  // Сцена
  let scene = new THREE.Scene();
  // Камера
  let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
  camera.position.set(0, 0, 1000);
  // Свет
  let light = new THREE.AmbientLight(0xffffff);
  scene.add(light);
  // Настройки меша
  let geometry = new THREE.SphereGeometry(200, 12, 12);
  let material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors,
  });
  for (let i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
  }
  // Меш
  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function loop() {
    mesh.rotation.y += ball.rotationY;
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
      loop();
    });
  }
  loop();
};
