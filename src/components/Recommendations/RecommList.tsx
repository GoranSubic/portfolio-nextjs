import { Recommendations } from "@/constants/Recommendations";
import Image from "next/image";
import classes from "./Recomm.module.css";
import Link from "next/link";
import TextWithLineBreaks from "@/utils/textWithLineBreaks";

export default async function RecommendationList() {
  return (
    <div className={classes.root}>
      <ol className={classes.list}>
        {Recommendations.map((recommendation, idx) => (
          <li key={idx}>
            <div className={classes.itemWrapper}>
              <div className={classes.imageWrapper}>
                <Link href={recommendation.linkedin}>
                  <Image
                    src={recommendation.image}
                    alt={recommendation.person}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </Link>
              </div>
              <div className={classes.contentWrapper}>
                <div className={classes.contentHeadingWrapper}>
                  <p>
                    <Link href={recommendation.linkedin}>
                      {recommendation.person}
                    </Link>
                  </p>
                  <p>{recommendation.designation}</p>
                  <p>({recommendation.company})</p>
                  <p className={classes.related}>{recommendation.related}</p>
                </div>
                <div className={classes.content}>
                  {
                    <TextWithLineBreaks
                      text={recommendation.description}
                      classParagraphBlock={classes.paragraphBlock}
                    />
                  }
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
