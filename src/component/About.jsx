import Aboutimg from "../assets/show.png";

export default function About() {
    const config = {
        name: ' I am Suresh ',
        profileTitle: 'Full Stack Developer',
      profileSummary: ' I am java full stact developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nobis vel quia libero rem natus eum ratione distinctio exercitationem sapiente.',
    }
    return (
        <section id="about" className=" flex flex-col md:flex-row bg-secondary px-5 text-white">
            <div className="flex-row md: w-1/2">
                <img src={Aboutimg} />
            </div>
            <div className=" flex flex-col justify-center ">
                <div className=" flex flex-col justify-center p-3">
                    <h1 className=" border-b-3 border-primary mb-5 w-[180px] text-4xl font-bold" >About me </h1>
                    <p className="pb-5">{config.name}</p>
                    <p className="pb-5">{config.profileTitle} </p>
                    <p className="pb-5">{config.profileSummary}</p>
                </div>
            </div>
        </section>
    )
}