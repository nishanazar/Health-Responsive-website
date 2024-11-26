import Image from "next/image";
import Line from "./Line"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ICard{
    h5 : string;
    p : string;
    src: string
    email: string;
    num: string
}

export default function Doctors(props: ICard){
    const  {  h5, p, src, email,num} = props
return(

<div className="h-[790px] w-[370px] bg-slate-50 lg:ml-12">
<Image src={src} alt="team-1" height={300} width={370}/>

<div className="ml-8 pt-8">
<h5 className="text-[27px] font-bold">{h5}</h5>
<p>{p}</p>
<div className="my-[30px] ml-3"><Line/></div>
<div className="mt-3">
<div className="flex gap-2"><FaPhoneAlt/><p> {num}</p></div> 
<div className="flex gap-2"><MdEmail/><p>{email}</p></div>
</div>
</div>
</div>

)
}



// export default function Doctors(){
//     return(
    
//     <div className="h-[790px] w-[370px] bg-slate-50">
//     <Image src={team} alt="team-1" height={300} width={370}/>
    
//     <div className="ml-8 pt-8">
//     <h5 className="text-[27px] font-bold">Nate Baston</h5>
//     <p>General Principal</p>
//     <div className="my-[30px] ml-3"><Line/></div>
//     <div className="mt-3">
//     <div className="flex gap-2"><FaPhoneAlt/><p> 010-020-0120</p></div> 
//     <div className="flex gap-2"><MdEmail/><p>general@company.com</p></div>
//     </div>
//     </div>
//     </div>