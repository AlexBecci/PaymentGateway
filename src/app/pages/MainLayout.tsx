import { ReactNode } from 'react';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='min-h-screen w-full flex flex-col'>
            <div className='flex-1 flex  justify-center items-center'>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <h1>Bitnovo Payment Gateway</h1>
        </div>
    )
}
