import { ourcycle1 } from "../../assets/image";

const Cycle1 = (props) => {
  return (
    <>
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 mx-auto my-10 space-x-5">
        <div>
          <div className="flex justify-start">
            <p className="bg-[#274d5a] rounded-full h-[50px] w-[50px] text-center text-white font-bold font-[Poppins] pt-3">
              {props.order}
            </p>
          </div>
          <img src={props.image} alt="" />
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-end font-[Poppins] font-bold text-[40px]">
            {props.heading}
          </p>
          <p className="font-[Poppins] text-base font-light">{props.desc}</p>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-[#274D5A] px-2 font-bold font-[Poppins] text-lg text-white hover:bg-[#f7c17b] hover:-translate-y-3 transition md:px-8 py-3">
              Buy Now
            </button>
            <p className="font-[Poppins] text-[20px] font-bold">
              Price <span className="text-[#f7c17b]">$</span>
              <span className="text-[#274d5a]">{props.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cycle1;
