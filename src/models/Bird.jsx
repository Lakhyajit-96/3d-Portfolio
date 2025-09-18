import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    // Trigger a special animation
    if (actions["Take 001"]) {
      actions["Take 001"].reset().play();
    }
    
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

    // Add extra movement when clicked
    if (isClicked) {
      birdRef.current.position.y += Math.sin(clock.elapsedTime * 5) * 0.1;
    }
  });

  return (
    <mesh 
      ref={birdRef} 
      position={[-5, 2, 1]} 
      scale={hovered ? [0.0035, 0.0035, 0.0035] : [0.003, 0.003, 0.003]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* to create and display 3D objects */}
      <primitive object={scene} />
      
      {/* Add a trail effect when hovered */}
      {hovered && (
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial 
            color="#ff6b6b" 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      )}
    </mesh>
  );
}
