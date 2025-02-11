import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ClubTemplate from "./client";
import { clubLogos } from "@/data/clubs";
import events from "@/data/club_events/epsilon/data";

const getGalleryImages = (clubId: string): string[] => {
  const dirPath = path.join(process.cwd(), "public", clubId, "gallery");

  if (!fs.existsSync(dirPath)) return [];

  return fs.readdirSync(dirPath).map((file) => `/${clubId}/gallery/${file}`);
};

export default async function ClubPage({ params }: { params: { id: string } }) {
  // Find the club in the array
  const club = clubLogos.find((club) => club.id === params.id);

  if (!club) return notFound();

  // Add gallery images dynamically
  const galleryImages = getGalleryImages(club.id);
  const clubEvents = events.filter((event) => event.club === club.name);

  return (
    <ClubTemplate
      club={{ ...club, gallery: galleryImages, events: clubEvents }}
    />
  );
}
