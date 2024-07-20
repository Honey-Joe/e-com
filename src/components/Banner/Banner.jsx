import { landingcycle } from "../../assets/image"
import LandpageData from "../API/LandpageData"


const Banner = (props) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[#274D5A]">
        <div className="w-[70%]  h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            <div className="flex items-center my-5 relative order-2 md:order-1">
                
                <img src={landingcycle} alt="landing cycle" className=""/>
            </div>
            <div className="flex flex-col items-start gap-2 xl:my-[150px] order-1 md:order-2 py-5 md:py-0">
                <h5 className="text-white font-bold text-5xl font-[Poppins]">{props.heading}</h5>
                
                <p className="text-white font-[Poppins]">{props.desc}</p>
                <button className="bg-[#F7C17B] py-3 px-12 text-white font-[Poppins] font-medium hover:-translate-y-3 transition">Shop Now</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Banner
