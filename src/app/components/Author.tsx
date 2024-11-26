import Image from "next/image";

interface IAuthor {
    heading: string;
    paragraphe: string;
    src: string;
    
}


export default function Author(props: IAuthor ){
    const { heading, paragraphe, src}= props
    return(
        <div className="flex gap-6">
        <Image className="rounded-full" src={src} alt="Author-name" height={70} width={70}/>
        <div>
        <h4 className="text-[21px] font-bold text-black ">{heading}</h4>
        <p>{paragraphe}</p> 
        </div>
        </div>
    )
}
