

export const ItemSkill = ({ name, description, gradient, img }) => {
    return (
        <>
            <div className="w-[300px] h-[260px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-xs overflow-hidden flex flex-col hover:scale-110 transition">
                <div className={`overflow-hidden h-2/4 bg-gradient-to-br ${gradient}`}>
                <img src={img} className="w-40 relative left-1 top-2" />
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                        <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                            {description}
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between py-0.5">
                            <span className="text-xs text-gray-lite font-semibold dark:text-[#A6A6A6]">
                                Web Design
                            </span>
                            <span className="text-xs font-semibold text-gray-lite pr-2 dark:text-[#A6A6A6]">
                                80%
                            </span>
                        </div>
                        <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                            <path
                                className="rc-progress-line-trail"
                                d="M 0.5,0.5 L 99.5,0.5"
                                strokeLinecap="round"
                                stroke="#D9D9D9"
                                strokeWidth="1"
                                fillOpacity="0"
                            />
                            <path
                                className="rc-progress-line-path"
                                d="M 0.5,0.5 L 99.5,0.5"
                                strokeLinecap="round"
                                stroke="#FF6464"
                                strokeWidth="1"
                                fillOpacity="0"
                                style={{
                                    strokeDasharray: "79.2px, 100px",
                                    strokeDashoffset: "0px",
                                    transition: "stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s linear"
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </div>


        </>
    )
}
