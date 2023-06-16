import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"> </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Xiaomi Ode2Code2.0 Hackathon"
            subTitle="Achievements"
            result=""
            des="	Achieved a top ranking of 150 out of 7806 teams in India in the Xiaomi Ode2Code2.0 Hackathon "
          />
          <ResumeCard
            title="Rap competition"
            subTitle="Extracurricular"
            result="Success"
            des="	Rap competition (FR Assembly)"
          />
          
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"> </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Club"
            subTitle="Responsibilities"
            result=""
            des="Content Writer at Club Mozilla Firefox(Nov 21 – Jan 22)"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
