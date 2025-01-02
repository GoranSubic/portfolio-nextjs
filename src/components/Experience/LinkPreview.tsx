import { extractMetaTags } from "@/utils/extractMetaTags";
import Link from "next/link";
import { FC } from "react";

interface Props {
    url: string;
}

export const LinkPreview: FC<Props> = async ({ url }) => {
   const data = await extractMetaTags(url);
 
   if (!data) {
     return <p>Failed to fetch link preview.</p>;
   }
   return (
     <Link
       href={url}
       target="_blank"
       className="text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
       style={{
          textDecoration: "none",
          width: "100%",
        //   margin: "0 auto",
       }}
     >
       <div className="object-cover h-full">
         <img
           src={data.image}
           alt="Link Preview"
           className="object-cover h-full w-[100%] m-0"
         />
       </div>
       <div className="w-[60%]">
         <h3 className="body-lg leading-[2rem] mb-2 ">
           {data.title}
         </h3>
         <p className="text-base  line-clamp-3 mb-2 ">{data.description}</p>
         <span className="mt-3 opacity-50 text-xs">&nbsp;{url}</span>
       </div>
     </Link>
   );
 }