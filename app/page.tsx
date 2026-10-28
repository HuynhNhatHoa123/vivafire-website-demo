"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const ORANGE = "#FF8B14";
const DARK = "#19202B";
const MUTED = "#5B6472";
const BORDER = "#E3E6EB";
const LIGHT = "#F5F6F8";

const products = [
  {
    number: "01",
    image: "/images/vivafire/fire-alarm-products.png",
    category: "BÁO CHÁY",
    title: "Hệ thống báo cháy",
    description:
      "Tủ trung tâm, đầu báo khói, đầu báo nhiệt, nút nhấn, chuông còi, module, điện thoại khẩn cấp, bảng hiển thị và phần mềm giám sát, thiết bị truyền tin về phòng cháy chữa cháy.",
  },
  {
    number: "02",
    image: "/images/vivafire/factory-aerial.jpeg",
    category: "CHỮA CHÁY",
    title: "Hệ thống chữa cháy",
    description:
      "Van, phụ kiện ống thép, đầu phun sprinkler, tủ vòi chữa cháy, cuộn vòi, lăng phun, trụ chữa cháy ngoài nhà và bình chữa cháy.",
  },
  {
    number: "03",
    image: "/images/vivafire/doors-catalog.png",
    category: "CỬA & MÀN NGĂN CHÁY",
    title: "Cửa và màn ngăn cháy VIVADOORS",
    description:
      "Cửa thép, cửa chống cháy, cửa cuốn và màn ngăn cháy, phục vụ các yêu cầu phân khu và ngăn cháy của công trình.",
  },
  {
    number: "04",
    image: "/images/vivafire/commercial-building.png",
    category: "ĐIỆN & ĐIỆN NHẸ",
    title: "Hệ thống điện và điện nhẹ",
    description:
      "Công tắc, ổ cắm, thang máng cáp, cáp mạng và cáp quang cùng phụ kiện, tủ rack, hộp ELV, cáp tín hiệu và âm thanh công cộng.",
  },
  {
    number: "05",
    image: "/images/vivafire/hotel-building-render.png",
    category: "ĐIỀU HÒA & THÔNG GIÓ",
    title: "Hệ thống HVAC",
    description:
      "Hệ thống điều hòa không khí, thông gió, van gió điều khiển điện, van gió, van ngăn cháy, miệng gió và louver, van xả áp và van gió một chiều.",
  },
];

const solutions = [
  {
    number: "01",
    title: "VIVA ASSIST",
    subtitle: "Digital twin và quản lý vận hành tòa nhà",
    description:
      "Hỗ trợ quản lý thông tin và vận hành hệ thống kỹ thuật tòa nhà.",
  },
  {
    number: "02",
    title: "VIVA HOMES",
    subtitle: "Ứng dụng cư dân và quản lý chung cư",
    description:
      "Kết nối cư dân với các tiện ích và hoạt động quản lý chung cư.",
  },
  {
    number: "03",
    title: "VIVA PARKING",
    subtitle: "Hệ thống bãi đỗ xe thông minh",
    description:
      "Hỗ trợ quản lý phương tiện và hoạt động bãi đỗ xe.",
  },
];

const projects = [
  {
    image: "/images/vivafire/factory-building.jpeg",
    type: "NHÀ MÁY",
    title: "Nhà xưởng Âm học Quốc Quang",
    location: "Đà Nẵng",
  },
  {
    image: "/images/vivafire/apartment-render.jpeg",
    type: "CHUNG CƯ",
    title: "Chung cư C2 Phú Mỹ",
    location: "Thủ Dầu Một",
  },
  {
    image: "/images/vivafire/installed-fire-doors.png",
    type: "NHÀ MÁY",
    title: "Nhà máy FOOKYIK FURNITURE VN",
    location: "Bàu Bàng",
  },
  {
    image: "/images/vivafire/hotel-building-render.png",
    type: "KHÁCH SẠN",
    title: "ICONIC Long Hải",
    location: "Bà Rịa – Vũng Tàu",
  },
  {
    image: "/images/vivafire/commercial-building.png",
    type: "CÔNG NGHIỆP",
    title: "Trạm biến áp 500kV Nhà Bè – Ô Môn (Máy 2)",
    location: "Nhà Bè, TP. Hồ Chí Minh",
  },
  {
    image: "/images/vivafire/residential-towers.jpeg",
    type: "CHUNG CƯ",
    title: "Chung cư KIỀU Plaza",
    location: "Quận 5, TP. Hồ Chí Minh",
  },
];

