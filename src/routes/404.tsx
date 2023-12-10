import Typewriter from "../components/Typewriter";

export default function _404Page() {
    return (
        <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
            <h1 className='text-4xl font-bold'>
                <Typewriter letterDelay={60} text='404... How did you even get here?' />
            </h1>
        </div>
    );
}
