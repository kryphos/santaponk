import { Vector3 } from "three";
import Space from "../components/Space";
import Box from "../components/Box";
import { useMediaQuery } from "react-responsive";

export default function Index() {
    const screenTooSmoll = !useMediaQuery({ minWidth: 1000, minHeight: 750 });

    return (
        <div className="h-[100vh] w-[100vw]">
            {screenTooSmoll ? (
                <>
                    <Space />
                    <div
                        className="
                        fixed left-[10vw] top-0 z-10 flex h-[100vh] w-[80vw] flex-col items-center justify-center
                        text-center text-2xl font-bold text-white
                    "
                        style={{ textShadow: "1px 1px 3px white" }}
                    >
                        <h1>Your screen is too smoll.</h1>
                    </div>
                </>
            ) : (
                <>
                    <Space>
                        <Box position={new Vector3(2, 1, -3)} receiver="doag" />
                        <Box position={new Vector3(-1, 2, 5)} receiver="nemu" />
                        <Box position={new Vector3(0, -1, 4)} receiver="sana" />
                        <Box
                            position={new Vector3(-3, 1, -1)}
                            receiver="smead"
                        />
                        <Box
                            position={new Vector3(2, -2, 0)}
                            receiver="mangrove"
                        />
                    </Space>
                </>
            )}
        </div>
    );
}
