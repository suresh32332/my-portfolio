import Aboutimg from "../assets/aboutimg.jpg";

export default function About() {

    return (
        <section className=" flex bg-primary px-5 text-white">
            <div className="flex-row  w-1/2">
                <img src={Aboutimg} />
            </div>
            <div className=" flex flex-col justify-center ">
                <div className=" flex flex-col justify-center p-3">
                    <h1 className="text-5xl font-bold" >About me </h1>
                    <p>i am suresh </p>
                    <p>i am java full stact developer </p>
                </div>
            </div>

        </section>

    )
}