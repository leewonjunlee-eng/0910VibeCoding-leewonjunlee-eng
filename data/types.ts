export type Profile = {
  name: string;
  affiliation: string;
  tagline: string;
  about: string[];
  interests: string[];
  currentProject: {
    title: string;
    description: string;
  };
  goal: string;
  hobbies: string[];
  links: { label: string; url: string }[];
};