const services = [
  "Tư vấn thiết kế",
  "Cung cấp thiết bị",
  "Cung cấp và tư vấn giải pháp",
  "Thi công lắp đặt và bảo trì",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.08em] leading-5 text-[#FF8B14]">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-full break-words text-3xl font-bold uppercase leading-[1.2] tracking-normal text-[#19202B] sm:text-4xl">
        {children}
      </h2>
    </>
  );
}

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-[#FF8B14] transition hover:text-[#E67300]"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      className="min-h-screen bg-white text-[#19202B] antialiased"
      style={{ fontFamily: "Arial, Roboto, sans-serif", lineHeight: 1.6 }}
    >
      <Header />

      {/* 01. HERO - BANNER */}
      <section className="relative overflow-hidden bg-[#19202B] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_20%,rgba(255,139,20,0.22),transparent_60%),repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0_1px,transparent_1px_80px),repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0_1px,transparent_1px_80px)]" />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.9fr] lg:gap-12 lg:px-8 lg:py-[88px]">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-3.5 py-1.5 text-[11px] font-bold uppercase leading-5 tracking-[0.06em] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#FF8B14]" />
              Kỷ luật · Hệ thống · Công nghệ · Chính trực
            </span>

            <h1 className="mt-5 text-[34px] font-bold uppercase leading-[1.22] tracking-normal sm:text-5xl lg:text-[56px]">
              An toàn hệ thống
              <br />
              <span className="text-[#FF8B14]">Vững bền niềm tin</span>
            </h1>

            <p className="mt-5 max-w-[60ch] text-base leading-7 text-[#B9C0CA] sm:text-lg">
              VIVAFIRE là đơn vị hoạt động trong lĩnh vực phòng cháy chữa cháy,
              tư vấn thiết kế, cung cấp thiết bị, tư vấn giải pháp, thi công
              lắp đặt và bảo trì hệ thống PCCC cho công trình.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 rounded-sm border border-[#FF8B14] bg-[#FF8B14] px-5 py-3 text-sm font-semibold text-[#19202B] transition hover:border-[#E67300] hover:bg-[#E67300]"
              >
                Xem sản phẩm ↗
              </Link>

              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 rounded-sm border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#19202B]"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7">
            <Eyebrow>Giải pháp kỹ thuật PCCC</Eyebrow>

            <h2 className="mt-2 break-words text-2xl font-bold leading-[1.3] tracking-normal text-white sm:text-3xl">
              Giải pháp đồng bộ cho công trình
            </h2>

            <p className="mt-3 break-words text-sm leading-6 text-[#B9C0CA]">
              Từ tư vấn thiết kế, lựa chọn thiết bị đến thi công lắp đặt và
              bảo trì, đồng hành cùng khách hàng trong từng hạng mục kỹ thuật.
            </p>

            <div className="mt-4">
              <ActionLink href="/giai-phap">Khám phá giải pháp ↗</ActionLink>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-white/[0.07] p-4">
                <strong className="block text-xl font-bold text-[#FF8B14] sm:text-2xl">
                  PCCC
                </strong>
                <span className="text-xs text-[#B9C0CA] sm:text-sm">
                  Phòng cháy chữa cháy
                </span>
              </div>

              <div className="bg-white/[0.07] p-4">
                <strong className="block text-xl font-bold text-[#FF8B14] sm:text-2xl">
                  M&E
                </strong>
                <span className="text-xs text-[#B9C0CA] sm:text-sm">
                  Hệ thống kỹ thuật
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-8 gap-y-2 px-4 py-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            {services.map((item) => (
              <span key={item}>
                <span className="mr-2 font-bold text-[#FF8B14]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 02. GIỚI THIỆU VIVAFIRE */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-[72px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14 lg:px-8">
          <div>
            <SectionTitle eyebrow="Về VIVAFIRE">
              Đối tác kỹ thuật đáng tin cậy cho dự án PCCC
            </SectionTitle>
          </div>

          <div>
            <p className="text-[15px] leading-[1.85] text-[#5B6472]">
              Được thành lập năm 2021 tại TP. Hồ Chí Minh, VIVAFIRE hoạt động
              trong lĩnh vực phòng cháy chữa cháy, cung cấp thiết bị và giải
              pháp kỹ thuật cho công trình. Với định hướng phát triển dựa trên
              kỷ luật, năng lực chuyên môn và sự chính trực, VIVAFIRE hướng đến
              việc mang lại các giải pháp phù hợp với yêu cầu thực tế của khách
              hàng.
            </p>

            <p className="mt-4 text-[15px] leading-[1.85] text-[#5B6472]">
              Đội ngũ kỹ thuật đồng hành cùng khách hàng từ khâu tư vấn, lựa
              chọn thiết bị đến triển khai và bảo trì hệ thống.
            </p>

            <div className="mt-6">
              <ActionLink href="/gioi-thieu">
                Tìm hiểu về VIVAFIRE ↗
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* 03. DANH MỤC SẢN PHẨM */}
      <section
        id="products"
        className="scroll-mt-24 bg-[#F5F6F8] py-16 sm:py-[72px]"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionTitle eyebrow="Sản phẩm">
                Danh mục sản phẩm VIVAFIRE
              </SectionTitle>

              <p className="mt-3.5 max-w-[68ch] text-[15px] leading-[1.85] text-[#5B6472]">
                Giải pháp trọn gói cho công trình công nghiệp, thương mại và
                dân dụng: từ hệ thống báo cháy, chữa cháy đến cửa ngăn cháy,
                điện và hệ thống điều hòa thông gió.
              </p>
            </div>

            <ActionLink href="/san-pham">Xem toàn bộ sản phẩm ↗</ActionLink>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.number}
                className="flex flex-col border border-[#E3E6EB] bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#19202B]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#19202B]/85 via-[#19202B]/10 to-transparent" />

                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase leading-5 tracking-[0.06em] text-white">
                    {product.category}
                  </span>

                  <span className="absolute right-3 top-3 rounded-sm bg-black/45 px-2 py-1 text-[10px] text-white">
                    Ảnh minh họa
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-[22px]">
                  <h3 className="break-words text-lg font-bold leading-[1.4] tracking-normal sm:text-xl">
                    {product.title}
                  </h3>

                  <p className="flex-1 break-words text-[15px] leading-[1.75] text-[#5B6472]">
                    {product.description}
                  </p>

                  <ActionLink href="/san-pham">Xem danh mục →</ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04. GIẢI PHÁP CÔNG NGHỆ */}
      <section id="solutions" className="scroll-mt-24 py-16 sm:py-[72px]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionTitle eyebrow="Giải pháp">
                Giải pháp công nghệ cho tòa nhà
              </SectionTitle>

              <p className="mt-3.5 max-w-[65ch] text-[15px] leading-[1.85] text-[#5B6472]">
                Các giải pháp hỗ trợ quản lý, kết nối và vận hành công trình
                theo nhu cầu sử dụng thực tế.
              </p>
            </div>

            <ActionLink href="/giai-phap">Tìm hiểu thêm →</ActionLink>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="border border-[#E3E6EB] bg-white p-6 transition hover:border-[#FF8B14] sm:p-7"
              >
                <span className="text-sm font-bold leading-5 tracking-[0.08em] text-[#FF8B14]">
                  {solution.number}
                </span>

                <h3 className="mt-4 break-words text-xl font-bold leading-[1.35] tracking-normal sm:text-2xl">{solution.title}</h3>

                <h4 className="mt-3 break-words text-base font-semibold leading-7">
                  {solution.subtitle}
                </h4>

                <p className="mt-3 break-words text-[15px] leading-[1.75] text-[#5B6472]">
                  {solution.description}
                </p>

                <div className="mt-5">
                  <ActionLink href="/giai-phap">Tìm hiểu thêm →</ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. DỰ ÁN TIÊU BIỂU */}
      <section
        id="projects"
        className="scroll-mt-24 bg-[#F5F6F8] py-16 sm:py-[72px]"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionTitle eyebrow="Dự án tiêu biểu">
                Dấu ấn trên nhiều công trình
              </SectionTitle>

              <p className="mt-3.5 max-w-[62ch] text-[15px] leading-[1.85] text-[#5B6472]">
                Một số công trình tham khảo trong danh mục dự án. Hình ảnh,
                thông tin và phạm vi công việc cần được đối chiếu với hồ sơ
                chính thức trước khi công bố.
              </p>
            </div>

            <ActionLink href="/du-an">Xem danh sách dự án ↗</ActionLink>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col border border-[#E3E6EB] bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#19202B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#19202B]/80 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase leading-5 tracking-[0.06em] text-white">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-[22px]">
                  <p className="text-xs font-bold uppercase leading-5 tracking-[0.06em] text-[#FF8B14]">
                    {project.type}
                  </p>

                  <h3 className="break-words text-lg font-bold leading-[1.4] tracking-normal sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="break-words text-sm leading-6 text-[#5B6472]">
                    {project.location}
                  </p>

                  <div className="mt-auto pt-2">
                    <ActionLink href="/du-an">Xem dự án →</ActionLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06. LIÊN HỆ NHANH */}
      <section id="contact" className="scroll-mt-24 py-16 sm:py-[72px]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 gap-8 overflow-hidden bg-[#19202B] p-6 text-white sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_90%_at_100%_50%,rgba(255,139,20,0.25),transparent_70%)]" />

            <div className="relative">
              <Eyebrow>Kết nối với VIVAFIRE</Eyebrow>

              <h2 className="text-3xl font-bold uppercase leading-[1.25] tracking-normal sm:text-[34px]">
                Cần thiết bị hoặc giải pháp PCCC cho công trình?
              </h2>

              <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.85] text-[#B9C0CA]">
                Gửi thông tin dự án, danh mục thiết bị hoặc hồ sơ kỹ thuật để
                đội ngũ VIVAFIRE có cơ sở tiếp nhận và trao đổi nhu cầu của bạn.
              </p>

              <div className="mt-6">
                <ActionLink href="/lien-he">Thông tin liên hệ →</ActionLink>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative grid gap-2.5">
              <input
                required
                name="name"
                placeholder="Họ và tên"
                aria-label="Họ và tên"
                className="w-full min-w-0 rounded-sm border border-white/20 bg-white/[0.08] px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#B9C0CA] focus:border-[#FF8B14]"
              />

              <input
                required
                name="phone"
                type="tel"
                placeholder="Số điện thoại"
                aria-label="Số điện thoại"
                className="w-full min-w-0 rounded-sm border border-white/20 bg-white/[0.08] px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#B9C0CA] focus:border-[#FF8B14]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full min-w-0 rounded-sm border border-white/20 bg-white/[0.08] px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#B9C0CA] focus:border-[#FF8B14]"
              />

              <input
                name="project"
                placeholder="Tên dự án / nhu cầu"
                aria-label="Tên dự án hoặc nhu cầu"
                className="w-full min-w-0 rounded-sm border border-white/20 bg-white/[0.08] px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#B9C0CA] focus:border-[#FF8B14]"
              />

              <button
                type="submit"
                className="mt-1 inline-flex w-fit items-center justify-center gap-2 rounded-sm bg-[#FF8B14] px-5 py-2.5 text-sm font-semibold text-[#19202B] transition hover:bg-[#E67300]"
              >
                Gửi yêu cầu ↗
              </button>

              {submitted && (
                <p role="status" className="text-sm leading-6 text-[#FFCB91]">
                  Đây là giao diện demo. Thông tin chưa được gửi đến hệ thống
                  vì biểu mẫu chưa kết nối dịch vụ tiếp nhận dữ liệu.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 07. FOOTER */}
      <footer className="bg-[#19202B] py-12 text-white sm:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-10">
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="VIVAFIRE - Trang chủ"
              >
                <img
                  src="/images/vivafire/logo-vivafire.png"
                  alt="VIVAFIRE"
                  className="h-12 w-auto max-w-[230px] object-contain object-left"
                />
              </Link>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B9C0CA]">
                Giải pháp kỹ thuật PCCC
              </p>

              <p className="mt-4 max-w-[40ch] text-[15px] leading-6 text-[#B9C0CA]">
                Kỷ luật trong thực thi, năng lực trong kỹ thuật và chính trực
                trong từng cam kết.
              </p>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">Khám phá</h3>
              <ul className="grid gap-2.5 text-[15px] text-[#B9C0CA]">
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/san-pham">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/giai-phap">
                    Giải pháp
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/dich-vu">
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/du-an">
                    Dự án
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">Về VIVAFIRE</h3>
              <ul className="grid gap-2.5 text-[15px] text-[#B9C0CA]">
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/gioi-thieu">
                    Giới thiệu công ty
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/tai-lieu">
                    Tài liệu kỹ thuật
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/lien-he">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">
                Thông tin liên hệ
              </h3>

              <ul className="grid gap-2.5 break-words break-words text-sm leading-6 text-[#B9C0CA]">
                <li>
                  <strong className="font-semibold text-white">
                    Công ty Cổ phần Dịch vụ Công nghệ VIVAFIRE
                  </strong>
                </li>
                <li>
                  Địa chỉ: 94 Lê Thị Ánh, Phường Đông Hưng Thuận, TP. Hồ Chí Minh
                </li>
                <li>
                  Tel:{" "}
                  <a
                    href="tel:02838832325"
                    className="transition hover:text-[#FF8B14]"
                  >
                    028.38832325
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:commercial@vivafires.com"
                    className="transition hover:text-[#FF8B14]"
                  >
                    commercial@vivafires.com
                  </a>
                </li>
                <li>Website: www.vivafire.vn</li>
                <li>MST: 0316732553</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-4 text-xs leading-5 text-[#B9C0CA]">
            <span>© 2026 VIVAFIRE. All rights reserved.</span>
            <span>
              Thông tin và hình ảnh cần được xác nhận trước khi công bố.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
