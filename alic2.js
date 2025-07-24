const import_three = import('three');

let vertices_alic2 = new Float32Array([
  0, 0, 0,
  1, 0, 0,
  0, 1, 0,

  0, 1, 0,
  1, 1, 0,
  1, 0, 0,
]);

const context_audio = new AudioContext();
const buffer_audio = new AudioBuffer({numberOfChannels: 1, length: vertices_alic2.length * 6, sampleRate: 3000});
const node_source_buffer = new AudioBufferSourceNode(context_audio);

function start_audio_content() {
  if (!node_source_buffer.buffer) {
    node_source_buffer.buffer = buffer_audio;
    node_source_buffer.loop = true;
    node_source_buffer.connect(context_audio.destination);
    node_source_buffer.start();
  }
}

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

  const geometry_alic2 = new three.BufferGeometry();

  geometry_alic2.setAttribute(
    'position',
    new three.BufferAttribute(
      vertices_alic2,
      3
    )
  );

  const material_alic2 = new three.MeshBasicMaterial({
    color: 0xffffff,
    side: three.DoubleSide
  });

  const mesh_alic2 = new three.Mesh(
    geometry_alic2,
    material_alic2
  );

  mesh_alic2.position.set(0, 2, -10);

  scene.add(mesh_alic2);

  renderer.setAnimationLoop((
    time,
  ) => {
    renderer.render(
      scene,
      camera,
    )

    for (
      let index_vertex = 0;
      index_vertex < vertices_alic2.length;
      ++index_vertex
    ) {
      vertices_alic2[index_vertex] = vertices_alic2[index_vertex] > 0 ? (Math.random() + 0.01) : 0
      buffer_audio.getChannelData(0)[index_vertex * 6] = vertices_alic2[index_vertex]
    }

    geometry_alic2.setAttribute(
      'position',
      new three.BufferAttribute(
        vertices_alic2,
        3
      )
    );
  });

  renderer.domElement.addEventListener('click', function() {
    start_audio_content();
  });

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

