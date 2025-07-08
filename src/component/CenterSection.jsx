import dev from "../assets/show.png";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function CenterSection() {
  const config = {
    title: 'Java full Stack developer ',
    social: {
      linkedin: 'https://www.linkedin.com/in/suresh32/',
      githuh: 'https://github.com/suresh32332',
      instagram: '#',
      twitter: '#'
    }
  }

  return (
    <section id="centersection" className="flex flex-col md:flex-row px-5 py-16 bg-primary justify-center">
      <div className=" md:w-1/2 flex flex-col font-poppins">
        <h1 className="text-white text-5xl ">Hey, I am Suresh
          <p className="text-2xl py-2">  </p>{config.title}</h1>
        <div className=" flex   py-6">
          <a href={config.social.linkedin} target="_blank" className="pr-5 hover:text-white"><CiLinkedin size={40} /></a>
          <a href={config.social.githuh}  target="_blank" className="pr-5 hover:text-white"><FaGithub size={40} /></a>
          <a href={config.social.instagram} target="_blank" className="pr-5 hover:text-white"><CiInstagram size={40} /></a>
          <a href={config.social.twitter} target="_blank" className="pr-5 hover:text-white"><CiTwitter size={40} /></a>
        </div>

      </div>
      <img className=" md:w-1/3" src={dev} />
    </section>
  )
}