const import_three = import('three');

async function minone_initialize({three}) {
  const renderer = new three.WebGLRenderer();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.setClearColor(
    new three.Color(
      0,
      0,
      0
    )
  );

  let resizeTimeoutHandle;
  const onResize = () => {
    window.clearTimeout(resizeTimeoutHandle)

    resizeTimeoutHandle = window.setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    }, 0);
  }

  const resizeObserver = new ResizeObserver(onResize)
  resizeObserver.observe(document.body)

  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.set(0, 2, -4);

  const geometry_ground = new three.BoxGeometry(100, 1, 100);
  const material_ground = new three.MeshPhongMaterial({
    color: 0x20aa02
  });

  const mesh_ground = new three.Mesh(
    geometry_ground,
    material_ground
  );
  
  scene.add(mesh_ground);

  const light = new three.PointLight(
    0xffbaff,
    100
  );
  
  light.position.set(0, 1, 1);

  scene.add(light);

  renderer.setAnimationLoop((
    time,
  ) => {
    renderer.render(
      scene,
      camera,
    )
  })

  document.body.append(renderer.domElement);
}

async function load_modules() {
  const three = await import_three;

  minone_initialize({three});
}

if (document.readyState != 'loading') {
  load_modules();
} else {
  document.addEventListener('DOMContentLoaded', load_modules);
}

