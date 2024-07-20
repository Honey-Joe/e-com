import Newsdata from "../API/Newsdata"
import Cardsnews from "../Cardsnews/Cardsnews"

const News = () => {
  return (
    <>
     <div className="2xl:container mx-auto bg-[#274D5A]">
        <div className="w-[90%] lg:w-[70%] grid grid-cols-1 mx-auto py-14  space-y-5">
            <div className="flex flex-col gap-6 justify-center items-center">
                <h2 className="text-center text-white font-[Poppins] font-bold text-4xl">News</h2>
                <p className="text-center text-white font-[Poppins] font-medium text-base">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {
                Newsdata.map((e)=>{
                  return(
                    <>
                    <Cardsnews
                    image = {e.image}
                      heading= {e.heading}
                      post = {e.post}
                      date = {e.date}
                      desc = {e.desc}
                    ></Cardsnews>
                    </>
                  )
                })
              }
            </div>
        </div>
    </div> 
    </>
  )
}

export default News
