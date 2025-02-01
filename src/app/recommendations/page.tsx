import { BaseLayout } from "@/layouts/BaseLayout";
import RecommendationList from "@/components/Recommendations/RecommList";
import classes from '@/components/Recommendations/Recomm.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import Image from "next/image";
import Link from "next/link";
import { MenuItems } from "@/types/menu";
import { getLinkedInUser, instanceOfLinkedInUser } from "@/utils/linkedInUser";

export default async function Recommendations() {
  const linkedInUserData: unknown = await getLinkedInUser();

  let linkedInUser: ILinkedInUser = {
    name: 'Goran Subić',
    email: 'gsbuic@gmail.com',
    picture: '/images/GoranSubic.jpeg',
  };

  if (linkedInUserData !== undefined && linkedInUserData !== null && instanceOfLinkedInUser(linkedInUserData)) {
    linkedInUser = linkedInUserData as ILinkedInUser;
  }

  return (
    <BaseLayout linkedInUser={linkedInUser} activeMenu={MenuItems.RECOMMENDATIONS}>
      <div>
        <div className={classes.heading}>
          <h1 className={classes.headingTitle}>Recommendations</h1>
          <span className={classes.headingTitle}>from:</span>
          <Link
            href="https://www.linkedin.com/in/goran-subic/details/recommendations/"
            target="_blank"
            className={classes.headingTitleLn}
          >
            <Image
              src="/images/recommendations/LI-Logo.png"
              alt="LinkedIn Logo"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
        <RecommendationList />
      </div>
    </BaseLayout>
  );
}