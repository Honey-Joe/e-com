import { aboutcycle, aboutg } from "../../assets/image";

const About = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[url(https://ik.imagekit.io/HoneyJoe/Ecom/images/about-bg.png?updatedAt=1720020223789)]">
        <div className=" w-[90%] md:w-[60%] grid grid-cols-1 md:grid-cols-1 mx-auto">
          <div className="flex flex-col items-center justify-center my-[150px] gap-5">
            <p className="text-white font-bold text-3xl font-[Poppins] text-center md:text-5xl">
              About Our cycle Store
            </p>
            <p className="text-center text-white font-light font-[Poppins] text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
          <div className="flex justify-center items-center mb-5">
            <img
              src={aboutcycle}
              alt=""
              className="w-[70%] md:w-[50%] bg-white shadow-black  shadow-2xl p-10 rounded-md transition hover:-translate-y-3"
            />
          </div>
          <div className="w-[90%] mx-auto flex justify-center my-10">
            <button className="px-5 py-3 bg-[#F7C17B] font-[Poppins] text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
