export interface Candidate {
  vacancyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resumeUrl: string;
  linkedinUrl?: string;
  source: string;
  applicationStatus: ApplicationStatus;
}

export type ApplicationStatus =
  | "APPLIED"
  | "REVIEWING"
  | "INTERVIEW"
  | "OFFER"
  | "HIRED"
  | "REJECTED";

export interface CandidateRequest {
  vacancyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resumeUrl: string;
  linkedinUrl?: string;
  source: string;
}
