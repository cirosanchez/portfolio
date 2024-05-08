import Kotlin from "@/app/component/logo/Kotlin";
import Java from "@/app/component/logo/Java";
import Next from "@/app/component/logo/Next";
import Paper from "@/app/component/logo/Paper";
import ProjectCard from "./ProjectCard";


export default function Introduction(){
    return (
        <div id={"#"}>
            <div className={"pt-20 pl-40 mb-3 font-extrabold text-7xl"}>
                👋 i'm Ciro
            </div>
            <div className={"relative left-44 font-medium text-xl"}>
                A <strong className={"colombian-flag"}>colombian</strong> full stack developer currently focused on enhancing my skills in Next.js
            </div>
            <div className={"mt-20 ml-44 mr-20"}>
                <div className={"font-bold text-5xl"}>Experience</div>
                <div className={"font-light text-xl mt-5"}>My expertise is based in minecraft-related software, since 2021. In 2024 i decided to learn Next.js to enhance my knowledge.</div>
                <div className={"flex flex-col"}>
                    <div id={"tech"}>
                        <div className={"font-bold text-3xl mt-5 text-center"}>Technologies</div>
                        <div>
                            <div className={"flex w-auto flex-row justify-center mt-5"}>
                                <Kotlin
                                    className={"w-20 h-20 ml-5 grayscale hover:grayscale-0 transition-all delay-70 ease-in"}/>
                                <Java
                                    className={"w-20 h-20 ml-5 grayscale hover:grayscale-0 transition-all delay-70 ease-in"}/>
                                <Next
                                    className={"w-20 h-20 ml-5 grayscale hover:grayscale-0 transition-all delay-70 ease-in"}/>
                                <Paper
                                    className={"w-20 h-20 ml-5 grayscale hover:grayscale-0 transition-all delay-70 ease-in"}/>
                            </div>
                        </div>
                    </div>
                    <div id={"projects"} className={""}>
                        <div className={"font-bold text-3xl mt-5 mb-6 text-center"}>Projects</div>
                        <div className={"flex flex-wrap justify-center"}>
                            <ProjectCard name={"???"} description={"???"} price={0} oneliners={["???"]}/>
                            <ProjectCard name={"???"} description={"???"} price={0} oneliners={["???"]}/>
                        </div>
                    </div>
                </div>
                <div className={"text-5xl font-bold text-center"}>Join me on <a className={"text-green-400"} href={"https://discord.cirosanchez.me"}>Discord</a>!</div>
            </div>
        </div>
    )
}