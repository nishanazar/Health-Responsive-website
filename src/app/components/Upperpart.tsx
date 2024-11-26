import { FaPhoneAlt } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

export default function Home (){
    return(
    <div className=" lg:flex justify-around my-2 hidden md:block">
    <h4 className="text-[14px]">Welcome to a Professional Health Care</h4>
    <div className="lg:flex gap-6 text-[15px] sm:hidden ">
    <div className="flex gap-2"><FaPhoneAlt className="text-primary h-5 w-3" /> <h5>010-060-0160</h5> </div>
    <div className="flex gap-2"><LuCalendarDays  className="text-primary h-4 w-4" /> <h5>6:00 AM - 10:00 PM (Mon-Fri)</h5> </div>
    <div className="flex gap-2"><MdEmail  className="text-primary h-5 w-4" /> <h5>info@company.com</h5> </div>
    </div>
    </div>
    )
  }