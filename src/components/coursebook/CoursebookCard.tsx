import Image from "next/image";
import { won } from "@/lib/format";
import { TYPE_LABEL, type Coursebook } from "@/types/coursebook";

type Props = {
  book: Coursebook;
  index: number;
};

export default function CoursebookCard({ book, index }: Props) {
  const onSale = book.discount_rate > 0;

  return (
    <article
      className="motion-safe:animate-rise"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="relative aspect-[250/320] overflow-hidden rounded-md border border-line bg-white">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(min-width: 1024px) 250px, (min-width: 640px) 33vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="mt-1 text-base leading-[1.6] font-semibold">
        <p className="text-mute">{TYPE_LABEL[book.type]}</p>
        <h3 className="text-black">{book.title}</h3>
        <div className="mt-2">
          {onSale && <del className="block text-sm font-medium text-faint">{won(book.price)}</del>}
          <p className="text-black">
            {onSale && <span className="mr-1.5 text-sale">{book.discount_rate}%</span>}
            {won(book.sale_price)}
          </p>
        </div>
      </div>
    </article>
  );
}
