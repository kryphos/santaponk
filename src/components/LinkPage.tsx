import {
    IconBrandDiscord,
    IconBrandTwitch,
    IconBrandX,
    IconBrandYoutube,
    IconLink,
} from "@tabler/icons-react";
import { ReceiverDetails } from "../data";
import { ReactElement } from "react";
import { motion } from "framer-motion";

const COMMON_NAME_TO_ICON: Record<string, ReactElement> = {
    Twitter: <IconBrandX />,
    Twitch: <IconBrandTwitch />,
    YouTube: <IconBrandYoutube />,
    Discord: <IconBrandDiscord />,
};

type LinkProps = {
    name: string;
};

function Link({ name }: LinkProps) {
    const icon = COMMON_NAME_TO_ICON[name] || <IconLink />;

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
                flex w-60 cursor-pointer items-center justify-center gap-4 rounded-sm bg-red-50
                p-4 text-xl font-bold text-white
            "
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
            <span>{icon}</span>
            {name}
        </motion.div>
    );
}

export type LinkPageProps = {
    for: ReceiverDetails;
};

export default function LinkPage({ for: user }: LinkPageProps) {
    return (
        <div
            className="flex h-[75vh] w-[42vw] flex-col items-center gap-8 border-white p-8 backdrop-blur-[1px]"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
            {/* header */}
            <div
                className="
                mt-8 w-1/2 skew-x-[-12deg] rounded-sm border-b-[1px]
                border-t-[1px] border-white p-10 text-center text-5xl text-white
            "
            >
                {user.name}
            </div>

            {/* links */}
            <div className="flex h-[100%] w-[100%] items-center justify-center">
                <div className="flex flex-wrap justify-evenly gap-8">
                    <Link name="Twitter" />
                    <Link name="Twitch" />
                    <Link name="YouTube" />
                    <Link name="Discord" />
                    <Link name="Throne" />
                </div>
            </div>
        </div>
    );
}
