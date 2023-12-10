import { Vector3 } from 'three';
import Space from '../components/Space';
import Box from '../components/Box';

export default function Index() {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Space>
                <Box position={new Vector3(2, 0, -3)} receiver='doag' />
                <Box position={new Vector3(-1, 1, 5)} receiver='nemu' />
                <Box position={new Vector3(0, -2, 4)} receiver='sana' />
                <Box position={new Vector3(-3, 0, -1)} receiver='smead' />
            </Space>
        </div >
    );
}
