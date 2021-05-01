function ProjectPanel({ index, project }) {
   return (
      <div className={`project-panel ${index !== 4 ? "border" : ""}`}>
         <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/projects/${project.img}`}
         ></img>
         <div className="project-details">
            <h1>{project.letter}</h1>
            <h2>{project.client}</h2>
            <p>{project.description}</p>
         </div>
      </div>
   );
}

export default ProjectPanel;
