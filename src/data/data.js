import Card from "../components/features/Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress} from "react-icons/si";

// Features Data
export const featuresData = [
  {
    icon: <FaGlobe />,
    title: "Machine Learning Developer",
    des: "I'm a passionate Machine Learning Developer with expertise in data analysis, feature engineering, and building predictive models. I have experience in developing and deploying ML models for domains like healthcare, finance, and traffic. My skills include working with algorithms such as Random Forests and Decision Trees, as well as NLP, CV, and deep learning frameworks like TensorFlow and Keras.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Web developer",
    des: "I am a passionate Web Developer with experience in designing and developing responsive websites for various domains like e-commerce, healthcare etc. My expertise lies in building dynamic web applications using latest front-end technologies such as ReactJS ,Angular & Vuejs.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Data Structure and Algorithm Developer",
    des: "I'm a passionate Data Structures and Algorithms (DSA) developer with experience in solving complex problems using efficient algorithms. My expertise lies in my problem solving skills .I have worked on projects involving graph theory, dynamic programming ,greedy algorithms & other popular DSA techniques",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "I'm a passionate App Developer with experience in designing and developing mobile apps for various platforms such as iOS and Android. My expertise lies in building dynamic applications using the latest technologies.",
  },
  
];
const Features = () => {
  return (
    <div>
      {featuresData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Features;