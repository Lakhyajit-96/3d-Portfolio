import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  const handleClick = () => {
    setIsClicked(true);
    // Trigger a special animation or effect
    if (actions["Take 001"]) {
      actions["Take 001"].reset().play();
    }
    
    // Reset click state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <mesh 
      {...props} 
      ref={ref}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={scene} />
      
      {/* Add a subtle glow effect when hovered */}
      {hovered && (
        <mesh>
          <sphereGeometry args={[2, 16, 16]} />
          <meshBasicMaterial 
            color="#00c6ff" 
            transparent 
            opacity={0.1} 
            wireframe 
          />
        </mesh>
      )}
    </mesh>
  );
}
