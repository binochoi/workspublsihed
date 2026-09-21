import type { Coursebook } from "@/types/coursebook";
import CoursebookCard from "./CoursebookCard";

export const GRID =
  "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-9 xl:gap-x-[93px]";

export default function CoursebookList({ books }: { books: Coursebook[] }) {
  if (books.length === 0) {
    return <p className="py-20 text-center text-mute">해당하는 교재가 없습니다.</p>;
  }

  return (
    <div className={GRID}>
      {books.map((book, i) => (
        <CoursebookCard key={book.id} book={book} index={i} />
      ))}
    </div>
  );
}
