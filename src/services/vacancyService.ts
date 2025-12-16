import type { VacancyResponse } from "../interfaces/vacancy.response";
import type { Vacancy } from "../interfaces/vacancy";
import { apiClient } from "../api/base-api";

/**
 * Service for vacancy operations
 */
export const vacancyService = {
  /**
   * Get all vacancies
   */
  async getAll(): Promise<Vacancy[]> {
    const response = await apiClient.get<VacancyResponse[]>("/vacancies");

    return response.data.map((vacancy) => ({
      id: vacancy.id,
      title: vacancy.title,
      description: vacancy.description,
      requirements: vacancy.requirements,
      location: vacancy.location,
      remoteAllowed: vacancy.remoteAllowed,
      seniority: vacancy.seniority,
      status: vacancy.status,
      salaryMin: vacancy.salaryMin,
      salaryMax: vacancy.salaryMax,
      currency: vacancy.currency,
    }));
  },

  /**
   * Get a vacancy by ID
   */
  async getById(id: string): Promise<Vacancy | null> {
    try {
      const response = await apiClient.get<VacancyResponse>(`/vacancies/${id}`);
      const vacancy = response.data;

      return {
        id: vacancy.id,
        title: vacancy.title,
        description: vacancy.description,
        requirements: vacancy.requirements,
        location: vacancy.location,
        remoteAllowed: vacancy.remoteAllowed,
        seniority: vacancy.seniority,
        status: vacancy.status,
        salaryMin: vacancy.salaryMin,
        salaryMax: vacancy.salaryMax,
        currency: vacancy.currency,
      };
    } catch {
      return null;
    }
  },
};

export default vacancyService;
