
export const ItemProjects = () => {
    return (
        <>
            <div className="p-4 md:w-1/2 xl:w-1/4">
                <div className="relative p-6 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-900/20 rounded-lg z-0"></div>
                    <div className="relative z-10">
                        <img
                            src="https://dummyimage.com/720x400"
                            alt="content"
                            className="w-full h-40 object-cover object-center rounded mb-6"
                        />
                        <h3 className="text-xs font-medium text-blue-400 tracking-widest">SUBTITLE</h3>
                        <h2 className="text-lg font-medium text-white mb-4">Chichen Itza</h2>
                        <p className="text-base leading-relaxed text-gray-300">
                            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
