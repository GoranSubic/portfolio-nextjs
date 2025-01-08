import { FaPhp, FaDrupal, FaSymfony, FaJoomla } from "react-icons/fa";
import { IProfessionalExperience } from "@/types/experience";

export const ProfessionalExperience: IProfessionalExperience[] = [
  {
    icon: FaPhp,
    company: "Act Digital Serbia",
    duration: "May 2022 - Present",
    short: "Work on developing functionalities and maintaining of project based on PHP and JavaScript frameworks.",
    description:
      `
I was part of the outsourcing team for <a href='https://webedia-group.com/webedia-networks/' target='_blank'>Webedia Group</a>, a French media company. Worked on a wide network of multi-local leading websites, social pages and communities, specialising in the entertainment and recreation industries.<paragraph>
They manage a portfolio of leading brands in entertainment, lifestyle, and gaming.<nextline>
Short list of brands that were managed: 750g, Purepeople, Puretrend, Purebreak, Puremedias, Terrafemina, Chartsinfrance, Minha Vida, Millenium.<paragraph>
Website projects were based on PHP and JavaScript frameworks. Part of them were based on their custom CMS and had same Admin panel for managing content.<paragraph>
During period of three years my job was independent development, integration, and implementation of new programs, as well as maintenance of existing ones.
The tehnologies that I worked with are: PHP, Symfony, EasyAdmin, Laravel, Laravel Nova, JavaScript, Vue, MySQL, Postgres, Docker, Git, Jira.
      `,
    designation: "Software Engineer",
    slug: "act-digital-serbia",
    url: "https://actdigital.com/",
    image: "",
  },
  {
    icon: FaDrupal,
    company: "Fermicoding",
    duration: "Apr 2021 - Feb 2022",
    short: "Work on maintaining of project based on Drupal 8.",
    description:
      `
Project maintenance, upgrading existing and adding new functionalities
- Drupal 8 multi-site including a web presentation with online sales and an admin section (as a subdomain - intranet) <a href='https://regarden.com/' target='_blank'>ReGarden.</a>
      `,
    designation: "Web Developer",
    slug: "fermicoding",
    url: "https://www.fermicoding.com/",
    image: "",
  },
  {
    icon: FaDrupal,
    company: "Pronovix",
    duration: "Part Time Job from Apr - Nov 2021",
    short: "Part-time contract of service; worked on projects based on Pronovix's product created with Drupal.",
    description:
      `
Selection process (Apr 2021).<paragraph>
Contractor setup (Jun 2021 - Oct 2021) - Onboarding, learning Drupal and working on practical examples -  Pronovix - forked project.<paragraph>
Contract of Services - Nov 2021 - Part-time contract of service; worked on projects based on Pronovix's product created with Drupal (a
web portal that provides structured documentation to productize client APIs and provides a searchable catalog of
client API products).
      `,
    designation: "Backend Developer",
    slug: "pronovix",
    url: "https://pronovix.com/",
    image: "",
  },
  {
    icon: FaJoomla,
    company: "Faculty of Law, Novi Sad",
    duration: "Feb 2018 - Feb 2020",
    short: "Website maintenance, IT support, maintenance of servers, network equipment, clients computers.",
    description:
      `
Complete information system maintenance. Responsible for the following:<paragraph>
Windows servers: Windows domain (domain controller with associated services), Windows Exchange.<paragraph>
Linux servers: Ubuntu (web server with websites - Drupal, Joomla, Wordpress).<paragraph>
VMware (ESXi), Hyper-Vo Creation and maintenance of the faculty website through CMS, updating the content of the website,
migration of the website from external hosting to the faculty server.<paragraph>
Maintaining network equipment, printers, client computers, sound systems, projectors; implementing
antivirus protection (KAV); help desk - customer support.
    `,
    designation: "One man show :)",
    slug: "faculty-of-law-novi-sad",
    url: "https://pf.uns.ac.rs/",
    image: "/images/experiences/pfunsac.jpeg",
  },
  {
    icon: FaSymfony,
    company: "CloudTech",
    duration: "Dec 2015 - Feb 2018",
    short: "Maintenance and development using PHP, Zend and Symfony frameworks, Javascript and JQuery.",
    description:
      `
During my time here, I gained experience with Zend and Symfony frameworks, Backbone framework, Twig
templates, MySql Workbench, Apache and Nginx web servers, Vagrant, Git (command line, SmartGit), and
Redmine. My work included:<paragraph>
Maintaining a website with presentation, online sales and an admin section, built on Zend 1 framework
and Backbone JavaScript framework.<paragraph>
Building a new project based on the Symfony framework: <a href="https://www.alexandar-cosmetics.com/" target="blank">Alexandar Cosmetics</a>.
      `,
    designation: "Web Developer",
    slug: "cloudtech",
    url: "https://www.alexandar-cosmetics.com/",
    image: "/images/experiences/alexandar.jpeg",
  },
];
