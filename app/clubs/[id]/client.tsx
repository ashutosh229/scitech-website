"use client";

import { motion } from "framer-motion";
import { Image } from "@/types/events";

export default function ClubTemplate({ club }: { club: Image }) {
  return <div>{club.name}</div>;
}
