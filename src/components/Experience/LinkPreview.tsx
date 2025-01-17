"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

interface Props {
    data: {
      title: string;
      description: string;
      image: string;
    },
    url: string
}

const DynamicLink = dynamic(() => import("./LinkPreviewDynamic"), {
  loading: () => {
    return (
      <div
        className="text-black w-[100%] min-h-44 cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      >
        <h2>Dynamicaly loading website data...</h2>
      </div>
    )
  },
  ssr: false,
});

const LinkPreview: FC<Props> = ({ data, url }) => {
  return (
    <>
      <DynamicLink data={data} url={url} />
    </>
  );
}

export default LinkPreview;