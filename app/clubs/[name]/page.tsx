import React from "react";

const ClubPage = ({ params: { name } }: { params: { name: string } }) => {
  return <div>{name}</div>;
};

export default ClubPage;
