import Card from "../Card"
import Pill from "../Pill";

const Project = ({ projectName, projectDesc, skills, inverted }) => {
  const contentClassName = inverted ? 'project-content-inverted' : 'project-content';
  return (
    <div className={`project ${inverted ? 'flex-row-reverse justify-end': ''}`}>
      <Card />
      <div className={contentClassName}>
        <h4>{projectName}</h4>
        <p className="project-desc">{projectDesc.map(chunk => <p>{chunk}</p>)}</p>
        <div className="skill-container">
          {skills.map(skill => (
            <Pill skillName={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project;