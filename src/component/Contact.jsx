

export default function Contact() {
   const config = {
        email : 'sureshsuresh32332@gmail.com',
        phoneNo : '+91-9385981834 '
   }

    return (
        <section id="contact" className=" flex flex-col  bg-primary px-5 text-white">
            <div className="flex flex-col items-center ">
                <h1 className=" border-b-3  mb-5 w-[140px] text-4xl font-bold" >Contact</h1>
                <p className="py-2">If you want to discucs more detail. please contact me </p>
                <p className="py-2"><span className=" font-bold">Email : </span> {config.email}</p>
                <p className="py-2"><span className="font-bold">Phone No: </span>{config.phoneNo}</p>


            </div>
        </section>

    )
}