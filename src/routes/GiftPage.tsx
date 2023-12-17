import { useRoute } from 'wouter';
import Space from '../components/Space';
import { DATA, Receiver } from '../data';
import _404Page from './404';
import { Dialog } from '../components/Dialog';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import { useReducer } from 'react';

export default function GiftPage() {
    const [, params] = useRoute("/santaponk/:receiver");
    const data = DATA[params?.receiver as Receiver];

    const [dialogEnded, endDialog] = useReducer(() => true, false);

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
                onClick={endDialog}
                style={{ display: dialogEnded ? 'none' : 'inherit' }}
            >
                <Typewriter timeout={7000} letterDelay={200} text="skip" />
            </motion.h1>

            {/* dialog */}
            <div
                className='
                    fixed top-0 left-[20vw] z-10 w-[60vw] h-[100vh] flex flex-col items-center justify-center
                    text-2xl font-bold text-white text-center
                '
                style={{ textShadow: '1px 1px 3px white', display: dialogEnded ? 'none' : 'flex' }}
            >
                <Dialog onComplete={endDialog} instructions={[
                    { text: "...", timeout: 2000, letterDelay: 400 },
                    { timeout: 3000, action: "newpage" },

                    { text: `${data.name}...`, timeout: 1500, letterDelay: 200, action: "newline" },
                    { timeout: 2000, action: "newline" },
                    { text: "you wake up in a strange place", action: "newline" },
                    { text: "a place not yet conquered by you", timeout: 2000, action: "newline" },
                    { text: "this place is called", timeout: 2000, action: "newline" },
                    { timeout: 3000, action: "newline" },
                    { text: "THE INTERNET", letterDelay: 150 },
                    { timeout: 3000, action: "newpage" },

                    { text: "you stare into the vast nothingness", timeout: 2000, action: "newline" },
                    { text: "and see something", timeout: 3500 },
                    { timeout: 3000, action: "newpage" },

                    { text: "Santa Ponk left you a present", timeout: 8000, action: "newline" },
                    { text: "however, ", timeout: 2000, },
                    { text: "it is incomplete", timeout: 2000, action: "newline" },
                    { timeout: 3000, action: "newline" },
                    { text: "it misses something", action: "newline" },
                    { timeout: 4000, action: "newline" },
                    { text: "it misses", action: "newline" },
                    { timeout: 5000, action: "newline" },
                    { text: "you", letterDelay: 500 },
                    { timeout: 3000, action: "newpage" },

                    { text: "a note reads:", timeout: 2000, action: "newline" },
                    { timeout: 5000, action: "newline" },
                    { text: data.message, action: "newline", letterDelay: 105 },
                    { timeout: 8000, action: "newline" },
                    { text: "take a look at the skeleton you now have to shape..." },
                    { timeout: 3000, action: "newpage" },
                ]} />
            </div >

            {/* link page */}
            <motion.div
                className='fixed top-0 left-0 z-10 w-[100vw] h-[100vh]'
                style={{ display: dialogEnded ? 'flex' : 'none' }}
                whileInView={{ opacity: 1 }}
            >
            </motion.div >
        </>
    );
}
