

import Author from "./Author"
export default function About (){
    return(
        <>
      
        <div id="about" className=" bg-[url('/about2.jpg')] bg-cover bg-center w-full md:h-[670px] h-[450px] md:p-0 pb-8">
        <div className=" md:pt-[220px] pt-[70px] text-[#aba298] lg:pl-[140px] sm:pl-[50px] pl-3">
        <h2 className="md:text-[40px] text-[25px] font-bold font-serif text-black">Welcome to Your <span className="bg-black text-white">H</span>ealth <br /> Center</h2>
        <p className="md:w-[500px] my-5">Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
        <p className="w-[500px] my-6">Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>

        <Author heading={"Dr. Neil Jackson"} paragraphe={"General Principal"} src={"/author-image.jpg"}/>
        </div>
        </div>
</>
)
}