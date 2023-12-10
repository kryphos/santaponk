import { useRoute } from 'wouter';
import Space from '../components/Space';
import { DATA, Receiver } from '../data';

export default function GiftPage() {
    const [, params] = useRoute("/santaponk/:receiver");
    const data = DATA[params?.receiver as Receiver];

    if (!data) {
        return (
            <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
                <h1 className='text-4xl font-bold'>404</h1>
            </div>
        )
    }

    return (
        <div className='w-[100vw] h-[100vh]'>
            <Space />
        </div >
    );
}
