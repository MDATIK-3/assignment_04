import Logo from '../assets/logo';

const Header = ({ route, setRoute }) => {
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <Logo />
            </div>
            <nav className="ml-4 text-sm text-zinc-400 flex gap-8">
                <button
                    onClick={() => setRoute('create')}
                    className={`hover:text-zinc-200 transition-all cursor-pointer ${route === 'create' ? 'font-medium text-zinc-200' : ''
                        }`}
                >
                    Create Image
                </button>
                <button
                    onClick={() => setRoute('text')}
                    className={`hover:text-zinc-200 transition-all ${route === 'text' ? 'font-medium text-zinc-200' : ''
                        }`}
                >
                    Generate Text
                </button>
                <button
                    onClick={() => setRoute('download')}
                    className={`hover:text-zinc-200 transition-all cursor-pointer ${route === 'download' ? 'font-medium text-zinc-200' : ''
                        }`}
                >
                    Downloaded
                </button>
            </nav>
        </header>
    );
};

export default Header;