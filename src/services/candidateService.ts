import type { Candidate, CandidateRequest } from "../interfaces/candidate";
import { apiClient } from "../api/base-api";

/**
 * Service for candidate operations
 */
export const candidateService = {
  /**
   * Submit a job application
   */
  async apply(candidateData: CandidateRequest): Promise<Candidate> {
    const response = await apiClient.post<Candidate>(
      "/candidates",
      candidateData
    );
    return response.data;
  },
};

export default candidateService;
