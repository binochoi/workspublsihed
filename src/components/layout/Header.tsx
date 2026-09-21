import Image from "next/image";
import Link from "next/link";
import IconButton from "@/ui/IconButton";
import { BellIcon, CartIcon, UserIcon } from "@/ui/icons";

const MENUS = ["스토어", "AI OMR WORK", "챌린지", "히든카이스 소개"];

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center px-5 pt-4 lg:h-[100px] lg:flex-nowrap lg:px-20 lg:pt-0">
        <Link href="/" aria-label="HIDDEN KICE 홈">
          <Image src="/images/logo.svg" alt="HIDDEN KICE" width={143} height={18} preload />
        </Link>

        {/* 모바일에서는 메뉴가 아래 줄로 내려가고 옆으로 밀어서 봅니다 */}
        <nav className="order-last -mx-5 mt-2 w-[calc(100%+40px)] overflow-x-auto px-5 lg:order-none lg:mx-0 lg:mt-0 lg:ml-[100px] lg:w-auto lg:px-0">
          <ul className="flex gap-6 py-2.5 text-base font-semibold whitespace-nowrap lg:gap-8 lg:py-0 lg:text-lg">
            {MENUS.map((menu, i) => (
              <li key={menu}>
                <Link
                  href="/"
                  aria-current={i === 0 ? "page" : undefined}
                  className={i === 0 ? "text-primary" : "text-mute transition-colors hover:text-ink"}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5 lg:gap-6">
          <IconButton label="장바구니" count={1}>
            <CartIcon />
          </IconButton>
          <IconButton label="알림" count={1}>
            <BellIcon />
          </IconButton>
          <IconButton label="내 정보">
            <UserIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
