import Link from "next/link";

const LINKS = ["회사소개", "이용약관", "개인정보처리방침"];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-8 text-sm leading-normal font-medium text-faint lg:px-[60px] lg:py-10">
      <div className="mx-auto max-w-[1320px] space-y-2">
        <ul className="flex gap-3">
          {LINKS.map((link, i) => (
            <li key={link} className="flex gap-3">
              {i > 0 && <span aria-hidden>|</span>}
              <Link href="/" className="hover:text-sub">
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          (주)히든카이스 | 대표: 안영호 | 사업자등록번호: 735-87-02522{" "}
          <Link href="/" className="underline">
            (사업자정보확인)
          </Link>
          <br />
          주소: 경기도 고양시 일산서구 일현로 97-11, 56F | 통신판매업신고: 제 2024-고양일산서-1209 |
          이메일: Hidden_kice@naver.com
        </p>
        <p>Copyright © 2026 히든카이스. All rights reserved.</p>
      </div>
    </footer>
  );
}
