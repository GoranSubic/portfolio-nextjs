import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { ProfessionalExperience } from "@/constants/Experience";
import { IProfessionalExperience } from "@/types/experience";
import { Experience } from "@/components/Experience/Experience";

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
  const experience: IProfessionalExperience | undefined = ProfessionalExperience.find(experience => experience.slug === params.slug);

  if (experience === undefined) {
    return <p className='text-center'>No experience found</p>;
  }

  return (
    <>
      <BaseLayout linkedInUser={linkedInUser} >
        <div>
            <h1 className={classes.heading}>{experience.company}</h1>
        </div>
        <Experience experience={experience} />
      </BaseLayout>
    </>
  )
}