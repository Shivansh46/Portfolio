import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MEDITRACK"
          des=" A medical web application that stores personal data and uses predictive analysis to suggest diagnoses and recommend relevant specialists."
          src={projectOne}
        />
        <ProjectsCard
          title="ServiceARC"
          des=" An AI-based traffic management system uses cameras at intersections to monitor and 
          optimize real-time traffic flow by accurately timing traffic lights."
 
          src={projectTwo}
        />
        <ProjectsCard
          title="ERP System and Recommendation system "
          des=" Optimize billing with personalized recommendations, prediction and reports"
          src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects