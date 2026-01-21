import Image from "next/image";
import { educationData } from "@/data/education";
import { styles } from "./EducationSection.styles";
import { LineDot } from "../../composite/ui/LineDot";
export default function EducationSection() {
  return (
    <section className={styles.section}>
      <LineDot className={styles.lineDotCustom} />
      <h2 className={styles.title}>Education</h2>
      <div className={styles.grid}>
        {educationData.map((edu) => (
          <div key={edu.id} className={styles.card}>
            <div className={styles.header}>
               <div className={styles.iconContainer}>
                 <Image 
                   src={edu.logo} 
                   alt={edu.institution} 
                   width={32} 
                   height={32}
                   className="object-contain"
                   priority={edu.id === "edu-1"}
                 />
               </div>
               <span className={styles.institution}>
                 {edu.institution}
               </span>
            </div>   
            <div>
              <h4 className={styles.course}>{edu.course}</h4>
              <p className={styles.date}>{edu.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}