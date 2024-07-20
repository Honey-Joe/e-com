import { call_icon, fb_icon, insta_icon, linked_in, location1, mail_icon, twitter } from "../../assets/image";
import { useForm } from "react-hook-form";

const Footer = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = async (data) => {
    // async request which may result error
    try {
      console.log(data)
    } catch (e) {
      console.log("Error")
    }
  };
  return (

     
    <> 
      <div className="2xl:container mx-auto bg-[#274D5A] pt-10">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto py-3">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6203611906217!2d-73.54469522413902!3d41.055430471344046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a15e6c581437%3A0x523254a9136016a3!2sHoney%20Joe&#39;s%20Family%20Coffeehouse!5e0!3m2!1sen!2sin!4v1721412654899!5m2!1sen!2sin"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-[400px]"
            ></iframe>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
            <img src={location1} alt="location icon" />
            <p className="font-[Poppins] text-white textbase">Page when you look at this layout</p>
            </div>
            <div className="flex gap-5">
              <img src={call_icon} alt="call icon" />
              <p className="font-[Poppins] text-white textbase">Call now +91 63825*****</p>
            </div>
            <div className="flex gap-5">
              <img src={mail_icon} alt="mail_icon" />
              <p className="font-[Poppins] text-white textbase">demo@gmail.com</p>
            </div>
            <div className="flex gap-6">
              <img src={fb_icon} alt="facebook_icon" /><img src={twitter} alt="twitter icon" /><img src={linked_in} alt="linked icon" /><img src={insta_icon} alt="instagram _ icon" />
            </div>
            <div>
              <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="h-[40px] w-[300px] p-5" {...register("email")}/>
                </div>
                <div>
                <button type="submit" className="bg-[#F7C17B] px-12 py-3 text-white hover:bg-white hover:text-gray-400">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white py-8 flex justify-center" > 
          <p className="font-[Poppins] text-lg">Copyright 2024 All Right Reserved By. Honey Joe</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
