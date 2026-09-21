import Image from "next/image";

// 배너를 여러 장으로 늘릴 때 이 목록에 추가합니다
const BANNERS = [
  {
    src: "/images/banner/main.png",
    alt: "히든카이스 - 모두가 푸는 건 이유가 있습니다. 상위권이 선택한 문제집, 결과로 증명된 실전 대비서",
  },
];
const TOTAL = 5;

export default function StoreBanner() {
  const banner = BANNERS[0];

  return (
    <section aria-label="프로모션" className="relative bg-black">
      <Image
        src={banner.src}
        alt={banner.alt}
        width={2149}
        height={731}
        sizes="100vw"
        preload
        className="mx-auto h-auto w-full max-w-[1920px]"
      />
      <span className="absolute right-3 bottom-3 rounded-full bg-black/30 px-2 py-0.5 text-xs font-semibold text-white lg:right-10 lg:bottom-[30px] lg:px-2.5 lg:py-1 lg:text-sm">
        1/{TOTAL}
      </span>
    </section>
  );
}
