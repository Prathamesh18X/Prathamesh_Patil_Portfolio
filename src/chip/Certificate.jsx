import React, { useState } from "react";
import styled from "styled-components";
import { certificate } from "../data/data";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Certificate = () => {

  return (
    <>
      {certificate.map((certificate) => {
        return (
          <div
            data-aos="zoom-in"
            key={certificate.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[240px] w-[420px] hover:scale-125 transition duration-500 cursor-pointer  rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={certificate.img}
                  alt={certificate.title}
                  className=" object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className="  text-gray-900 text-2xl font-bold leading-[1.4] text-center w-[90%]">
                  <span>{certificate.title}</span>
                </p>
                <p className="  text-gray-900 text-base leading-[1.4] text-center w-[90%]">
                  <span>{certificate.company}</span>
                </p>
                <p className=" text-gray-900 text-base leading-[1.4] text-center w-[90%]">
                  <span>{certificate.duration}</span>
                </p>
                <div className=" flex items-center justify-center gap-4">
                  
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={certificate.verify}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <MdOutlineVerified className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black"> Verify</p>
                  </Link>
                </div>
              </div>
            </POPUP>
          </div>
        );
      })}
    </>
  );
};

export default Certificate;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
