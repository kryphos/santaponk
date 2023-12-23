import { CameraShake, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BackSide } from "three";

/// Floaty space background
export default function Space({ children }: { children?: React.ReactNode }) {
    return (
        <Canvas className="h-full w-full" camera={{ position: [8, 2, 2] }}>
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
            <Stars
                radius={50}
                depth={300}
                count={3000}
                factor={2}
                saturation={2}
            />

            {/* lightsource */}
            <pointLight
                color={0xffffff}
                intensity={300}
                distance={250}
                position={[10, 10, 10]}
            />

            {children}
        </Canvas>
    );
}
