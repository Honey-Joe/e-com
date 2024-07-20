import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const Contact = () => {
  
    const schema = z.object({
        name: z.string().min(1, { message: 'Required' }),
        email: z.string().min().email(),
        phn_no: z.number().min(10),
        messagetext:z.string().min()
      });
  

    const {register, handleSubmit , formState:{errors}} = useForm({
        resolver:zodResolver(schema)
      
    })
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
     <div className='2xl:container mx-auto bg-[#274D5A]'>
        <div className='w-[80%] md:w-[50%] mx-auto flex flex-col items-center justify-center gap-3'>
            <h2 className='font-[Poppins] text-white font-bold text-4xl'>A Call Back</h2>
            <form action="" className='w-[90%] flex flex-col gap-5' onSubmit={handleSubmit(onSubmit) }>
                <div>
                    <input type="text" name="name" id="name" placeholder='Name' className='w-[100%] h-[55px] rounded-2xl p-5 placeholder:text-black font-[Poppins] font-medium' {...register("name")}/>
                    <p>{errors?.name?.message}</p>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder='Email' className='w-[100%] h-[55px] rounded-2xl p-5 placeholder:text-black font-[Poppins] font-medium'{...register("email")} />
                    <p>{errors?.email?.message}</p>
                </div>
                <div>
                    <input type="tel" name="phn_no" id="phn_no" placeholder='Phone Number'  className='w-[100%] h-[55px] rounded-2xl p-5 placeholder:text-black font-[Poppins] font-medium' {...register("phn_no")}/>
                    <p>{errors?.phn_no?.message}</p>
                </div>
                <div>
                    <textarea name="message" id="mess" placeholder='Message'  className='w-[100%]  rounded-2xl p-5 placeholder:text-black font-[Poppins] font-medium' rows={5} {...register("message")}></textarea>
                    <p>{errors?.messagetext?.message}</p>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-[#F7C17B] text-white font-[Poppins] rounded-md px-10 py-3 hover:bg-white hover:text-black hover:-translate-y-3'>SEND</button>
                    
                </div>
            </form>

        </div>
    </div> 
    </>
  )
}

export default Contact
