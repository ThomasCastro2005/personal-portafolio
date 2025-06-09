import headerImg from '../assets/imgs/header-img.svg';

export const SectionMain = () => {
    return (
        <>
            <section className="w-full h-[calc(100dvh-64px)]">
                <div className="flex">
                    <div className="basis-2/4 w-full min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center ">
                        <div className="size-77 ">
                            <h1 className="text-neutral-50 text-4xl font-bold font-mono">Welcome to my portafolio</h1>
                            <p className="text-neutral-50 mt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius itaque hic temporibus,
                                eum atque alias velit rerum, distinctio perspiciatis expedita quam culpa provident vero rem.
                                Libero, possimus? Quam, iure dicta.
                            </p>
                            <a
                                className="group relative inline-block overflow-hidden border rounded-full border-indigo-600 px-8 py-3 focus:ring-3 focus:outline-hidden mt-4"
                                href="#"
                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600 transition-all group-hover:w-full"
                                ></span>

                                <span
                                    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                >
                                    About Me
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="basis-3/5 flex justify-center items-center">
                    <img src={headerImg} alt="Astronauta" className='w-3/4'/>
                    </div>
                </div>

            </section>
        </>
    )
}
