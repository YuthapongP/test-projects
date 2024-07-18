import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import globeImg from "../../public/img/jeremy-thomas-E0AHdsENmDg-unsplash.jpg";

function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000); // Start with aspect ratio 1
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true, // Enable antialiasing for smoother edges
    });

    // Load the earth texture (with error handling)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      globeImg, // Adjust the path if necessary
      (texture) => {
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshStandardMaterial({ map: texture }); // Use MeshStandardMaterial for better lighting
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const ambientLight = new THREE.AmbientLight(0x808080);
        scene.add(ambientLight);

        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight1.position.set(5, 3, 5);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight2.position.set(-5, -3, -5);

        scene.add(directionalLight1, directionalLight2);

        camera.position.z = 5;

        const handleResize = () => {
          const width = canvasRef?.current?.clientWidth;
          const height = canvasRef?.current?.clientHeight;
          console.log(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);

        const animate = () => {
          requestAnimationFrame(animate);
          sphere.rotation.y += 0.005;
          renderer.render(scene, camera);
        };

        handleResize();
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

export default Globe;
