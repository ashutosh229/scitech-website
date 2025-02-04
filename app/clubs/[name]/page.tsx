import React from "react";
import ClubPageClient from "@/components/defined-ui/clubPageClient";
import { clubLogos } from "@/data/clubs";

export async function generateStaticParams() {
  // Extract club names from `clubLogos` array
  const paths = clubLogos.map((club) => ({
    name: club.href.replace("/clubs/", ""), // Extract name from href
  }));

  return paths; // Return all valid params
}

// Server-side logic: Page Component
const ClubPage = ({ params: { name } }: { params: { name: string } }) => {
  return <ClubPageClient name={name} />;
};

export default ClubPage;
