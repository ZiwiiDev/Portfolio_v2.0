import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-5 bg-[#000000cc]">
      <div className="w-full h-0 pb-[50%] relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
