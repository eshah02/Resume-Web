import { projects } from "@/data/projects";
import { styles } from "./ProjectsSection.styles";
import ProjectCard from "./ProjectCard";
import { LineDot } from "../../composite/ui/LineDot";

export default function ProjectsSection() {
  return (
    <section className={styles.section}>

      <LineDot className={styles.lineDotCustom} />
      <h2 className={styles.title}>Latest projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            icon={project.icon as "ui.png" | "figma.png"} 
          />
        ))}
      </div>
    </section>
  );
}
