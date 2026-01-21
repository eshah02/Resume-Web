import ResumeLayout from "@/components/layout/ResumeLayout";
import Sidebar from "@/components/composite/Sidebar";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProfileSection from "@/components/sections/ProfileSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Page() {
  return (
    <ResumeLayout sidebar={<Sidebar />}>
  
      <div className="lg:hidden">
        <ProfileSection />
      </div>
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
    </ResumeLayout>
  );
}