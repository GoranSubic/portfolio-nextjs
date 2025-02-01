import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Recommendations/Recomm.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { MenuItems } from "@/types/menu";
import { CoverLetterComponent } from "@/components/CoverLetter/CoverLetterComponent";
import { getLinkedInUser, instanceOfLinkedInUser } from "@/utils/linkedInUser";

export default async function CoverLetter() {
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
    <BaseLayout linkedInUser={linkedInUser} activeMenu={MenuItems.COVERLETTER}>
      <div>
        <div className={classes.heading}>
          <h1 className={classes.headingTitle}>Cover Letter (generated via OpenAI)</h1>
        </div>
        <CoverLetterComponent />
      </div>
    </BaseLayout>
  );
}