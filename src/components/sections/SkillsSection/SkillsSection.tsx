"use client";
import Image from "next/image";
import { skills } from "@/data/skills";
import { styles } from "./SkillsSection.styles";
import { LineDot } from "../../composite/ui/LineDot";
export default function SkillsSection() {
  const renderSkill = (skill: any, index: number) => {
    if (skill.name === "Group") {
      return (
        <div key={index} className={`${styles.groupContainer} ${skill.width}`}>
          {skill.items.map((item: string) => (
            <div key={item} className={styles.groupItem}>{item}</div>
          ))}
        </div>
      );
    }
    if (skill.name === "List") {
      return (
        <div key={index} className={`${styles.listCard} ${skill.width}`}>
          {skill.items.map((item: string) => (
            <span key={item} className={styles.listItem}>{item}</span>
          ))}
        </div>
      );
    }
    return (
      <div key={index} className={`${styles.cardBase} ${skill.width}`}>
        {skill.name}
      </div>
    );
  };

  return (
    <section className={styles.container}>
        <LineDot className={styles.lineDotCustom} />
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.mainGrid}>
        {/* design col */}
        <div className={styles.stack}>
          <header className={styles.categoryHeader}>
            <div className={styles.iconPurple}>
              <Image src="/assets/design-icon.png" alt="Design" width={14} height={14} />
            </div>
            Design
          </header>
          <div className={styles.flexWrapper}>
            {skills.design.map((skill, index) => renderSkill(skill, index))}
          </div>
        </div>

        {/* development col*/}
        <div className={styles.stack}>
          <header className={styles.categoryHeader}>
            <div className={styles.iconBlue}>
              <Image src="/assets/development-icon.png" alt="Development" width={14} height={14} />
            </div>
            Development
          </header>
          <div className={styles.flexWrapper}>
            {skills.development.map((skill, index) => renderSkill(skill, index))}
          </div>
        </div>
      </div>
    </section>
  );
}