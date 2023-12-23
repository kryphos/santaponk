import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react";

export default function GithubBadge() {
    return (
        <motion.div
            className="fixed bottom-4 right-4 z-10 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <a
                href="https://github.com/kryphos/santaponk"
                className="flex items-center gap-3"
                target="_blank"
            >
                <IconBrandGithub /> source code
            </a>
        </motion.div>
    );
}
