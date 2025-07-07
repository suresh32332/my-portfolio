import Aboutimg from "../assets/show.png";

export default function Resume() {

    return (
        <section  id ="resume" className=" flex flex-col md:flex-row bg-secondary px-5 text-white">
            <div className="py-5 md: w-1/2 flex justify-center md:justify-end">
                <img className="w-[400px]" src={Aboutimg} />
            </div>
            <div className=" flex flex-col justify-center ">
                <div className=" flex flex-col justify-center p-3">
                    <h1 className=" border-b-3 border-primary mb-5 w-[140px] text-4xl font-bold" >Resume </h1>
                    <p className="pb-5">You can view my Resume<a className="dbtn" href="#"> Download</a> </p>
                </div>
            </div>

        </section>

    )
}