import { FaPhp, FaDrupal, FaSymfony, FaJoomla } from "react-icons/fa";
import { IProfessionalExperience } from "../types/experience";

export const ProfessionalExperience: IProfessionalExperience[] = [
  {
    icon: FaPhp,
    company: "Act Digital Serbia",
    duration: "May 2022 - Present",
    short: "Work on developing functionalities and maintaining of project based on PHP and JavaScript frameworks.",
    description:
      `
Worked as an outsourcing team for Webedia, a French media company.
They manage a portfolio of leading brands in entertainment, lifestyle, and gaming. Short list of brands: 
750g, Purepeople, Puretrend, Purebreak, Puremedias, Terrafemina, Chartsinfrance, Minha Vida, Millenium.

      Work on developing functionalities and maintaining of project based on PHP and JavaScript frameworks.

      `,
    designation: "Software Engineer",
  },
  {
    icon: FaDrupal,
    company: "Fermicoding",
    duration: "Apr 2021 - Feb 2022",
    short: "Work on maintaining of project based on Drupal 8.",
    description:
      "Work on maintaining of project - website which besides presentation has online sale and admin, based on Drupal 8 - <a href='https://regarden.com/' target='_blank'>ReGarden.</a>",
    designation: "Web Developer",
  },
  {
    icon: FaDrupal,
    company: "Pronovix",
    duration: "Part Time Job - Apr 2021 - Nov 2021",
    short: "Work on improving functionalities for projects based on Pronovix's product created with Drupal.",
    description:
      `
- Selection process (Apr 2021) \n
- Contractor setup (Jun 2021 - Oct 2021) - Onboarding, learning Drupal and working on 
  practical examples -  Pronovix - forked project. \n
- Contract of Services - part time job (Nov 2021) - work on projects based on Pronovix's 
  product created with Drupal (Web portal that provides structured documentation to 
  productize client APIs. It provides a searchable catalog of client API products).
      `,
    designation: "Backend Developer",
  },
  {
    icon: FaJoomla,
    company: "Faculty of Law, Novi Sad",
    duration: "Feb 2018 - Feb 2020",
    short: "Website maintenance, IT support, maintenance of servers, network equipment, clients computers.",
    description:
      `
- Windows servers - Windows domain (domain controller with associated services), Windows Exchange.
- Linux servers - Ubuntu (web server with websites - Drupal, Joomla, Wordpress).
- VMware (ESXi), Hyper-V.
- Migration of the Wordpress website from external hosting to the faculty server.
- Creation and maintenance of website through CMS (Drupal CMS  Conference Website), 
  updating the content of the faculty website.
- Imlementing antivirus protection (KAV).
- Network equipment, printers.
- Clients computers, sound systems, projectors.
- Help desk.
    `,
    designation: "One man show :)",
  },
  {
    icon: FaSymfony,
    company: "CloudTech",
    duration: "Dec 2015 - Feb 2018",
    short: "Maintenance and development using PHP, Zend and Symfony frameworks, Javascript and JQuery.",
    description:
      `
- Work on maintaining of project - web site which besides presentation has online sale 
  and admin, based on Zend 1, PHP framework and Backbone, JavaScript framework. \n
- Work project based on Symfony, PHP framework - <a href="https://www.alexandar-cosmetics.com/" target="blank">Alexandar Cosmetics</a>. \n
- Through so far, my working experience was gained and expanded in working with Zend 
  and Symfony framework, Backbone framework, Twig templates, MySql Workbench, 
  Apache and Nginx web servers, Vagrant, Git (command line, SmartGit), Redmine.
      `,
    designation: "Web Developer",
  },
];
