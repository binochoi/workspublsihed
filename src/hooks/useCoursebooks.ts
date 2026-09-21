import { useQuery } from "@tanstack/react-query";
import { getCoursebooks } from "@/api/coursebook";

export function useCoursebooks() {
  return useQuery({ queryKey: ["coursebooks"], queryFn: getCoursebooks });
}
