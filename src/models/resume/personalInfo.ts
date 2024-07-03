import type { Certificate, Hobbie, Language, Skill, Social, Tools } from "./";
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
    skills: Skill[];
    tools: ToolGroup[];
}
