import dev from "../assets/dev.jpg";

export default function CenterSelection(){

    return(
      <section className="flex px-20 py-30 bg-secondary">
        <h1 className="text-white w-1/3 text-3xl">Hey, I am Suresh 
           <p>  Java full Stack developer </p></h1>
            <img className=" w-1/3" src={dev} />
      </section>
    )
}