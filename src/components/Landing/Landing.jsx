import LandpageData from "../API/LandpageData"
import Banner from "../Banner/Banner"

const Landing = () => {
  return (
    <>
      <div>
      {
        LandpageData.map((e)=>{
          return(
            <>
              <Banner
                heading = {e.heading}
                desc = {e.desc}
              ></Banner>
            </>
          )
        })
      }
    
    </div>
    </>
  )
}

export default Landing
