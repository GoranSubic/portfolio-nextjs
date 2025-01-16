import Link from "next/link";
import Image from "next/legacy/image";
import { FC } from "react";

interface Props {
  data: {
    title: string;
    description: string;
    image: string;
  },
  url: string,
}

const LinkPreviewDynamic: FC<Props> = ({data, url}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-black w-[100%] h-[100%] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
    >
      <div className="w-[40%]">
        {data && data.image && <Image
        src={data && data.image}
        alt={data && data.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        />}
      </div>
      <div className="w-[60%]">
        <h2 className="text-xl body-lg mb-2 ">
          {data && data.title}
        </h2>
        <p className="text-base  line-clamp-3 mb-2 ">{data && data.description}</p>
        <span className="mt-3 opacity-50 text-xs">&nbsp;{url}</span>
      </div>
    </Link>
  );
}

export default LinkPreviewDynamic;