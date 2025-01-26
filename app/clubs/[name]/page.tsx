import React from "react";
import { blogs } from "@/data/clubs";
import { clubMembers } from "@/data/clubs";

const ClubPage = ({ params: { name } }: { params: { name: string } }) => {
  return <div>{name}</div>;
};

export default ClubPage;
