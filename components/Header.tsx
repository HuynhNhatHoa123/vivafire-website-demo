"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Dự án", href: "/du-an" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navClass = (href: string) =>
    `whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-200 ${
      isItemActive(href)
        ? "text-[#E97916]"
        : "text-[#292929] hover:text-[#E97916]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEEEEE] bg-white">
      <div className="mx-auto flex min-h-[60px] max-w-[1240px] items-center justify-between gap-5 px-5 py-2 lg:px-8">
        {/* LOGO VIVAFIRE */}
        <Link
          href="/"
          aria-label="VIVAFIRE - Trang chủ"
          className="relative flex h-[42px] w-[165px] shrink-0 items-center"
        >
          <Image
            src="/vivafire-logo.png"
            alt="VIVAFIRE - Fire Protection Solutions"
            width={500}
            height={150}
            priority
            className="h-full w-full object-contain object-left"
            sizes="165px"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center justify-center gap-5 xl:flex 2xl:gap-7"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isItemActive(item.href) ? "page" : undefined
              }
              className={navClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* NÚT YÊU CẦU BÁO GIÁ */}
        <Link
          href="/lien-he"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-sm bg-[#F58220] px-4 py-3 text-[12px] font-bold text-[#202020] transition-colors duration-200 hover:bg-[#E87513] sm:px-5"
        >
          <span>Yêu cầu báo giá</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* MENU MOBILE / TABLET */}
      <nav
        aria-label="Điều hướng trên thiết bị di động"
        className="flex gap-6 overflow-x-auto border-t border-[#F1F1F1] bg-white px-5 py-2.5 xl:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              isItemActive(item.href) ? "page" : undefined
            }
            className={`shrink-0 text-[13px] font-semibold transition-colors ${
              isItemActive(item.href)
                ? "text-[#E97916]"
                : "text-[#292929] hover:text-[#E97916]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
