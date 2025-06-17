import { ItemProjects } from "./ItemProjects"

export const ProjectsSection = () => {
    return (
        <>
            <section className="bg-black text-gray-400 body-font px-23">
                <div className="container mx-auto px-5 py-24">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                            <h1 className="text-5xl font-medium title-font text-white mb-2 flex">
                                My development<p className="font-bold text-6xl text-indigo-600 animate-bounce pl-3">Projects</p>
                            </h1>
                            <div className="h-1 w-20 bg-blue-500 rounded"></div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="leading-relaxed text-gray-400 text-opacity-90">
                                En esta sección muestro los proyectos que he desarrollado durante mi aprendizaje. 
                                Cada uno refleja las habilidades que he adquirido y las tecnologías que he utilizado, 
                                demostrando cómo aplico mis conocimientos para resolver problemas reales y construir 
                                soluciones funcionales.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                        <ItemProjects />
                    </div>
                </div>
            </section>

        </>
    )
}
