import axios from "axios";
import type { VacancyResponse } from "../interfaces/vacancy.response";
import type { Vacancy } from "../interfaces/vacancy";

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

// API Instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
};

export default vacancyService;
