import { useFrame, useLoader } from '@react-three/fiber';
import { Html, Sparkles } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { useSpring } from '@react-spring/three';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLocation } from 'wouter';
import { ARE_BOXES_OPEN } from '../main';

// Floaty gift box component
export default function Box({ position, receiver }: { position: Vector3, receiver: string }) {
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
                    To:
                    {ARE_BOXES_OPEN ?
                        <p className='text-xl text-yellow-500 flex' style={{ textShadow: '1px 1px 4px gold' }}>
                            {receiver}
                        </p>
                        :
                        <p className='text-xl text-yellow-500 flex' style={{ textShadow: '1px 1px 4px gold' }}>
                            {receiver[0]}...
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
}
