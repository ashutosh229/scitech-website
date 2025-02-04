"use client";

import React from "react";
import ClubTemplate from "@/components/defined-ui/clubTemplate";
import { getGalleryImages, PathsKey } from "@/lib/getGalleryImages";
import events from "@/data/club_events/epsilon/data";
import { clubLogos } from "@/data/clubs";

const ClubPage = ({ params: { name } }: { params: { name: string } }) => {
  const pathKeyInput: PathsKey = name as PathsKey;
  const images = getGalleryImages(pathKeyInput);

  // Filter club events
  const clubEvents = events.filter((event) => event.club === name);
  if (clubEvents.length > 1) {
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
  }

  // Get club information
  const clubInfo = clubLogos.filter((value) => value.href === `/clubs/${name}`);
  const club = clubInfo[0];

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <ClubTemplate
      clubName={club.name}
      clubLogo={club.src}
      instagram={club.instagram}
      linkedin={club.linkedin}
      twitter={club.twitter}
      youtube={club.youtube}
      github={club.github}
      clubDescription={club.description}
      blogs={club.blogs}
      clubMembers={club.members}
      clubAgenda={club.agenda}
      images={images}
      events={clubEvents}
    />
  );
};

export default ClubPage;

// Generate Static Params
export async function generateStaticParams() {
  const paths = clubLogos.map((club) => ({
    name: club.href.replace("/clubs/", ""),
  }));

  return paths.map((param) => ({ params: param }));
}
