import About from "./components/About";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";


import Appointment from "./components/Appointment";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";




export default function Home (){
  return(
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <div>
    <h2 id="doctor" className="text-[45px] pt-[90px] ml-[90px] font-bold mb-8">Our Doctors</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:ml-8 ml-4 md:space-y-0 space-y-7">
    <Card h5={"Nate Baston"} p={"General Principal"} src={"/team-image1.jpg"} email={"general@company.com"} num={"010-020-0120"}/>
    <Card h5={"Jason Stewart"} p={"Pregnancy"} src={"/team-image2.jpg"} email={"pregnancy@company.com"} num={"010-070-0170"}/>
    <Card   h5={"Miasha Nakahara"} p={"Cardiology"} src={"/team-image3.jpg"} email={"cardio@company.com"} num={"010-040-0140"}/>
    </div>
    </div>


    <div id="news" className="md:h-[850px] h-[750px] w-full bg-slate-50 md:mt-[80px]">
    <h2 className="text-[45px] md:pt-[90px] pt-[40px] md:ml-[90px] font-bold mb-8 text-center">Latest News</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:ml-[40px] ml-[20px] sm:space-y-[60px] md:space-y-0 space-y-10">
      <News src={"/news-image1.jpg"} paragraphe1={"March 08, 2018"} heading={"About Amazing Technology"} paragraphe2={"Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis."} authorHeading={"Jeremie Carlson"} authorParagraphe={"CEO / Founder"} />
      <div className="hidden sm:flex ">

      <News src={"/news-image2.jpg"} paragraphe1={"February 20, 2018"} heading={"Introducing a new healing process"} paragraphe2={"Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula."} authorHeading={"Jason Stewart"} authorParagraphe={"General Director"} />
      <div className=" sm:hidden md:flex ">
      <News src={"/news-image3.jpg"} paragraphe1={"January 27, 2018"} heading={"Review Annual Medical Research"} paragraphe2={"Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim."} authorHeading={"Andrio Abero"} authorParagraphe={"Online Advertising"} />
      </div>
      </div>
    </div>
    </div>
    <Appointment/>
   <GoogleMap/>
   <Footer/>

    </div>
  )
}