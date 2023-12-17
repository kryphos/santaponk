import { useEffect, useState } from "react";

export type TypeWriterProps = {
    text: string;
    letterDelay?: number;
    timeout?: number;
    onComplete?: () => void;
};

// Typewriter effect, makes the text appear letter by letter.
// If u use more than one of these, use "Dialog" instead.
export default function TypeWriter({
    text,
    timeout = 0,
    letterDelay = 100,
    onComplete = () => { },
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;

        // wait timeout ms
        setTimeout(() => {

            // add a letter every letterDelay ms
            const interval = setInterval(() => {
                setDisplayText(text.substring(0, i));
                i++;

                // if done, report and remove interval
                if (i > text.length) {
                    clearInterval(interval);
                    onComplete();
                }
            }, letterDelay);

        }, timeout);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, timeout, letterDelay]);

    return displayText;
}
