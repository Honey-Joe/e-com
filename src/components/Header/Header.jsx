import { Link } from "react-router-dom";
import { navlogo, navtoggle, navtrolley, search } from "../../assets/image";

const Header = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-white">
        <div className="w-[98%]  grid grid-cols-2 mx-auto my-5">
          <div className="">
            <img src={navlogo} alt="logo" />
          </div>
          <div className="flex items-center justify-end gap-12">
            <div className="hidden" id="show">
              <div className=" lg:flex gap-20 absolute  left-0 top-20 lg:static bg-white w-[100%] z-20">
                <div>
                  <ul className=" lg:flex gap-3 ">
                    <li className=" font-normal text-lg font-[Poppins] p-2 text-center lg:p-0">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className=" font-normal text-lg font-[Poppins] p-2 text-center lg:p-0 ">
                      <Link to={"/home/about"}>About</Link>
                    </li>
                    <li className=" font-normal text-lg font-[Poppins] p-2 text-center lg:p-0">
                      <Link to={"/home/cycle"}>Our Cycle</Link>
                    </li>
                    <li className=" font-normal text-lg font-[Poppins] p-2 text-center lg:p-0">
                      <Link to={"/home/news"}>News</Link>
                    </li>
                    <li className=" font-normal text-lg font-[Poppins] p-2 text-center lg:p-0">
                      <Link to={"/home/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:visible">
                  <ul className=" flex gap-4">
                    <li className=" font-normal text-lg font-[Poppins]">
                      Login
                    </li>
                    <li>
                      <img src={navtrolley} alt="" />
                    </li>
                    <li>
                      <img src={search} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src={navtoggle}
              alt=""
              className="h-10 cursor-pointer"
              onClick={() => {
                const nav = document.getElementById("show");
                nav.classList.toggle("hidden");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
