import MainContainer from "@/components/util/MainContainer";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <MainContainer>
      <div className=" flex items-center justify-between">
        <Link
          href={"/profile"}
          className="font-bold py-1 px-4 bg-accent rounded-md text-dark text-base"
        >
          Back
        </Link>
        <h1 className="font-extrabold text-accent text-lg md:text-xl ">
          MyCollections
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {/* card  */}
        <div className="columns-1 h-80 bg-secondary relative rounded-lg overflow-hidden">
          <img
            src="/images/anime1.webp"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="bg-dark/50 backdrop-blur-xs w-full absolute p-2 bottom-0">
            <h3 className="font-extrabold text-base md:text-lg line-clamp-1">
              Title Anime
            </h3>
          </div>
        </div>
        {/* card  */}
        <div className="columns-1 h-80 bg-secondary relative rounded-lg overflow-hidden">
          <img
            src="/images/anime1.webp"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="bg-dark/50 backdrop-blur-xs w-full absolute p-2 bottom-0">
            <h3 className="font-extrabold text-base md:text-lg line-clamp-1">
              Title Anime
            </h3>
          </div>
        </div>
        {/* card  */}
        <div className="columns-1 h-80 bg-secondary relative rounded-lg overflow-hidden">
          <img
            src="/images/anime1.webp"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="bg-dark/50 backdrop-blur-xs w-full absolute p-2 bottom-0">
            <h3 className="font-extrabold text-base md:text-lg line-clamp-1">
              Title Anime
            </h3>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
