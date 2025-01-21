import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { ProfessionalExperience } from "@/constants/Experience";
import { IProfessionalExperience } from "@/types/experience";
import { Experience } from "@/components/Experience/Experience";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JobsPage(props: Props) {
  const params = await props.params;
  const linkedInUser: ILinkedInUser = {
    name: 'Goran Subić',
    email: 'gsbuic@gmail.com',
    picture: '/images/GoranSubic.jpeg',
  };

  const indexOfExperience: number = ProfessionalExperience.map(experienceMap => experienceMap.slug).indexOf(params.slug);
  if (indexOfExperience === -1) {
    return notFound();
  }

  const experience: IProfessionalExperience | undefined = ProfessionalExperience[indexOfExperience];

  return (
    <>
      <BaseLayout linkedInUser={linkedInUser} >
        <div>
            <h1 className={classes.heading}>
              <Link href={"/jobs"}>/Jobs/</Link>
              {experience.company}
            </h1>
        </div>
        <Experience experience={experience} />
      </BaseLayout>
    </>
  )
}