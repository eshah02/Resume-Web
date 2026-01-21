"use client";

import React from "react";
import Timeline from "@/components/composite/Timeline/";
import { experience } from "@/data/experience";
import { LineDot } from "../../composite/ui/LineDot";
import { styles } from "./ExperienceSection.styles";

export default function ExperienceSection() {
  return (
  
      <section className={styles.section}>
      <LineDot className={styles.lineDotCustom} />
      <h2 className="text-3xl font-bold mb-5">
        Experience
      </h2>
      <Timeline items={experience} />
    </section>
  );
}