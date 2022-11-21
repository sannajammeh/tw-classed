/// <reference types="react" />
import { JsonLdProps } from './jsonld';
export interface HiringOrganization {
    name: string;
    sameAs: string;
    logo?: string;
}
export interface Place {
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    streetAddress: string;
    addressCountry: string;
}
export interface MonetaryAmount {
    currency: string;
    value: number | [number, number];
    unitText: UnitTextType;
}
export declare type UnitTextType = 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
export declare type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY' | 'INTERN' | 'VOLUNTEER' | 'PER_DIEM' | 'OTHER';
export declare type OccupationalExperienceRequirements = {
    '@type'?: 'OccupationalExperienceRequirements' | 'no requirements' | string;
    minimumMonthsOfExperience: number;
};
export declare type EducationalOccupationalCredential = {
    '@type'?: 'EducationalOccupationalCredential' | string;
    credentialCategory: 'high school' | 'associate degree' | 'bachelor degree' | 'professional certificate' | 'postgraduate degree';
};
export declare type ExperienceRequirements = {
    occupational?: OccupationalExperienceRequirements;
    educational?: EducationalOccupationalCredential;
    experienceInPlaceOfEducation?: boolean;
};
export interface JobPostingJsonLdProps extends JsonLdProps {
    keyOverride?: string;
    datePosted: string;
    description: string;
    hiringOrganization: HiringOrganization;
    title: string;
    validThrough?: string;
    applicantLocationRequirements?: string;
    baseSalary?: MonetaryAmount;
    employmentType?: EmploymentType | EmploymentType[];
    jobLocation?: Place;
    jobLocationType?: string;
    experienceRequirements?: ExperienceRequirements;
}
declare function JobPostingJsonLd({ type, keyOverride, baseSalary, hiringOrganization, applicantLocationRequirements, experienceRequirements, jobLocation, ...rest }: JobPostingJsonLdProps): JSX.Element;
export default JobPostingJsonLd;
