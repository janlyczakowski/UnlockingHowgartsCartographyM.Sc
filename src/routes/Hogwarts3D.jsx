import { useEffect, useState, React } from 'react';

import { Html, useProgress, Line } from '@react-three/drei';

import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import hogwarts from '../resources/hogwarts/hogwarts_terrain.gltf';
import styles from './Hogwarts3D.module.css';

import Lights from '../Lights';
import Text from '../Text';

// in react fiber camera, scene and rendering are embedded within Canvas element
function CameraController() {
    console.log('I am rendered');
    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);

        controls.minPolarAngle = Math.PI * 0.3;
        // controls.maxPolarAngle = Math.PI * 0.3; // how far vertically
        controls.maxPolarAngle = Math.PI * 0.4; // how far vertically
        controls.minAzimuthAngle = Math.PI * 0.3; // horizontal range min must be between [-2PI, 2PI]
        // controls.maxAzimuthAngle = Math.PI * 0.3; // horizontal range min must be between [-2PI, 2PI]
        controls.maxAzimuthAngle = Math.PI * 0.6; // horizontal range max must be between [-2PI, 2PI]
        controls.maxDistance = 65; // max zoom out 90
        controls.minDistance = 45; // max zoom in
        controls.enabled = false;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
}

function HogwartScene() {
    const gltf = useLoader(GLTFLoader, hogwarts);
    gltf.scene.traverse((obj) => {
        obj.name = 'castle';
        if (obj.isMesh && obj.name === 'castle') {
            // #4173c8//#c89941//#c8bb41//#c85541//#af7d5c//#ffb381//#ffcaa1//#ffe1c7
            obj.material.color.set('#ffe1c7');
        }
    });
    return <primitive object={gltf.scene} scale={[0.1, 0.1, 0.1]} position={[-10, -11, 50]} />;
}

function Hogwarts3D() {
    const [greatHall, setGreatHall] = useState(false);
    const [library, setLibrary] = useState(false);
    const [darkArts, setDarkArts] = useState(false);

    console.log(greatHall);
    return (
        <div className={styles.wrapper}>
            <Canvas camera={{ fov: 24, near: 1.0, far: 1000, position: [60, 20, 15] }} shadows>
                <Lights />
                <CameraController />

                <HogwartScene />

                <Text
                    content="The Great Hall"
                    position={[8, 8, 17]}
                    boxPosition={[8.3, 8.4, 13.8]}
                    boxSize={[6.6, 1, 1.2]}
                    rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0 * (Math.PI / 180)]}
                    size={0.8}
                    name="The Great Hall"
                    setVisibility={setGreatHall}
                />
                {greatHall && (
                    <Line
                        points={[
                            [8, 7.5, 13.5],
                            [8, 4.5, 13.5]
                        ]}
                        color="rgb(0,0,0)"
                        lineWidth={2}
                    />
                )}

                <Text
                    content="Library"
                    position={[2, 9, 5]}
                    boxPosition={[2.6, 9.3, 3.2]}
                    boxSize={[4, 1.3, 1.2]}
                    rotation={[0 * (Math.PI / 180), 80 * (Math.PI / 180), 0 * (Math.PI / 180)]}
                    size={1}
                    name="Library"
                    setVisibility={setLibrary}
                />
                {library && (
                    <Line
                        points={[
                            [2.5, 8.5, 3],
                            [2.5, 4.5, 3]
                        ]}
                        color="rgb(0,0,0)"
                        lineWidth={2}
                    />
                )}

                <Text
                    content="Defence Against"
                    position={[14, 13, -6]}
                    boxPosition={[15.9, 12.8, -8.7]}
                    boxSize={[7, 2, 1.2]}
                    rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0 * (Math.PI / 180)]}
                    size={0.8}
                    name="Defence Against the Dark Arts"
                    setVisibility={setDarkArts}
                />
                <Text
                    content="the Dark Arts"
                    position={[14.3, 12, -6.5]}
                    rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0 * (Math.PI / 180)]}
                    size={0.8}
                    name="Defence Against the Dark Arts"
                    setVisibility={setDarkArts}
                />
                {darkArts && (
                    <Line
                        points={[
                            [15, 11.5, -8.5],
                            [15, 4, -8.5]
                        ]}
                        color="rgb(0,0,0)"
                        lineWidth={2}
                    />
                )}
            </Canvas>
        </div>
    );
}

export default Hogwarts3D;
