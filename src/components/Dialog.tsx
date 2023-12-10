import { animate, motion } from "framer-motion";
import { useEffect, useReducer, useRef, useState } from "react";
import TypeWriter from "./Typewriter";

type DialogInstruction = {
    text?: string,
    timeout?: number,
    letterDelay?: number,
    action?: "newline" | "newpage"
};

// Dialog component, wraps many TypeWriter components along with newlines and page breaks.
export function Dialog({ instructions }: { instructions: DialogInstruction[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);
    const incrementIndex = () => {
        setIndex(index + 1);
    };

    const [elements, setElements] = useState<JSX.Element[]>([]);
    const addElement = (elem: JSX.Element) => {
        setElements([...elements, elem]);
    };

    console.log(index);

    const onNewPage = () => {
        // fade current text out,
        // on complete clear the elements,
        // fade back in and increment index to resume dialog
        animate(containerRef.current!,
            { opacity: 0 },
            {
                duration: 0.75,
                ease: "easeOut",
                onComplete: () => {
                    setElements([]);

                    // 0 caused flicker, so 0.1 it is
                    animate(containerRef.current!, { opacity: 1 }, { duration: 0.1, });

                    incrementIndex();
                }
            }
        );
    };

    useEffect(() => {
        // get next instruction and check if non-null
        const instruction = instructions[index];
        if (instruction === undefined) {
            return;
        }

        // set defaults
        instruction.letterDelay ||= 100;

        // wait timeout ms
        setTimeout(() => {
            const hasText = instruction.text !== undefined && instruction.text !== "";

            addElement(
                <span key={index}>
                    {hasText &&
                        <TypeWriter
                            text={instruction.text!}
                            letterDelay={instruction.letterDelay}
                            onComplete={() => {
                                if (instruction.action === "newpage") {
                                    onNewPage();
                                } else {
                                    incrementIndex();
                                }
                            }}
                        />
                    }
                    {instruction.action === "newline" && <br />}
                </span>
            );

            // if no text, increment index immediately, since onComplete won't be called
            if (!hasText) {
                incrementIndex();
            }
        }, instruction.timeout ?? 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, instructions]);

    return (
        <motion.div ref={containerRef}>
            {elements}
        </motion.div>
    );
}

