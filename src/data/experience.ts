export interface TimelineItemData {
  id: string;
  period: string;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
}

export const experience: TimelineItemData[] = [
  {
    id: "exp-1",
    period: "Jul 20 – Jan 2022",
    location: "Cupertino",
    title: "Product designer",
    subtitle: "Apple",
    description:
      "Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatist. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem.",
    logo: "/assets/apple.png",
  },
  {
    id: "exp-2",
    period: "Oct 2015 – Mar 2020",
    location: "Austin",
    title: "UX designer",
    subtitle: "Tesla",
    description:
      "Commodi atque sit ut qui assumenda earum aperiam occaecati voluptates. Fuga quas aut soluta nostrum et beatae. Maiores repudiandae quibusdam autem enim ut in possimus ad.",
    logo: "/assets/tesla.png",
  },
  {
    id: "exp-3",
    period: "Sep 2014 – Aug 2015",
    location: "Mountain",
    title: "Design system architect",
    subtitle: "Google",
    description:
      "Ut molestias animi. Neque voluptate velit corporis adipisci voluptate et qui sed neque. Inventore eos non. Qui eveniet quo incidunt nemo.",
    logo: "/assets/google.png",
  },
  {
    id: "exp-4",
    period: "Sep 2010 – Jul 2013",
    location: "Berlin",
    title: "Design system architect",
    subtitle: "Vectornator",
    description:
      "Non in fugiat aut consequatur deleniti. Consequuntur impedit modi asperiores impedit ut ea aut eligendi doloremque. Fugit laborum ducimus hic tempore velit. Sed vitae et corrupti omnis temporibus. Unde voluptas quaerat ea rerum aspernatur autem assumenda animi fugit.",
    logo: "/assets/vectornator.png",
  },
];