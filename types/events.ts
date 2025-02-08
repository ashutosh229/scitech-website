export type EventType = {
  title: string;
  hosting: string;
  club: string;
  description: string;
  date: string;
  month: string;
  year: string;
  time: string;
  location: string;
  image: string;
  isSingleEvent: boolean;
};

export interface Achievement {
  title: string;
  details?: string;
  participants: string;
}

export interface Blog {
  title: string;
  author: string;
  time: string;
  content: string;
}

export interface ClubMembers {
  name: string;
  email: string;
  icon: string;
  position: string;
}

export interface Image {
  id: number;
  src: string;
  alt: string;
  name: string;
  href: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  description: string;
  blogs: Blog[];
  members: ClubMembers[];
  twitter: string;
  github: string;
  agenda: string;
}

export interface aboutUsInfo {
  title: string;
  content: string;
  image: string;
}
