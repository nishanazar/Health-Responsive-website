import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Author from "./Author";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer(){
    return(
      <>
        <div className=" w-full h-[550px] md:pt-[120px] pt-[50px] lg:pl-[120px] md:pl-[0px] text-[#363434]">
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
        <div className="lg:h-[250px] lg:w-[350px] h-[100px] w-[350px] md:w-[200px] ml-[30px]  lg:ml-[30px] ">
        <h3 className="text-[30px] font-bold mb-5">Contact Info</h3>
        <p>Fusce at libero iaculis, venenatis augue quis, pharetra lorem. Curabitur ut dolor eu elit consequat ultricies.</p><div>
        <div className="flex gap-4 my-4">
        <div className="h-[40px] w-[40px] rounded-full bg-[#363434] text-white"><FaPhoneAlt className="ml-3 mt-3" /> </div>
        <p> 010-070-0170</p>
        </div>
        <div className="flex gap-4">
        <div className="h-[40px] w-[40px] rounded-full bg-[#363434] text-white"><MdEmail className="ml-3 mt-3" /></div>
        <p> info@company.com</p>
        </div>
        </div>
        </div>
        <div className="lg:h-[250px] lg:w-[350px] md:w-[250px] ml-[30px] mt-[170px] md:mt-0">
        <h3 className="text-[30px] font-bold mb-5">Latest News</h3>
        <div className="space-y-5">
        <Author heading={"Amazing Technology"} paragraphe={"March 08, 2018"} src={"/news-image.jpg"}/>
        <Author heading={"New Healing Process"} paragraphe={"February 20, 2018"} src={"/news-image.jpg"}/>
        </div>
        </div>
        <div className="lg:h-[250px] lg:w-[350px] md:w-[200px] ml-[30px] ">
        <h3 className="text-[30px] font-bold mb-5">Opening Hours</h3>
        <ul className="space-y-1">
        <li>Monday - Friday 06:00 AM - 10:00 PM</li>
        <li>Saturday 09:00 AM - 08:00 PM</li>
        <li>Sunday Closed</li>
        </ul>
        <div className="flex gap-4 mt-4">
        <FaSquareFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>
        </div>
        </div>
        <hr className="md:mt-[70px] mr-[80px]"/>
        <div className="flex gap-[70px] mt-4 md:text-[14px] text-[12px]">
        <p>Copyright © 2017 Your Company | Design: Tooplate</p>
        <div >
        <ol className="lg:flex space-x-8 hidden">
        <li>Laboratory Tests</li>
        <li>Departments</li>
        <li>Insurance Policy</li>
        <li>Careers</li>
        </ol>
        </div>
        </div>
        </div>
        </>
    )
}