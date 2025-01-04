import { extractMetaTags } from "@/utils/extractMetaTags";
import Link from "next/link";
import Image from "next/legacy/image";
import { FC } from "react";
import { IProfessionalExperience } from "@/types/experience";
import { ProfessionalExperience } from "@/constants/Experience";

interface Props {
    url: string;
}

export const LinkPreview: FC<Props> = async ({ url }) => {
  const data = await extractMetaTags(url);
 
  const experience: IProfessionalExperience | undefined = ProfessionalExperience.find(
    experience => experience.url === url
  );

  let dataLocal = {
    title: '',
    description: '',
    image: '',
  }
  if (experience !== undefined) {
    dataLocal = {
      title: experience.company,
      description: experience.short,
      image: experience.image,
    };
  }

  return (
    <Link
      href={url}
      target="_blank"
      className="text-black w-[100%] h-[100%] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
    >
      <div className="w-[40%]">
        <Image
        src={data && data.image ? data.image : dataLocal.image}
        alt={data && data.title ? data.title : dataLocal.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="w-[60%]">
        <h2 className="body-lg leading-[2rem] mb-2 ">
          {data && data.title ? data.title : dataLocal.title}
        </h2>
        <p className="text-base  line-clamp-3 mb-2 ">{data && data.description ? data.description : dataLocal.description}</p>
        <span className="mt-3 opacity-50 text-xs">&nbsp;{url}</span>
      </div>
    </Link>
  );
}