import { Dialog } from "../components/Dialog";

export default function _404Page() {
    return (
        <div className='w-[100vw] h-[100vh] flex items-center justify-center text-4xl font-bold'>
            <Dialog instructions={[
                { text: "404", timeout: 1000, letterDelay: 100 },
                { text: "...", letterDelay: 400 },
                { text: "How did u even get here?", timeout: 2000, letterDelay: 50 },
            ]} />
        </div>
    );
}
