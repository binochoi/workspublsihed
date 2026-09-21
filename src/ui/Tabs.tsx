import { Fragment } from "react";

type Option<T> = { value: T; label: string };

type Props<T> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export default function Tabs<T extends string>({ options, value, onChange }: Props<T>) {
  return (
    <div className="flex shrink-0 items-center gap-[11px] text-base font-semibold">
      {options.map((option, i) => (
        <Fragment key={option.value}>
          {i > 0 && (
            <span aria-hidden className="text-mute">
              |
            </span>
          )}
          <button
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={
              option.value === value
                ? "text-ink"
                : "text-mute transition-colors hover:text-ink"
            }
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
