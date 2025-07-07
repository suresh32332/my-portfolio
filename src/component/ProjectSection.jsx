import dev from "../assets/edu.png";

export default function ProjectSection() {
    const config = {
        projects: [
            {
                image: dev,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis a, similique nam impedit eveniet magnam..',
                link: ''
            },
            {
                image: dev,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis a, similique nam impedit eveniet magnam.',
                link: ''
            },
            {
                image: dev,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis a, similique nam impedit eveniet magnam',
                link: ''
            }
        ]
    }

    return (

        // <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-cente
        <section id="project" className="flex flex-col py-10  bg-primary justify-center">
            <div className="w-full">
                <div className="flex flex-col px-5">
                    <h1 className=" border-b-3 border-primary mb-5 w-[140px] text-4xl font-bold " >Projects  </h1>
                    <p className=" text-white py-3 ">define the project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias perspiciatis animi, facere reiciendis ipsa labore similique et.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row  px-5 gap-6  text-white">
                    {config.projects.map((project) =>
                        <div className="relative">
                            <img className="h-[200px] w-[400px]" src={project.image} />
                            <div className="project-dec bg-secondary">
                                <p className='text-center py-2' >{project.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section >



    )
}