import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
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
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 Bitnovo</p>
        </footer>
    );
}