export type EventType = {
  title: string;
  hosting: string;
  club: string;
  description: JSX.Element;
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

export interface Image {
  src: string;
  alt: string;
  name: string;
  href: string;
}

export interface aboutUsInfo {
  title: string;
  content: string;
  image: string;
}
