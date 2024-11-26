import Image from "next/image"
import Line from "./Line"
import Author from "./Author";

interface INews {
    src: string;
    paragraphe1: string;
    heading: string;
    paragraphe2: string;
    authorHeading : string;
    authorParagraphe: string;
}
export default function News(props:INews){
const { src, paragraphe1, heading, paragraphe2 ,  authorHeading, authorParagraphe} = props
    return(
        <div>
        <div  className="h-[570px] w-[350px] bg-[#ffffff] rounded-2xl lg:ml-12">
        <Image className="rounded-s-[8px] rounded-e-[8px]" src={src} alt="news" height={200} width={350}/>
        <div className="text-[#3a3733] ml-6 pt-8">
        <p>{paragraphe1}</p>
        <h2 className="text-[30px] text-black font-bold hover:text-primary">{heading}</h2>
        <p>{paragraphe2}</p>
        <div className="my-7"><Line/></div>
        <Author heading={authorHeading} paragraphe={authorParagraphe} src={"/author-image"} />
        </div>
        </div>
       </div>
)
}


