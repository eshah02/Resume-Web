export interface EducationCard {
  id: string;
  institution: string;
  course: string;
  date: string;
  logo: string;
}
export const educationData: EducationCard[] = [
  {
    id: "edu-1",
    institution: "Memorisely",
    course: "Build a design system",
    date: "Oct 2021",
    logo: "/assets/memorisely.png",
  },
  {
    id: "edu-2",
    institution: "UX acadamy",
    course: "UX Design certificate",
    date: "Nov 2020",
    logo: "/assets/acadamy.png",
  },
  {
    id: "edu-3",
    institution: "Coursera",
    course: "Usera research course",
    date: "Dec 2020",
    logo: "/assets/coursera.png",
  },
  {
    id: "edu-4",
    institution: "Talent Garden",
    course: "Build a design system",
    date: "May 2019",
    logo: "/assets/talent-garden.png",
  },
  {
    id: "edu-5",
    institution: "IED Roma",
    course: "Web design master",
    date: "Feb 2018",
    logo: "/assets/roma.png",
  },
  {
    id: "edu-6",
    institution: "Awwwwards Academy",
    course: "Web design course",
    date: "Aug 2016",
    logo: "/assets/awwwards.png",
  },
];