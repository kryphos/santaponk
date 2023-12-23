import { Dialog } from "../components/Dialog";

export default function _404Page() {
    return (
        <div className="flex h-[100vh] w-[100vw] items-center justify-center text-4xl font-bold">
            <Dialog
                instructions={[
                    { text: "404", timeout: 1000, letterDelay: 100 },
                    { text: "...", letterDelay: 400 },
                    {
                        text: "How did u even get here?",
                        timeout: 2000,
                        letterDelay: 50,
                    },
                ]}
            />
        </div>
    );
}
