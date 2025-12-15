export interface VacancyResponse {
  id: string;
  hiringManagerId: string;
  recruiterId?: null | string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  remoteAllowed: boolean;
  seniority: string;
  status: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  closedAt?: Date;
}
