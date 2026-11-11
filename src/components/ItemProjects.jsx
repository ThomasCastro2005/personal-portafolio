
export const ItemProjects = ({ categoria, titulo, descripcion, imagen, url }) => {
    return (
        <>
            <div className="p-4 md:w-1/2 xl:w-1/4">
                <a href={url} target="_blank" rel="noreferrer" className="block relative p-6 rounded-lg overflow-hidden h-full">
                    <div className="absolute inset-0 bg-indigo-900/20 rounded-lg z-0"></div>
                    <div className="relative z-10">
                        <img
                            src={imagen}
                            alt={titulo}
                            className="w-full h-40 object-cover object-center rounded mb-6"
                        />
                        <h3 className="text-xs font-medium text-blue-400 tracking-widest">{categoria}</h3>
                        <h2 className="text-lg font-medium text-white mb-4">{titulo}</h2>
                        <p className="text-base leading-relaxed text-gray-300">
                            {descripcion}
                        </p>
                    </div>
                </a>
            </div>


        </>
    )
}
