"use client";

import Image from "next/image";
import { styles } from "./ProjectsSection.styles";
interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    icon: "ui.png" | "figma.png";
    theme?: string;
}
export default function ProjectCard({ title, description, image, link, icon }: ProjectCardProps) {
    return (
        <div className={styles.card.wrapper}>
            <div className={styles.card.imageContainer}>
                <Image src={image} alt={title} fill className={styles.card.image} />
            </div>
            <h3 className={styles.card.title}>{title}</h3>
            <p className={styles.card.description}>{description}</p>
            <a href={link} className={styles.card.linkWrapper}>
                <div className={styles.card.iconBox}>
                    <Image src={`/assets/${icon}`} alt={icon} width={12} height={12} />
                </div>
                {link}
            </a>
        </div>
    );
}
