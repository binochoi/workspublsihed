type Props = {
  label: string;
  count?: number;
  children: React.ReactNode;
};

export default function IconButton({ label, count, children }: Props) {
  return (
    <button
      type="button"
      aria-label={count ? `${label} ${count}개` : label}
      className="relative text-sub transition-colors hover:text-ink"
    >
      {children}
      {count ? (
        <span className="absolute -top-1.5 -right-1.5 flex size-[15px] items-center justify-center rounded-full bg-primary text-[10px] leading-none text-white">
          {count}
        </span>
      ) : null}
    </button>
  );
}
