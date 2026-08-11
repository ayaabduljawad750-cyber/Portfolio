import "./cardProject.css";
import {motion} from "motion/react"
export default function CardProject({project}) {
  return (
    <motion.div 
    layout
    initial={{transform:"scale(0)"}}
    animate={{transform:"scale(1)"}}
    transition={{type:"spring",damping:8,stiffness:50}}
    className="cardProject">
      <img src={project.imagePath} alt="img-project" />
      <div className="box ">
        <h3 className="title">{project.title}</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto
          reprehenderit corrupti obcaecati itaque qui recusandae repudiandae in?
          Ipsam illum maiores quos perspiciatis id,
        </p>
        <div className="actions">
          <div className="icons-box">
            <i className="icon-link" />
            <i className="icon-github" />
          </div>

          <a href="" className="more-link">
            more
            <i className="icon-arrow_forward" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
