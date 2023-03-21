function Lights() {
    return (
        <>
            <ambientLight intensity={0.05} />
            <directionalLight
                position={[10, 150, 10]}
                castShadow
                shadow-bias={-0.001}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5}
                shadow-camera-far={500.0}
                shadow-camera-left={100}
                shadow-camera-right={-100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            />
        </>
    );
}

export default Lights;
