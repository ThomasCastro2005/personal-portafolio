import fotoThomas from '../assets/imgs/FOTO_THOMAS.png';
import navIcon1 from '../assets/imgs/nav-icon1.svg';
import navIcon2 from '../assets/imgs/nav-icon2.svg';
import navIcon3 from '../assets/imgs/nav-icon3.svg';
import { motion } from "framer-motion";

export const AboutMe = () => {


    return (
        <>
            <section className="w-full min-h-screen bg-black px-23 pt-10 flex">
                <div className="relative max-w-1/2 mx-20 my-auto basis-1/2 animate-flip-up">
                    <div className="rounded overflow-hidden bg-white shadow-[-3px_37px_91px_-28px_rgba(147,_51,_234,_0.5)] max-w-3/4">
                        {/* Imagen de perfil */}
                        <div className="absolute -top-20 -left-20 w-full flex justify-center">
                            <div className="h-40 w-40">
                                <img
                                    src={fotoThomas}
                                    alt="Profile"
                                    className="rounded-full object-cover h-full w-full shadow-md"
                                />
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="px-6 mt-20">
                            <h1 className="font-bold text-3xl text-center mb-1">Thomas Castro</h1>
                            <p className="text-gray-800 text-sm text-center">Software Developer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                Estudiante de Ingeniería de Software y tecnólogo en Análisis y Desarrollo,
                                con experiencia en desarrollo web y backend Java, Spring Boot, React.js, Node.js, Tailwind.
                                He participado en migraciones y pruebas con JMeter, aplicando Scrum. Destaco por proactividad,
                                resolución de problemas y trabajo en equipo.
                            </p>

                            {/* Redes sociales */}
                            <div className="w-full flex justify-center bg-black gap-8 p-3 my-5 rounded-4xl">
                                <motion.a
                                    initial={{ x: -100, opacity: 0 }}         // Comienza fuera de pantalla
                                    whileInView={{ x: 0, opacity: 1, rotate:360 }}        // Llega a su posición final
                                    transition={{ duration: 0.5}} // Suavidad y velocidad
                                    href="#"
                                    className="border border-amber-50 rounded-2xl p-2 hover:bg-indigo-900 transition"
                                >
                                    <img className="w-5" src={navIcon1} alt="" />
                                </motion.a>
                                <motion.a
                                    initial={{ x: -100, opacity: 0 }}         // Comienza fuera de pantalla
                                    whileInView={{ x: 0, opacity: 1, rotate:360 }}        // Llega a su posición final
                                    transition={{ duration: 0.5}} // Suavidad y velocidad
                                    href="#"
                                    className="border border-amber-50 rounded-2xl p-2 hover:bg-indigo-900 transition"
                                >
                                    <img className="w-5" src={navIcon2} alt="" />
                                </motion.a><motion.a
                                    initial={{ x: -100, opacity: 0 }}         // Comienza fuera de pantalla
                                    whileInView={{ x: 0, opacity: 1, rotate:360}}        // Llega a su posición final
                                    transition={{ duration: 0.5}} // Suavidad y velocidad
                                    href="#"
                                    className="border border-amber-50 rounded-2xl p-2 hover:bg-indigo-900 transition"
                                >
                                    <img className="w-5" src={navIcon3} alt="" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Information */}

                <div className="text-amber-50 basis-2/4 flex justify-center items-center">
                    <div className="bg-white overflow-hidden rounded-lg border py-4 px-4 shadow-[-3px_37px_91px_-28px_rgba(147,_51,_234,_0.5)]">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Basic Information
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Esta es alguna información acerca de mi
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Thomas Castro
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        castroothomas902@gmail.com
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        (57) 300-480-3696
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Carrera 128 # 15 - 70<br />
                                        Bogotá, Colombia
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}
