import { Actor } from "@/types/Actors";
import { apiFetch } from "./api";
import { PaginatedResponse } from "@/types/Pagination";

export async function getActors(
  page: number = 1
): Promise<PaginatedResponse<Actor>> {
  return apiFetch<PaginatedResponse<Actor>>(
    `/actors?page=${page}`
  );
}