import React from "react";
import { skillData } from "../data/data";

const SkillBox = () => {
  
  return (
    <>
    {skillData.map((skillData) => {
      return(
        <button
      data-aos="zoom-in" data-aos-duration="1000"
        className={
          "btn box w-[150px] h-[150px] rounded-lg bg-" +
          skillData.bgColor +
          " text-" +
          skillData.textColor +
          " shadow-md  flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem] "
        }
      >
        <div
          className={
            "box w-[85px] h-[85px] bg-" + skillData.bgColor + " text-" + skillData.textColor + " flex flex-col items-center justify-center gap-5 p-1 md:w-[35px] md:h-[35px] hover:scale-125"
          }
        >
          <img src={skillData.logo} alt={skillData.skill}  />
          <p className="text-xs font-bold my-1">{skillData.skill}</p>
        </div>
      </button>
      )
    })}
    </>
  );
};

export default SkillBox;
