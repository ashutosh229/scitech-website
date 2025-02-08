import { Image } from "@/types/events";
import React from "react";

interface ClubPageTemplateProps {
  club: Image;
}

const ClubPageTemplate: React.FC<ClubPageTemplateProps> = ({ club }) => {
  return <div>{club.name}</div>;
};

export default ClubPageTemplate;
