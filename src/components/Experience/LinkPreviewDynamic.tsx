import Link from "next/link";
import Image from "next/legacy/image";
import { FC } from "react";
import classes from "./Experience.module.css";

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
      className={classes.linkPreview}
    >
      <div className={classes.linkPreviewImage} >
        {data && data.image && <Image
        src={data && data.image}
        alt={data && data.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        />}
      </div>
      <div className={classes.linkPreviewInfo}>
        <h2 className={classes.linkPreviewInfoHeading}>
          {data && data.title}
        </h2>
        <p className={classes.linkPreviewInfoDesc}>{data && data.description}</p>
        <span className={classes.linkPreviewInfoUrl}>{url}</span>
      </div>
    </Link>
  );
}

export default LinkPreviewDynamic;