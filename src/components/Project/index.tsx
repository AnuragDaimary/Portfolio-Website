import React from "react";
import useStyles from "components/Project/styles";

interface ProjectProps {
  name: string;
  img: string;
  description: string[];
  link?: string;
  skills: string[];
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  link = undefined,
  skills,
  img,
}) => {
  const {
    projectContainer,
    imgContainer,
    projectInfo,
    skillsContainer,
    projectName,
    projectDescription,
    skill,
    caseStudyButton,
  } = useStyles();
  return (
    <div className={projectContainer}>
      <div className={imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={projectInfo}>
        <h3 className={projectName}>{name}</h3>
        <div className={projectDescription}>
          {description.map((desc, idx) => (
            <p key={`${name}-desc-${idx}`}>{desc}</p>
          ))}
        </div>
        <div className={skillsContainer}>
          {skills.map((skillName, idx) => (
            <span className={skill} key={`${name}-skill-${idx}`}>
              {skillName}
            </span>
          ))}
        </div>
        <button className={caseStudyButton} disabled={link === undefined}>
          {link ? <a href={link}>Read Case Study</a> : "Read Case Study"}
        </button>
      </div>
    </div>
  );
};

export default Project;
