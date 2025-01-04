import { FC } from "react";
import classes from "./Footer.module.css";
import { LIBRARIES_USED_LINKS } from "@/constants/SocialLinks";

export const Footer: FC = () => {
  return (
    <div className={classes.root}>
      <div className="flex flex-row">
        <p className={classes.builtByText}>
          Built with&nbsp;
          {LIBRARIES_USED_LINKS.map((externalLink) => (
            <a
              key={externalLink.link}
              href={externalLink.link}
              target={"_blank"}
              rel={"noreferrer nofollow"}
            >
              <span>
                {<externalLink.component aria-label={externalLink.name} />}
              </span>
            </a>
          ))}
        </p>
      </div>
      <div className={classes.bottomFooter}>
        <div className={classes.myText}>
          <p>Goran Subić</p>
          <p><a href="Tel:+381658583432">Phone: +381 65/85-83-432</a></p>
          <p><a href="Mailto:gsubic@gmail.com">Email: gsubic@gmail.com</a></p>
        </div>

        <div className={classes.rightsText}>
          <p>©{new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
