"use client";

import { useState } from "react";
import { useCoursebooks } from "@/hooks/useCoursebooks";
import type { CoursebookType } from "@/types/coursebook";
import SearchInput from "@/ui/SearchInput";
import Tabs from "@/ui/Tabs";
import CoursebookList from "./CoursebookList";
import CoursebookSkeleton from "./CoursebookSkeleton";

type Filter = "all" | CoursebookType;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "pass", label: "패스" },
  { value: "single", label: "단품" },
];

export default function CoursebookSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const { data, isPending, isError } = useCoursebooks();

  const books = filter === "all" ? data : data?.filter((book) => book.type === filter);

  return (
    <section aria-label="교재 목록" className="mx-auto max-w-[1440px] px-5 py-8 lg:px-20 lg:py-[50px]">
      <div className="mb-6 flex items-center gap-4 lg:mb-9 lg:justify-end">
        <SearchInput className="flex-1 lg:w-[250px] lg:flex-none" />
        <Tabs options={FILTERS} value={filter} onChange={setFilter} />
      </div>

      {isPending ? (
        <CoursebookSkeleton />
      ) : isError ? (
        <p className="py-20 text-center text-mute">교재를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
      ) : (
        // 필터가 바뀌면 목록을 새로 그려서 등장 효과를 다시 보여 줍니다
        <CoursebookList key={filter} books={books ?? []} />
      )}
    </section>
  );
}
