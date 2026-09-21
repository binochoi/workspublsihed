"use client";

import { CloseIcon, SearchIcon } from "./icons";

type Props = {
  placeholder?: string;
  className?: string;
};

export default function SearchInput({ placeholder = "검색", className = "" }: Props) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex h-[42px] min-w-0 items-center gap-1.5 rounded-md border border-line-strong px-2 focus-within:border-mute ${className}`}
    >
      <SearchIcon size={20} className="shrink-0 text-mute" />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 text-base font-semibold outline-none placeholder:text-mute"
      />
      <button type="reset" aria-label="지우기" className="shrink-0 text-mute hover:text-ink">
        <CloseIcon size={16} />
      </button>
    </form>
  );
}
