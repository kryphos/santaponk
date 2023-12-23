import { useRoute } from "wouter";
import Space from "../components/Space";
import { DATA, Receiver } from "../data";
import _404Page from "./404";
import { Dialog } from "../components/Dialog";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { useReducer } from "react";
import LinkPage from "../components/LinkPage";
import GithubBadge from "../components/GithubBadge";

export default function GiftPage() {
    const [, params] = useRoute("/santaponk/:receiver");
    const data = DATA[params?.receiver as Receiver];

    const [dialogEnded, endDialog] = useReducer(() => true, false);

    // render a 404 if the receiver is not found
    return !data ? (
        <_404Page />
    ) : (
        <>
            {/* background */}
            <div className="h-[100vh] w-[100vw]">
                <Space />
            </div>

            {/* skip button */}
            <motion.h1
                className="fixed bottom-6 right-6 z-10 cursor-pointer font-bold text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={endDialog}
                style={{ display: dialogEnded ? "none" : "inherit" }}
            >
                <Typewriter timeout={7000} letterDelay={200} text="skip" />
            </motion.h1>

            {/* dialog */}
            <div
                className="
                    fixed left-[20vw] top-0 z-10 flex h-[100vh] w-[60vw] flex-col items-center
                    justify-center text-center text-2xl font-bold text-white
                "
                style={{
                    textShadow: "1px 1px 3px white",
                    display: dialogEnded ? "none" : "flex",
                }}
            >
                <Dialog
                    onComplete={endDialog}
                    instructions={[
                        { text: "...", timeout: 2000, letterDelay: 400 },
                        { timeout: 3000, action: "newpage" },

                        {
                            text: `${data.name}...`,
                            timeout: 1500,
                            letterDelay: 200,
                            action: "newline",
                        },
                        { timeout: 2000, action: "newline" },
                        {
                            text: "you wake up in a strange place",
                            action: "newline",
                        },
                        {
                            text: "a place not yet conquered by you",
                            timeout: 2000,
                            action: "newline",
                        },
                        {
                            text: "this place is called",
                            timeout: 2000,
                            action: "newline",
                        },
                        { timeout: 3000, action: "newline" },
                        { text: "THE INTERNET", letterDelay: 150 },
                        { timeout: 3000, action: "newpage" },

                        {
                            text: "you stare into the vast nothingness",
                            timeout: 2000,
                            action: "newline",
                        },
                        { text: "and see something", timeout: 3500 },
                        { timeout: 3000, action: "newpage" },

                        {
                            text: "Santa Ponk left you a present",
                            timeout: 8000,
                            action: "newline",
                        },
                        { text: "however, ", timeout: 2000 },
                        {
                            text: "it is incomplete",
                            timeout: 2000,
                            action: "newline",
                        },
                        { timeout: 3000, action: "newline" },
                        { text: "it misses something", action: "newline" },
                        { timeout: 4000, action: "newline" },
                        { text: "it misses", action: "newline" },
                        { timeout: 5000, action: "newline" },
                        { text: "you", letterDelay: 500 },
                        { timeout: 3000, action: "newpage" },

                        {
                            text: "a note reads:",
                            timeout: 2000,
                            action: "newline",
                        },
                        { timeout: 5000, action: "newline" },
                        {
                            text: data.message,
                            action: "newline",
                            letterDelay: 105,
                        },
                        { timeout: 8000, action: "newline" },
                        {
                            text: "take a look at the boring thing you now have to make your own...",
                        },
                        { timeout: 3000, action: "newpage" },
                    ]}
                />
            </div>

            {/* link page */}
            <motion.div
                className="fixed left-0 top-0 z-10 h-[100vh] w-[100vw] items-center justify-center"
                style={{ display: dialogEnded ? "flex" : "none" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            >
                <LinkPage for={data} />
                <GithubBadge />
            </motion.div>
        </>
    );
}
