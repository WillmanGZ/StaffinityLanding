import type { CandidateRequest } from "../interfaces/candidate";
import { apiClient } from "../api/base-api";

/**
 * Service for candidate operations
 */
export const candidateService = {
  /**
   * Submit a job application
   */
  async apply(candidateData: CandidateRequest) {
    const response = await apiClient.post("/candidates", candidateData);
    return response.data;
  },
};
