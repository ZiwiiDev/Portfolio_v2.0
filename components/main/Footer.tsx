import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start gap-5">
            <div className="font-bold text-[16px]">· Social Media ·</div>
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="mailto:oliverfabian22@gmail.com"
                className="text-[15px] ml-[6px] "
              >
                oliverfabian22@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Made By Oliver Fabián Stetcu Stepanov
        </div>
      </div>
    </div>
  );
};

export default Footer;
