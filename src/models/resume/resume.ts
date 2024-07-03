import type { AcademicInfo, PersonalInfo, ProfessionalInfo } from ".";

export interface Resume {
    personalInfo: PersonalInfo;
    academicInfo: AcademicInfo;
    professionalInfo: ProfessionalInfo;
}
