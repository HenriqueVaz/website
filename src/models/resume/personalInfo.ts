import type { Certificate, Hobbie, Language, Skill, Social, Tools } from "./";
import type { Award } from "./award";
import type { ToolGroup } from "./toolGroup";

export interface PersonalInfo {
    name: string;
    birthDate: Date;
    location: string;
    email: string;
    socials: Social[];
    hobbies: Hobbie[];
    languages: Language[];
    certifications: Certificate[];
	awards: Award[];
    skills: Skill[];
    tools: ToolGroup[];
}
