import { Movie } from "@/types/Movie";
import { apiFetch } from "./api";
import { PaginatedResponse } from "@/types/Pagination";

export async function getMovies(
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return apiFetch<PaginatedResponse<Movie>>(
    `/movies?page=${page}`
  );
}