import { ItemSkill } from "./itemSkill"
import reactIcon from '../assets/imgs/reactIcon.png';
import tailwindIcon from '../assets/imgs/tailwind.png';
import nodeIcon from '../assets/imgs/node.png';
import javaIcon from '../assets/imgs/java.png';
import springbootIcon from '../assets/imgs/springboot.png';
import sqlIcon from '../assets/imgs/sql.png';

export const SkillsSection = () => {
    return (
        <>
        <h1 className="text-center text-neutral-50 text-4xl font-bold font-mono bg-black/97 pt-6">Skills</h1>
            <div className="w-full flex justify-center pt-8 pb-20 bg-black/97">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-60 gap-y-10">

                    <ItemSkill
                        name="React JS"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-cyan-900 via-cyan-700 to-cyan-500"
                        img={reactIcon}
                    />
                    <ItemSkill
                        name="Tailwindcss"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-cyan-900 via-cyan-700 to-cyan-500"
                        img={tailwindIcon}
                    />
                    <ItemSkill
                        name="Node js"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-green-900 via-green-700 to-green-500"
                        img={nodeIcon}
                    />
                    <ItemSkill
                        name="Java"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-red-1000 via-red-800 to-red-500"
                        img={javaIcon}
                    />
                    <ItemSkill
                        name="SpringBoot"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-green-800 via-green-600 to-green-400"
                        img={springbootIcon}
                    />
                    <ItemSkill
                        name="SQL"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        gradient="from-orange-900 via-orange-700 to-orange-500"
                        img={sqlIcon}
                    />
                </div>
            </div>
        </>
    )
}
