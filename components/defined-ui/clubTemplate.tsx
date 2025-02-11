import React from "react";

type Props = {
  name: string;
  images: string[];
};

function clubTemplate({ name, images }: Props) {
  return <div>{name}</div>;
}

export default clubTemplate;
