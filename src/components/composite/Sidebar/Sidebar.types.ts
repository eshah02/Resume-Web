export interface ContactItem {
  label: string;
  value: string;
  icon: string;
}

export interface SocialItem {
  label: string;
  value: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  role: string;
  image: string;
  quote: {
    text: string;
    author: string;
  };
  contact: ContactItem[];
  socials: SocialItem[];
  languages: LanguageItem[];
}

export type ProfileIconType = ContactItem | SocialItem | LanguageItem;