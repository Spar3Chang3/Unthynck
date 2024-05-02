import React, { useEffect, useRef } from 'react';
import * as t from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/ObJLoader"

export default function RenderRetro({ modelPath }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new t.Scene();
        const camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new t.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const loader = new OBJLoader();
        loader.load(modelPath, (obj) => {
            scene.add(obj.scene);
        });

        // Simple Lighting
        const light = new t.AmbientLight(0xffffff, 0.5); // Soft ambient light
        scene.add(light);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        mountRef.current.appendChild(renderer.domElement);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => mountRef.current.removeChild(renderer.domElement);
    }, [modelPath]);

    return (
        <div ref={mountRef}/>
    )
}