import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CameraShake, Html, Sky, Sparkles, Stars } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { useSpring } from '@react-spring/three';
import { BackSide, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Box = ({ position }: { position: Vector3 }) => {
    const boxRef = useRef();

    const [isHovered, setIsHovered] = useState(false);

    const textPosition = position.clone().add(new Vector3(0, 1.5, 0));

    const { scale } = useSpring({
        scale: isHovered ? [1, 1, 1] : [0.7, 0.7, 0.7],
        config: { mass: 3, tension: 300, friction: 30 },
    });

    const gltf = useLoader(GLTFLoader, '/santaponk/GiftBox.glb');

    useFrame(() => {
        if (boxRef.current) {
            // @ts-expect-error no idea why this fails tbh
            boxRef.current.position.y = position.y + Math.sin(Date.now() * 0.001) * 0.1;
            // @ts-expect-error no idea why this fails tbh
            boxRef.current.scale.set(...scale.get());
        }
    });

    return (
        <>
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
            <Html position={textPosition}>
                <p className='text-xl text-yellow-500 flex' style={{ textShadow: '1px 1px 3px gold' }}>
                    To:
                    <p className='text-xl text-yellow-500 flex blur-sm' style={{ textShadow: '0px 0px 1px gold' }}>
                        ??????
                    </p>
                </p>
            </Html>
            <Suspense fallback={null}>
                <primitive
                    object={gltf.scene.clone()}
                    ref={boxRef}
                    position={position}
                    onPointerOver={() => setIsHovered(true)}
                    onPointerOut={() => setIsHovered(false)}
                />
            </Suspense>
        </>
    );
};

export default function Index() {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Canvas className='w-full h-full' camera={{ position: [8, 2, 2] }} >
                <CameraShake
                    maxYaw={0.1}
                    maxPitch={0.1}
                    maxRoll={0.1}
                    yawFrequency={0.1}
                    pitchFrequency={0.1}
                    rollFrequency={0.1}
                    intensity={0.4}
                />

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

                <Stars radius={50} depth={300} count={3000} factor={2} saturation={2} />

                <pointLight
                    color={0xffffff}
                    intensity={300}
                    distance={250}
                    position={[10, 10, 10]}
                />

                <Box position={new Vector3(2, 0, -3)} />
                <Box position={new Vector3(-1, 1, 5)} />
                <Box position={new Vector3(0, -2, 4)} />
                <Box position={new Vector3(-3, 0, -1)} />
            </Canvas>
        </div >
    );
}
