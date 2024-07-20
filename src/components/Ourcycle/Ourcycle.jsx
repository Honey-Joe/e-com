import Ourcycledata from "../API/Ourcycledata";
import Cycle1 from "../Cycle1/Cycle1";

const Ourcycle = () => {
  return (
    <>
      <div className="2xl:container mx-auto my-10">
        <div className="w-[100%]">
          <h2 className="text-center font-[Poppins] font-bold text-4xl">
            Our Cycles
          </h2>
          <p className="text-center my-5 font-[Poppins]">
            It is a long established fact that a reader will be distracted by
            the
          </p>
          <div>
            {Ourcycledata.map((e) => {
              return (
                <>
                  <Cycle1
                    order={e.order}
                    image={e.image}
                    heading={e.heading}
                    desc={e.desc}
                    price={e.price}
                  ></Cycle1>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-[90%] mx-auto flex justify-center my-10">
          <button className="px-5 py-3 bg-[#F7C17B] font-[Poppins] text-white">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Ourcycle;
