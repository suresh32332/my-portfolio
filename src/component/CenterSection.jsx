import dev from "../assets/dev.jpg";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
export default function CenterSection() {

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className=" md:w-1/2 flex flex-col font-poppins">
        <h1 className="text-white text-5xl ">Hey, I am Suresh
          <p className="text-2xl py-2">  Java full Stack developer </p></h1>
        

        <div className=" flex   py-10">
          <a href="#" className="pr-5 hover:text-white"><CiLinkedin size={40} /></a>
          <a href="#" className="pr-5 hover:text-white"><CiInstagram size={40}/></a>
        <a href="#" className="pr-5 hover:text-white"><CiTwitter size={40}/></a>
        </div>

      </div>
      <img className=" md:w-1/3" src={dev} />
    </section>
  )
}