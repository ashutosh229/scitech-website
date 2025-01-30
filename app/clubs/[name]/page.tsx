import React from "react";
import { blogs, clubMembers } from "@/data/clubs";
import ClubTemplate from "@/components/defined-ui/clubTemplate";
import { getGalleryImages, PathsKey } from "@/lib/getGalleryImages";
import events from "@/data/club_events/epsilon/data";

const ClubPage = ({ params: { name } }: { params: { name: string } }) => {
  const pathKeyInput: PathsKey = name as PathsKey;
  const images = getGalleryImages(pathKeyInput);
  const clubEvents = events.filter((event) => event.club === `${name}`);
  clubEvents.length > 1 &&
    clubEvents.sort((a, b) => {
      const dateA: any = new Date(
        Number(a.year),
        new Date(Date.parse(a.month + " 1, 2025")).getMonth(),
        Number(a.date)
      );
      const dateB: any = new Date(
        Number(b.year),
        new Date(Date.parse(b.month + " 1, 2025")).getMonth(),
        Number(b.date)
      );
      return dateB - dateA;
    });
  const clubBlogs = blogs[`${name}`];
  const clubMembersClub = clubMembers[`${name}`];
  return (
    <ClubTemplate
      clubName="Epsilon"
      clubLogo="epsilon_logo_new.png"
      instagram="https://www.instagram.com/roboticsclub_iitbhilai/"
      linkedin="https://www.linkedin.com/company/the-epsilon-club-iit-bhilai-robotics-club/"
      youtube="https://www.youtube.com/@theepsilonclubiitbhilai2447/featured"
      images={images}
      blogs={clubBlogs}
      events={clubEvents}
      clubMembers={clubMembersClub}
      clubDescription="The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world."
    />
  );
};

export default ClubPage;
