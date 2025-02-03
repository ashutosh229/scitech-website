"use client";

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
      clubName={""}
      clubLogo={""}
      instagram={""}
      linkedin={""}
      youtube={""}
      images={images}
      blogs={clubBlogs}
      events={clubEvents}
      clubMembers={clubMembersClub}
      clubDescription={""}
    />
  );
};

export default ClubPage;
