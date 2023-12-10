import { useRoute } from 'wouter';
import Space from '../components/Space';
import { DATA, Receiver } from '../data';
import _404Page from './404';
import { Dialog } from '../components/Dialog';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';

export default function GiftPage() {
    const [, params] = useRoute("/santaponk/:receiver");
    const data = DATA[params?.receiver as Receiver];

    // render a 404 if the receiver is not found
    return !data ? (<_404Page />) : (
        <>
            {/* background */}
            <div className='w-[100vw] h-[100vh]' >
                <Space />
            </div >

            {/* skip button */}
            <motion.h1
                className='fixed bottom-6 right-6 z-10 font-bold text-white cursor-pointer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <Typewriter timeout={3500} letterDelay={100} text="skip" />
            </motion.h1>

            {/* dialog */}
            <div
                className='
                    fixed top-0 left-[25vw] z-10 w-[50vw] h-[100vh] flex flex-col items-center justify-center
                    text-4xl font-bold text-white text-center
                '
                style={{ textShadow: '1px 1px 3px white' }}
            >
                <Dialog instructions={[
                    { text: `${data.name}...`, timeout: 2000, letterDelay: 200 },
                ]} />
            </div>
        </>
    );
}
