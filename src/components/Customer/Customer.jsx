import { cusimg, quote } from "../../assets/image"

const Customer = () => {
  return (
    <>
     <div className="2xl:container mx-auto my-[150px]">
        <div className="w-[100%] md:w-[70%] grid gird-cols-1 md:grid-cols-1 border border-dotted mx-auto">
            <div className="flex justify-center items-center my-10">
                <p className="text-center font-[Poppins] font-bold text-4xl text-[#303030]">Says Customer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto shadow-2xl p-5 ">
                <div className="flex justify-center">
                    <img src={cusimg} alt="customer image"  className="md:w-[60%] w-[95%]"/>
                </div>
                <div className="flex flex-col gap-5 items-start my-12">
                    <img src={quote} alt="" />
                    <p className="font-[Poppins] font-light text-base text-[#333233] text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    <p className="font-[Poppins] font-bold text-xl">Channery</p>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Customer
