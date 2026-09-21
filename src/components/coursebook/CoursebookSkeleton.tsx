import Skeleton from "@/ui/Skeleton";
import { GRID } from "./CoursebookList";

export default function CoursebookSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className={GRID} aria-busy aria-label="교재 불러오는 중">
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>
          <Skeleton className="aspect-[250/320]" />
          <Skeleton className="mt-2 h-4 w-10" />
          <Skeleton className="mt-2 h-4 w-4/5" />
          <Skeleton className="mt-3 h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
