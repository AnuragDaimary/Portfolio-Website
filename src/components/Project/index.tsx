import React from "react";
import useStyles from "components/Project/styles";
import { useNavigate } from "react-router-dom";
import AnimatedContent from "components/AnimatedContent";

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
  video = undefined,
}) => {
  const projectVideoRef = React.useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

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
    alignSelf,
  } = useStyles({ video, link });

  const handleProjectClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className={projectContainer}>
      <AnimatedContent viewAnchor="top" delay={0.5}>
        <div
          className={imgContainer}
          onClick={handleProjectClick}
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
              <video muted ref={projectVideoRef} className={projectVideo}>
                <source src={video} />
              </video>
              <p className={overlayText}>Read Case Study</p>
            </>
          )}
        </div>
      </AnimatedContent>

      <div className={projectInfo}>
        <AnimatedContent delay={0.75}>
          <h3 className={projectName}>{name}</h3>
        </AnimatedContent>

        <div className={projectDescription}>
          {description.map((desc, idx) => (
            <AnimatedContent initialDelay={1.25} delay={0.1 * idx}>
              <p key={`${name}-desc-${idx}`}>{desc}</p>
            </AnimatedContent>
          ))}
        </div>

        <div className={skillsContainer}>
          {skills.map((skillName, idx) => (
            <AnimatedContent initialDelay={1.5} delay={0.1 * idx}>
              <span className={skill} key={`${name}-skill-${idx}`}>
                {skillName}
              </span>
            </AnimatedContent>
          ))}
        </div>
        <div className={alignSelf}>
          <AnimatedContent initialDelay={1.75} viewAnchor="top">
            <button className={caseStudyButton} disabled={link === undefined}>
              {link ? <a href={link}>Read Case Study</a> : "Read Case Study"}
            </button>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Project;
