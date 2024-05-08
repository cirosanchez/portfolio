import Checkmark from "@/app/component/icon/Checkmark";

interface ProjectCardProps {
    name: string,
    description: string,
    price: number,
    oneliners: string[];
}


function ProjectCard(props: ProjectCardProps){
    let name = props.name
    let description = props.description
    let price = props.price
    let oneliners = props.oneliners

    return (
        <div className={" flex flex-col justify-around border border-transparent bg-zinc-800 rounded-3xl w-52 h-72 ml-7 mb-10 hover:"}>
            <div>
                <div className={"text-green-200 text-2xl text-center font-bold"}>
                    {name}
                </div>
                <div className={"text-center text-base font-light text-green-50"}>
                    {description}
                </div>
            </div>
            <div>
                <div className={"text-green-200 text-center text-2xl font-bold"}>
                    Price
                </div>
                <div className={"text-center"}>
                    {"$" + price.toFixed(2)}
                </div>
            </div>

            <div className={"flex flex-col pb-5"}>
                {oneliners.map((oneliner, index) => (
                    <div key={index} className={"flex flex-row gap-3 ml-7"}>
                        <Checkmark className={"w-7 h-7 stroke-green-200"}/>
                        <span className={"w-auto h-7 text-green-50"}>{oneliner}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard