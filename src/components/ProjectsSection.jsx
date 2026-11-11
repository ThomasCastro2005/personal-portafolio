import { useEffect, useState } from "react"
import { ItemProjects } from "./ItemProjects"

export const ProjectsSection = () => {
    // Los proyectos llegan del contenedor "api" a través del proxy /api de Nginx
    const [projects, setProjects] = useState([])
    const [apiStatus, setApiStatus] = useState("cargando")

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then((data) => {
                setProjects(data)
                setApiStatus("conectada")
            })
            .catch(() => setApiStatus("sin conexión"))
    }, [])

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

                    <p id="api-status" className="mb-8 text-sm">
                        Estado de la API:{" "}
                        <span className={apiStatus === "conectada" ? "text-green-400" : "text-amber-400"}>
                            {apiStatus}
                        </span>
                    </p>

                    <div className="flex flex-wrap -m-4">
                        {projects.map((project) => (
                            <ItemProjects key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
