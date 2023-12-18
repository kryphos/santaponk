import { Vector3 } from 'three';
import Space from '../components/Space';
import Box from '../components/Box';
import { useMediaQuery } from 'react-responsive';

export default function Index() {
    const screenTooSmoll = !useMediaQuery({ minWidth: 1000, minHeight: 750 });

    return (
        <div className='w-[100vw] h-[100vh]'>
            {screenTooSmoll ? (<>
                <Space />
                <div
                    className='
                        fixed top-0 left-[10vw] z-10 w-[80vw] h-[100vh] flex flex-col items-center justify-center
                        text-2xl font-bold text-white text-center
                    '
                    style={{ textShadow: '1px 1px 3px white' }}
                >
                    <h1>Your screen is too smoll.</h1>
                </div>
            </>) : (<>
                <Space>
                    <Box position={new Vector3(2, 0, -3)} receiver='doag' />
                    <Box position={new Vector3(-1, 1, 5)} receiver='nemu' />
                    <Box position={new Vector3(0, -2, 4)} receiver='sana' />
                    <Box position={new Vector3(-3, 0, -1)} receiver='smead' />
                    <Box position={new Vector3(2, -3, 0)} receiver='mangrove' />
                </Space >
            </>)}
        </div >
    );
}
