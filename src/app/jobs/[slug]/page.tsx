import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Experience/Experience.module.css';
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

// Next.js will invalidate the cache when a
// request comes in, at most once every...
export const revalidate = 3600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = false; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const experiences: IProfessionalExperience[] = ProfessionalExperience;

  return experiences.map((experience) => ({
    slug: String(experience.slug),
  }));
}

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
      <BaseLayout linkedInUser={linkedInUser} activeMenu={experience.slug} >
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