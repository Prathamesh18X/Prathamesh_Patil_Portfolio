import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";

const mailClick=()=>{
  const email = "prathmeshpatil418@gmail.com";
  window.location.href=`mailto:${email}`;
}


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-sky-200 to-indigo-200 `}>
      <div className=" container  flex-col-reverse  mx-auto items-center h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left basis-1/2 md:mt-0 flex flex-col items-center justify-start gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col  items-center justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Prathamesh Patil
            </h2>
            <div>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Developer ",
                2000,
                "coder",
                2000,
                "Fullstack Developer",
                2000,
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-indigo-500 text-4xl font-bold sm:text-3xl"
            />
            </div>
           
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://wa.me/7990977945"
              onClick={mailClick}
              target="blank"
              className=" bg-black flex text-[1rem] text-white px-6 py-2 sm:px-8 rounded-lg font-bold  hover:text-green-500 hover:scale-110"
            >
              <span> Mail Me</span>
              <img
                src="https://img.icons8.com/color/24/gmail-new--v1.png"
                alt="whatsapp icon"
                className="mx-2"
              />
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-indigo-500 hover:scale-110"
              download
            >
              <div className="flex items-center gap-1 ">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Prathamesh18X" target="blank">
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prathamesh-patil-pcp418/" target="blank">
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prathmesh_patil_04/" target="blank">
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100008295922086" target="blank">
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex basis-1/2 items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[250px] w-fit flex items-center sm:items-end hover:scale-125">
            <img
              data-aos="fade-up"
              className=" h-[100%]  object-cover md:h-[95%] md:m-auto sm:m-0 "
              src="https://i.postimg.cc/bNcG6g1T/Prathamesh-Avatar.png"
              alt="mine-avatar"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
