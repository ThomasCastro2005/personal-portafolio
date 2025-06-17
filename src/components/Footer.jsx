
export const Footer = () => {
    return (
        <>
            <footer className="text-gray-400 bg-black/99 body-font shadow-[inset_-4px_25px_87px_-50px_rgba(147,_51,_234,_0.5)]">
                <div className="py-24 flex gap-30 px-23">
                    <div className="w-64 flex-shrink-0 mx-auto my-auto text-center md:text-left">
                        <a className="flex items-center justify-center md:justify-start text-white">
                            <div className="bg-indigo-800 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>

                            </div>
                            <h1 className='pl-2 text-4xl text-amber-50 font-bold'>Thom<span className='text-indigo-600 font-extrabold'>Dev</span></h1>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Construyendo proyectos con pasión y propósito.</p>
                    </div>

                    <div className="flex-grow flex flex-wrap md:pl-20 mt-10 md:mt-0 text-center md:text-left">
                        {/* Sección de links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <h2 className="text-sm font-medium text-white tracking-widest mb-3">PROYECTOS</h2>
                            <nav className="list-none space-y-2">
                                <li><p href="#" className="hover:text-white">Proyecto 1</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 2</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 3</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 4</p></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <h2 className="text-sm font-medium text-white tracking-widest mb-3">PROYECTOS</h2>
                            <nav className="list-none space-y-2">
                                <li><p href="#" className="hover:text-white">Proyecto 1</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 2</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 3</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 4</p></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <h2 className="text-sm font-medium text-white tracking-widest mb-3">PROYECTOS</h2>
                            <nav className="list-none space-y-2">
                                <li><p href="#" className="hover:text-white">Proyecto 1</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 2</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 3</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 4</p></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <h2 className="text-sm font-medium text-white tracking-widest mb-3">PROYECTOS</h2>
                            <nav className="list-none space-y-2">
                                <li><p href="#" className="hover:text-white">Proyecto 1</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 2</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 3</p></li>
                                <li><p href="#" className="hover:text-white">Proyecto 4</p></li>
                            </nav>
                        </div>

                    </div>
                </div>

                <div className="bg-black px-20">
                    <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center">
                        <p className="text-sm text-gray-400 text-center sm:text-left">
                            © 2025 Oscar Thomas Castro Suarez —
                            <a href="#" className="text-gray-500 ml-1 hover:underline">@thomasCastro</a>
                        </p>
                        <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start">
                            {/* <!-- Iconos de redes sociales --> */}
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"></svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}
