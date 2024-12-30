import { IconType } from "react-icons";

export interface IRecommendation {
  icon: IconType;
  image: string;
  type: string;
  linkedin: string;
  person: string;
  company: string;
  designation: string;
  created: string;
  description: string;
  related: string;
}

export interface ILinkedInUser {
  name: string;
  email: string;
  picture: string;
}