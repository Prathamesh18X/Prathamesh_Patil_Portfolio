import React from 'react'
import { experience } from '../data/data'
const Experience = () => {
  return (
    <>
    {experience.map((experience) => {
        return(
          <div className=" relative">
          {/* design */}
          <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
          </div>
          {/* design */}
          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
              {experience.role}
            </h1>
            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
              {experience.companyName}
            </span>
            <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
              {experience.duration}
            </span>
            <p className=" text-[.9rem] text-justify break-words text-gray-500">
              {experience.desc}
            </p>
          </div>
        </div>
        )
    })}
    </>
  )
}

export default Experience