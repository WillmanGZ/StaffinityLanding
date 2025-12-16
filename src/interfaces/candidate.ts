export interface CandidateRequest {
  vacancyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resumeUrl: string;
  linkedinUrl?: string;
  source: string;
  applicationStatus: "APPLIED";
}
