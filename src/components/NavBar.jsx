import fotoThomas from '../assets/imgs/FOTO_THOMAS.png';

export const NavBar = () => {
    return (
        <>
            <header className="bg-white dark:bg-gray-900/5 pt-7">
                <div className="mx-auto max-w-screen-xl">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <h1 className='text-4xl text-amber-50 font-bold'>Thom<span className='text-indigo-600 font-extrabold'>Dev</span></h1>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Skills
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                </ul>
                            </nav>

                            <div className="relative hidden md:block">
                                <button
                                    type="button"
                                    className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
                                >
                                    <img
                                        src={fotoThomas}
                                        alt=""
                                        className="size-10 object-cover"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
