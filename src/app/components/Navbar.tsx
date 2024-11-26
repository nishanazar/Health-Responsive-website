import Link from "next/link";
import Upperpart from "./Upperpart";
import Botton from "./Botton";
import { CiMenuBurger } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home (){
    return(
    <>
    <Upperpart/>
    <hr />
    <div>
    <nav className="w-full h-[70px] flex justify-around items-center ">
    <div>
    <h1 className="font-bold text-[20px] font-serif"> <span className="bg-primary font-bold">H</span>ealth Center</h1>
    </div>
    <div className="md:flex items-center hidden">
    <ul className="space-x-8 text-[12px]">
              
    <Link href="/">Home</Link>
    <Link href="#about">About</Link>
    <Link href="#doctor">Doctors</Link>
    <Link href="#news">News</Link>
    <Link href="#contact">Contact</Link>
    </ul>
    <div className="ml-[80px]"><Botton text={"Make an appointment"} bgColor={"bg-primary"}/></div>
    </div>
    <Sheet>
    <SheetTrigger className="md:hidden block w-5 h-5" >
    <CiMenuBurger/>
    </SheetTrigger>
    <SheetContent>
    <div>
     <h1 className="font-bold text-[20px] font-serif"> <span className="bg-primary font-bold">H</span>ealth Center</h1>
    </div>
    <div className="flex flex-col items-start space-y-4 mt-4">
    <ul className="flex flex-col text-[15px] space-y-2 ">
    <Link href="/">Home</Link>
    <Link href="#about">About</Link>
    <Link href="#doctor">Doctors</Link>
     <Link href="#news">News</Link>
     <Link href="#contact">Contact</Link>
     </ul>
     <div className=""><Botton text={"Make an appointment"} bgColor={"bg-primary"}/></div>
     </div>
     </SheetContent>
     </Sheet>
     </nav>
    </div>
      </>
    )
  }