import React from "react";
import useStyles from "components/Project/styles";

interface ProjectProps {
  name: string;
  img: string;
  video?: string;
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
  video,
}) => {
  const projectVideoRef = React.useRef<HTMLVideoElement>(null);

  const {
    projectContainer,
    imgContainer,
    projectInfo,
    skillsContainer,
    projectName,
    projectDescription,
    skill,
    caseStudyButton,
    projectImage,
    projectVideo,
    overlayText,
  } = useStyles({ video });

  React.useEffect(() => {
    if (projectVideoRef.current) {
      projectVideoRef.current.muted = true;
    }
  }, []);

  return (
    <div className={projectContainer}>
      <div
        className={imgContainer}
        onMouseOver={() => projectVideoRef.current?.play()}
        onMouseOut={() => {
          if (projectVideoRef.current) {
            projectVideoRef.current.pause();
            projectVideoRef.current.currentTime = 0;
          }
        }}
      >
        <img className={projectImage} src={img} alt={name} />
        {video && (
          <>
            <video ref={projectVideoRef} className={projectVideo}>
              <source src={video} />
            </video>
            <p className={overlayText}>Read Case Study</p>
          </>
        )}
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
