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
  loading: () => <h2>Dynamicaly loading LinkedIn data...</h2>,
});

const LinkPreview: FC<Props> = ({ data, url }) => {
  return (
    <>
      <DynamicLink data={data} url={url} />
    </>
  );
}

export default LinkPreview;