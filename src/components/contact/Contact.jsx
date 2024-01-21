import React from "react";
import { BsArrowRight } from "react-icons/bs";

const mailClick=()=>{
  const email = "prathmeshpatil418@gmail.com";
  window.location.href=`mailto:${email}`;
}
const Contact = () => {
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">Wanted to connect me?</h1>
              <h3 className="text-xl sm:text-lg">
                feel free to DM
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
        <div className="flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="800"
            href=""
            onClick={mailClick}
            target="blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
          
          <img src="https://img.icons8.com/color/72/gmail-new--v1.png" className="hover:scale-125" alt="whatapp-new"/>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://wa.me/7990977945"
            target="blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
          
          <img src="https://img.icons8.com/color/72/whatsapp--v1.png" className="hover:scale-125" alt="whatapp-new"/>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://www.linkedin.com/in/prathamesh-patil-pcp418/"
            target="blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
          
          <img src="https://img.icons8.com/color/72/linkedin--v1.png" className="hover:scale-125" alt="whatapp-new"/>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href=""
            target="blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <img src="https://img.icons8.com/fluency/70/instagram-new.png" className="hover:scale-125" alt="instagram-new"/>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1600"

            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
          <img src="https://img.icons8.com/color/65/telegram-app--v1.png" className="hover:scale-125" alt="telegram-new"/>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
