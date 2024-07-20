


const Cardsnews = (props) => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg hover:shadow-3xl shadow-white hover:-translate-y-3 transition">
          <img src={props.image} alt="newsimg" className=""/>
          <div className="p-7 flex flex-col gap-7">
            <h2 className="font-[Poppins] text-[#161616] text-xl">{props.heading}</h2>
            <div className="flex justify-between"> 
              <p className="font-[Poppins] text-[#161616]">Post by: {props.post}</p>
              <p className="font-[Poppins] text-[#161616]">{props.date}</p>
            </div>
            <div>
              <p className="font-[Poppins] text-[#161616]">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardsnews
