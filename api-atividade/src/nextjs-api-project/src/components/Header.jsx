import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Meu Projeto Next.js</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/apiinfo">Sobre a API</Link>
                    </li>
                    <li>
                        <Link href="/characters">Personagens</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;