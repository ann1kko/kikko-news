import Link from 'next/link';
import { SearchBar } from './SearchBar';

export function Header() {
    return (
        <header className="mt-4 mb-10">
            <div className="container flex items-center justify-center sm:justify-between">
                <nav>
                    <Link
                        className="font-playfair hidden items-center gap-2 text-base font-bold sm:flex"
                        href="/">
                        <span className="bg-primary block rounded-md p-2 text-white">
                            Kikko
                        </span>
                        Portal
                    </Link>
                </nav>

                <SearchBar />
            </div>
        </header>
    );
}
