import Image from "next/image"
import appoint from "../../../public/appointment-image.jpg"
export default function Appointment(){
    return(
        <div id="contact" className="w-full md:h-[700px] h-[780px] flex ">
        <div><Image className=" hidden lg:block md:pt-[80px] ml-4" src={appoint} alt="Appointment" height={250} width={550}/></div>
        <div className="h-[680px] md:w-[620px] sm:ml-12 lg:ml-0 ml-7 ">
        <h3 className="md:text-[35px] md:pt-[55px] md:text-[black] text-primary text-[30px] font-bold mb-8 ">Make an appointment</h3>
        <div className="main-dev md:flex md:gap-8">
        <div className="part-1">
        <label>Name</label> <br />
        <input className="h-[35px] w-[230px] bg-slate-50 rounded-[2px] pl-3 mt-2" type="name" placeholder="Full Name" />
        <div className="mt-4">  
       <label>Select Date</label> <br />
        <input className="h-[35px] w-[230px] bg-slate-50 rounded-[2px] pl-3 px-3 mt-2 text-gray-400" type="date" name="date" id="date" placeholder="dd/mm/yyyy" />
        </div>
        </div>
        <div className="part-2 mr-[100px]">
        <label>Email</label> <br />
        <input className="h-[35px] w-[230px] bg-slate-50 rounded-[2px] pl-3 mt-2" type="email" name="email" id="email" placeholder="Your Email" />
        <div className="mt-4">  
        <label>Select Department</label> <br />
        <input className="h-[35px] w-[230px] bg-slate-50 rounded-[2px] pl-3 mt-2"  type="text" placeholder="General Health"/>
        </div>
        </div>
        </div>
        <div className="mt-4">  
        <label>Phone Number</label> <br />
        <input className="h-[35px] w-[620px] bg-slate-50 rounded-[2px] pl-3 px-3 mt-2 text-gray-400" type="number"  placeholder="Phone" />
        </div>
        <div className="mt-4">  
        <label>Additional Message</label> <br />
        <input className="h-[150px] w-[620px] bg-slate-50 rounded-[2px] pl-3 px-1 mt-2 pb-[80px] text-gray-400" type="message"  placeholder="Message" />
        </div>
        <button className="bg-primary hover:bg-gray-800 rounded-sm mt-6 md:w-[620px] w-[350px] py-4 text-white font-semibold">Submit Button</button> 
        </div>
        </div>
                
    )
}