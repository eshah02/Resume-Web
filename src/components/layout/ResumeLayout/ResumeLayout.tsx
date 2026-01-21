"use client";

import React from "react";
import { styles } from "./ResumeLayout.styles";
interface ResumeLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResumeLayout({ sidebar, children }: ResumeLayoutProps) {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        <aside>{sidebar}</aside>
        <div className={styles.content}>
          <div className={styles.verticalLine}>
        
          </div>
          <div className="flex flex-col gap-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}