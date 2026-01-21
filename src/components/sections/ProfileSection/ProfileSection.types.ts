export interface ProfileItem {
  label: string;
  value: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  icon: string;
}

export interface ProfileSectionProps {
  name: string;
  role: string;
  image: string;
  quote: {
    text: string;
    author: string;
  };
  contact: ProfileItem[];
  socials: ProfileItem[];
  languages: LanguageItem[];
}