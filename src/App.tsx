import { motion } from "framer-motion";

function App() {
    return (
        <div
            className="w-[100vw] h-[100vh] flex items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="text-4xl font-bold text-white" style={{ textShadow: "4px 4px 12px red", }}>
                    🎄 Coming Soon 🎄
                </h1>
            </motion.div>
        </div>
    );
}

export default App;
