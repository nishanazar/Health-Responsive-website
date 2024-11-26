import Image from "next/image"
import Botton from "./Botton"
import Dot from "./Dot"


export default function Hero(){
return(
<div className="bg-[url('/slider3.jpg')] bg-cover bg-center w-full md:h-[500px] h-[400px] text-[#ffffff]">
<div className="flex flex-col space-y-2 items-center pt-[170px] ">
<h4 className="tracking-[3.2px]">PELLENTESQUE NEC LIBERO NISI</h4>
<h1 className="font-serif md:text-[60px] font-extrabold text-[30px] md:m-0 mb-8">Your Health Benefits</h1>
<Botton text={"More About Us"} bgColor={"bg-[#3e65ab]"}/>
<div className="flex gap-3 pt-14">
<Dot/>
<Dot/>
<Dot/>
</div>
</div>
</div>
        
    )
}