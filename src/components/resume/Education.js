import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018- 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech(CSE)"
            subTitle="CSE Core"
            result="9.08/10.0"
            des="Vellore Institute of Technology, Bhopal (Sept 2020 - Ongoing)"
          />
          <ResumeCard
            title="Class XII"
            subTitle="PMC"
            result="89 %"
            des="Sunbeam English School , Varanasi (May 2020)"
          />
          <ResumeCard
            title="Class X"
            subTitle=""
            result="78%"
            des="St.Anthony Senior Secondary School, Farrukhabad (May 2018)"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education