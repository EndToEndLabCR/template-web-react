import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/env";

/**
 * Base Query Configuration for RTK Query
 * Automatically adds auth token to requests
 */

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");

    return headers;
  },
});
