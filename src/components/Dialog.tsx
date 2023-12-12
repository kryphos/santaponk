import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "./Typewriter";

export type DialogInstruction = {
    text?: string,
    timeout?: number,
    letterDelay?: number,
    action?: "newline" | "newpage"
};

export type DialogProps = {
    instructions: DialogInstruction[]
    onComplete?: () => void
};

// Dialog component, wraps many TypeWriter components along with newlines and page breaks.
export function Dialog({ instructions, onComplete: onDialogComplete }: DialogProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);

    const [elements, setElements] = useState<JSX.Element[]>([]);
    const addElement = (elem: JSX.Element) => {
        setElements([...elements, elem]);
    };

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

                    setIndex(index + 1);
                }
            }
        );
    };

    useEffect(() => {
        // get next instruction and check if non-null
        const instruction = instructions[index];
        if (instruction === undefined) {
            // were done, call onComplete if defined 
            // dumb syntax, obj.prop and obj() but obj?.prop and obj?.() ??? why
            onDialogComplete?.();
            return;
        }

        // callback for when the instruction is executed
        const onComplete = () => {
            if (instruction.action === "newpage") {
                onNewPage();
            } else {
                setIndex(index + 1);
            }
        };

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
                            onComplete={onComplete}
                        />
                    }
                    {instruction.action === "newline" && <br />}
                </span>
            );

            // if no text, directly call onComplete
            if (!hasText) {
                onComplete();
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

