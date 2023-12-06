import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CameraShake, Html, Sky, Sparkles, Stars } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { useSpring } from '@react-spring/three';
import { BackSide, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLocation } from 'wouter';
import { ARE_BOXES_OPEN } from '../main';

// floaty gift box component
const Box = ({ position, receiver }: { position: Vector3, receiver: string }) => {
    const textPosition = position.clone().add(new Vector3(0, 1.5, 0));

    const boxRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [, navigate] = useLocation();

    // smothly animate scale based on isHovered
    const { scale } = useSpring({
        scale: isHovered ? [1, 1, 1] : [0.7, 0.7, 0.7],
        config: { mass: 3, tension: 300, friction: 30 },
    });

    const gltf = useLoader(GLTFLoader, '/santaponk/box.glb');

    // animation loop
    useFrame(() => {
        if (boxRef.current) {
            // @ts-expect-error no idea why this fails tbh
            boxRef.current.position.y = position.y + Math.sin(Date.now() * 0.001) * 0.1;
            // @ts-expect-error no idea why this fails tbh
            boxRef.current.scale.set(...scale.get());
        }
    });

    const onClickBox = () => {
        if (ARE_BOXES_OPEN) {
            navigate(`/santaponk/${receiver}`, { replace: false });
        }
    };

    return (
        <>
            {/* name label */}
            <Html position={textPosition}>
                <div className='text-xl text-yellow-500 flex' style={{ textShadow: '1px 1px 4px gold' }}>
                    {"To: "}
                    {ARE_BOXES_OPEN ?
                        <p className='text-xl text-yellow-500 flex' style={{ textShadow: '1px 1px 4px gold' }}>
                            {receiver}
                        </p>
                        :
                        <p className='text-xl text-yellow-500 flex blur-sm' style={{ textShadow: '0px 0px 1px gold' }}>
                            ????
                        </p>
                    }
                </div>
            </Html >

            {/* the model itself, suspense is there cuz doc says so */}
            <Suspense fallback={null} >
                <primitive object={gltf.scene.clone()}
                    ref={boxRef}
                    position={position}
                    onPointerOver={() => setIsHovered(true)}
                    onPointerOut={() => setIsHovered(false)}
                    onClick={onClickBox}
                />
            </Suspense >

            {/* ✨✨✨ sparkles ✨✨✨ */}
            <Sparkles
                position={position}
                scale={[2.2, 2.2, 2.2]}
                count={25}
                color={0xFFD700}
                size={15}
                speed={0.5}
                opacity={0.2}
                noise={0.5}
            />
        </>
    );
};

export default function Index() {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Canvas className='w-full h-full' camera={{ position: [8, 2, 2] }} >
                {/* this moves the camera around for the space floaty floaty effect */}
                <CameraShake
                    maxYaw={0.1}
                    maxPitch={0.1}
                    maxRoll={0.1}
                    yawFrequency={0.1}
                    pitchFrequency={0.1}
                    rollFrequency={0.1}
                    intensity={0.4}
                />

                {/* skybox + black mesh, black mash fixes a mobile bug where the sun is
                    still visible cuz ofc mobile is broken again */}
                <Sky
                    distance={450000}
                    inclination={0.5}
                    azimuth={0.25}
                    rayleigh={2}
                    turbidity={10}
                    mieCoefficient={0.005}
                    mieDirectionalG={0.8}
                    sunPosition={[0, 0, 0]}
                />
                <mesh>
                    <boxGeometry args={[1000, 1000, 1000]} />
                    <meshBasicMaterial color={0x000000} side={BackSide} />
                </mesh>

                {/* stars, the sparkling comes from the skybox turbidity */}
                <Stars radius={50} depth={300} count={3000} factor={2} saturation={2} />

                {/* lightsource */}
                <pointLight
                    color={0xffffff}
                    intensity={300}
                    distance={250}
                    position={[10, 10, 10]}
                />

                {/* boxes */}
                <Box position={new Vector3(2, 0, -3)} receiver='doag' />
                <Box position={new Vector3(-1, 1, 5)} receiver='nemu' />
                <Box position={new Vector3(0, -2, 4)} receiver='sana' />
                <Box position={new Vector3(-3, 0, -1)} receiver='smead' />
            </Canvas>
        </div >
    );
}
