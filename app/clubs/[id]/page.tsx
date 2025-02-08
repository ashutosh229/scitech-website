import React from "react";
import { clubLogos } from "@/data/clubs";
import NotFoundPage from "@/app/not-found";
import ClubPageTemplate from "./client";

export async function generateStaticParams() {
  // Extract club names from `clubLogos` array
  const paths = clubLogos.map((club) => ({
    id: club.id, // Extract name from href
  }));

  return paths; // Return all valid params
}

// Server-side logic: Page Component
const ClubPage = ({ params: { id } }: { params: { id: number } }) => {
  const club = clubLogos.find((club) => club.id === id);
  if (!club) {
    return <NotFoundPage></NotFoundPage>;
  }
  return <ClubPageTemplate club={club}></ClubPageTemplate>;
};

export default ClubPage;
