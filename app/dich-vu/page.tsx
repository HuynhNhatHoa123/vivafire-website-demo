import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const ORANGE = "#F58220";
const ORANGE_DARK = "#C85E0A";
const DARK = "#20242B";
const MUTED = "#667085";

const services = [
  {
    id: "tu-van-thiet-ke",
    number: "01",
    nav: "Tư vấn thiết kế & thẩm duyệt",
    eyebrow: "TƯ VẤN & THIẾT KẾ",
    title: "TƯ VẤN THIẾT KẾ & THẨM DUYỆT PCCC",
    description:
      "Thiết kế hệ thống báo cháy, chữa cháy nước và chữa cháy khí FM200; lập hồ sơ thẩm duyệt PCCC; bóc tách khối lượng, vật tư; vẽ shop drawing phục vụ thi công.",
    image: "/projects/row-27-col-03-25.jpg",
    imageAlt: "Công trình nhà ở kết hợp văn phòng Thủ Đức Avenue",
    steps: [
      "Khảo sát & tiếp nhận yêu cầu",
      "Thiết kế cơ sở",
      "Lập và nộp hồ sơ thẩm duyệt",
      "Thiết kế thi công, shop drawing",
    ],
    projects: [
      { name: "Nhà ở kết hợp văn phòng Thủ Đức (Avenue)", work: "Thiết kế, thẩm duyệt PCCC", image: "/projects/row-27-col-03-25.jpg" },
      { name: "Xưởng chế biến lâm sản Bảo Lâm", work: "Thiết kế, thẩm duyệt PCCC", image: "/projects/row-65-col-03-63.png" },
      { name: "Toyota Đà Lạt", work: "Dự án liên quan", image: "/projects/row-31-col-03-30.jpg" },
      { name: "Parkland P52 + P53", work: "Tư vấn, lập hồ sơ, mời nghiệm thu PCCC", image: "/projects/row-06-col-03-02.jpg" },
    ],
    action: "Yêu cầu tư vấn thiết kế",
    need: "Tư vấn thiết kế",
  },
  {
    id: "cung-cap-thiet-bi",
    number: "02",
    nav: "Cung cấp thiết bị & giải pháp",
    eyebrow: "THIẾT BỊ & GIẢI PHÁP",
    title: "CUNG CẤP THIẾT BỊ & GIẢI PHÁP",
    description:
      "Cung cấp phương tiện, thiết bị, vật tư PCCC; cửa thép chống cháy VIVADOORS; sản phẩm điện nhẹ VIVAIO. Hỗ trợ trình mẫu, hồ sơ xuất xứ – chất lượng (CO/CQ) và hồ sơ nghiệm thu vật liệu đầu vào.",
    image: "/projects/row-62-col-03-56.png",
    imageAlt: "Nhà xưởng Âm học Quốc Quang Việt Nam",
    steps: [
      "Nhận danh mục vật tư / BOQ",
      "Trình mẫu, hồ sơ phê duyệt vật liệu",
      "Giao hàng theo tiến độ",
      "Hồ sơ nghiệm thu vật liệu, bảo hành",
    ],
    projects: [
      { name: "Nhà xưởng Âm học Quốc Quang", work: "Cửa thép chống cháy", image: "/projects/row-62-col-03-56.png" },
      { name: "Nhà máy giấy Thuận An", work: "Cửa thép chống cháy", image: "/projects/row-63-col-03-58.png" },
      { name: "Chung cư Phú Mỹ C2", work: "Cửa thép chống cháy", image: "/projects/row-03-col-03-60.png" },
      { name: "ICONIC · Kiều Plaza · Office Haus", work: "Cung cấp thiết bị và giải pháp", image: "/projects/row-30-col-03-28.jpg" },
    ],
    action: "Yêu cầu báo giá",
    need: "Báo giá thiết bị",
  },
  {
    id: "thi-cong-lap-dat",
    number: "03",
    nav: "Thi công lắp đặt",
    eyebrow: "THI CÔNG & TRIỂN KHAI",
    title: "THI CÔNG LẮP ĐẶT HỆ THỐNG PCCC & ĐIỆN NHẸ",
    description:
      "Thi công, lắp đặt hệ thống phòng cháy chữa cháy và điện nhẹ; lập trình, cài đặt hệ thống; phối hợp lắp đặt, nghiệm thu, bàn giao và hướng dẫn vận hành.",
    image: "/projects/row-63-col-03-58.png",
    imageAlt: "Hình ảnh nhà máy giấy Thuận An",
    steps: [
      "Kế hoạch & biện pháp thi công",
      "Thi công lắp đặt",
      "Thử nghiệm, chạy thử",
      "Nghiệm thu, bàn giao, hướng dẫn vận hành",
    ],
    projects: [
      { name: "Bcons City & Kindergarten", work: "Báo cháy, âm thanh sơ tán, bơm chữa cháy", image: "/projects/row-09-col-03-71.png" },
      { name: "ICONIC", work: "Dự án thi công liên quan", image: "/projects/row-47-col-03-74.jpg" },
      { name: "Office Haus", work: "Dự án thi công liên quan", image: "/projects/row-30-col-03-28.jpg" },
    ],
    action: "Liên hệ tư vấn thi công",
    need: "Thi công lắp đặt",
  },
  {
    id: "bao-tri-nghiem-thu",
    number: "04",
    nav: "Bảo trì, bảo dưỡng & nghiệm thu",
    eyebrow: "DỊCH VỤ SAU TRIỂN KHAI",
    title: "BẢO TRÌ, BẢO DƯỠNG & NGHIỆM THU PCCC",
    description:
      "Kiểm tra, bảo trì, bảo dưỡng định kỳ hệ thống PCCC; tư vấn, lập hồ sơ và mời nghiệm thu PCCC; xử lý sự cố, hỗ trợ kỹ thuật sau bàn giao.",
    image: "/projects/row-07-col-03-03.jpg",
    imageAlt: "Hình ảnh dự án The Manor 1 và 2",
    steps: [
      "Khảo sát hiện trạng hệ thống",
      "Lập kế hoạch bảo trì",
      "Thực hiện & báo cáo định kỳ",
      "Hồ sơ nghiệm thu, kiến nghị cải tạo",
    ],
    projects: [
      { name: "The Manor 1 & 2", work: "Kiểm tra, bảo trì, bảo dưỡng PCCC", image: "/projects/row-07-col-03-03.jpg" },
      { name: "Parkland P52 + P53", work: "Tư vấn, lập hồ sơ, mời nghiệm thu PCCC", image: "/projects/row-06-col-03-02.jpg" },
    ],
    action: "Đăng ký bảo trì định kỳ",
    need: "Bảo trì",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C85E0A]">
      {children}
    </p>
  );
}

function ProjectCard({
  project,
}: {
  project: { name: string; work: string; image: string };
}) {
  return (
    <article className="group overflow-hidden border border-[#E9E5E1] bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F0ED]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h4 className="text-sm font-bold leading-6 text-[#20242B]">{project.name}</h4>
        <p className="mt-1 text-xs leading-5 text-[#667085]">{project.work}</p>
      </div>
    </article>
  );
}

export default function DichVuPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#20242B] antialiased" style={{ fontFamily: "Arial, Roboto, sans-serif" }}>
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#20242B] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/projects/row-63-col-03-58.png"
            alt="Hình ảnh công trình VIVAFIRE"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171A20]/95 via-[#20242B]/80 to-[#20242B]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#20242B]/70 via-transparent to-transparent" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#F58220]" />
              DỊCH VỤ VIVAFIRE
            </span>
            <h1 className="mt-7 text-4xl font-extrabold uppercase leading-[1.12] tracking-wide sm:text-5xl lg:text-6xl">
              Đồng hành từ bản vẽ
              <span className="mt-2 block text-[#FF9A3D]">đến vận hành</span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-white/80 sm:text-base sm:leading-8">
              VIVAFIRE có Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ phòng cháy và chữa cháy cho ba mảng: kinh doanh phương tiện, thiết bị, vật tư PCCC; tư vấn thiết kế, tư vấn giám sát PCCC; thi công, lắp đặt hệ thống PCCC.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lien-he" className="inline-flex min-h-12 items-center justify-center bg-[#F58220] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C85E0A]">
                Gửi yêu cầu tư vấn <span className="ml-3">↗</span>
              </Link>
              <Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center border border-white/45 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FF9A3D] hover:bg-white/10">
                Xem sản phẩm
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-2/5 bg-[#F58220]" />
      </section>

      {/* ANCHOR NAV */}
      <nav aria-label="Danh mục dịch vụ" className="sticky top-0 z-30 border-b border-[#E9E5E1] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-3 py-2 sm:grid-cols-4 sm:px-5 lg:px-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group flex min-h-12 items-center gap-3 px-2 py-2 text-left transition hover:bg-[#FFF5EC] sm:px-3"
            >
              <span className="text-sm font-extrabold text-[#F58220]">{service.number}</span>
              <span className="text-xs font-semibold leading-5 text-[#4B515A] group-hover:text-[#C85E0A] sm:text-sm">{service.nav}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* SERVICES */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-24 ${index % 2 === 1 ? "bg-[#FAF8F6]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#EEEAE6]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 left-4 bg-[#20242B] px-5 py-4 text-white shadow-xl sm:left-7">
                  <span className="block text-3xl font-extrabold text-[#FF9A3D]">{service.number}</span>
                  <span className="mt-1 block text-[10px] font-bold tracking-[0.16em]">VIVAFIRE SERVICES</span>
                </div>
                <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-[#F58220] sm:-right-5 sm:-top-5" />
              </div>

              <div className="pt-4 lg:pt-0">
                <SectionLabel>{service.eyebrow}</SectionLabel>
                <h2 className="max-w-[22ch] text-3xl font-extrabold uppercase leading-tight tracking-[-0.025em] text-[#20242B] sm:text-4xl">
                  {service.title}
                </h2>
                <div className="mt-5 h-1 w-20 bg-[#F58220]" />
                <p className="mt-6 text-sm leading-8 text-[#667085] sm:text-base">{service.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/lien-he?need=${encodeURIComponent(service.need)}`}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#F58220] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C85E0A]"
                  >
                    {service.action} <span>↗</span>
                  </Link>
                  {index === 1 && (
                    <Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center border border-[#D8D3CE] px-5 py-3 text-sm font-bold text-[#20242B] transition hover:border-[#F58220] hover:text-[#C85E0A]">
                      Xem danh mục sản phẩm
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* PROCESS */}
            <div className="mt-16 border-t border-[#E6E1DC] pt-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>QUY TRÌNH THỰC HIỆN</SectionLabel>
                  <h3 className="text-2xl font-bold text-[#20242B] sm:text-3xl">4 bước triển khai</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A9189]">VIVAFIRE · PROCESS</span>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {service.steps.map((step, stepIndex) => (
                  <div key={step} className="relative min-h-[132px] border border-[#E8E2DC] bg-white p-5">
                    <span className="text-2xl font-extrabold text-[#F58220]">0{stepIndex + 1}</span>
                    <p className="mt-4 text-sm font-bold leading-6 text-[#343A40]">{step}</p>
                    {stepIndex < 3 && <span className="absolute right-4 top-6 hidden text-xl text-[#D7CFC7] lg:block">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* RELATED PROJECTS */}
            <div className="mt-16">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>DỰ ÁN LIÊN QUAN</SectionLabel>
                  <h3 className="text-2xl font-bold text-[#20242B] sm:text-3xl">Kinh nghiệm qua công trình thực tế</h3>
                </div>
                <Link href="/du-an" className="border-b-2 border-[#F58220] pb-2 text-sm font-bold text-[#20242B] transition hover:text-[#C85E0A]">
                  Xem tất cả dự án ↗
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {service.projects.map((project) => <ProjectCard key={project.name} project={project} />)}
              </div>
              {service.id === "bao-tri-nghiem-thu" && (
                <p className="mt-4 text-xs leading-6 text-[#8A8179]">
                  Ghi chú theo tài liệu đầu vào: Citilight Tower và Vimedimex Building chưa có ảnh trong bộ tài liệu được cung cấp nên chưa đưa vào thẻ hình ảnh.
                </p>
              )}
              {service.id === "thi-cong-lap-dat" && (
                <p className="mt-4 text-xs leading-6 text-[#8A8179]">
                  Danh sách dự án thi công tiêu biểu cần được xác nhận lại trước khi công bố chính thức.
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="bg-[#F4F1EE] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20242B]">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#F58220]" />
          <div className="relative grid gap-8 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">
            <div className="max-w-3xl">
              <SectionLabel>CÙNG VIVAFIRE BẮT ĐẦU</SectionLabel>
              <h2 className="text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                Cần tư vấn cho công trình của bạn?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                Gửi thông tin dự án, danh mục thiết bị hoặc hồ sơ kỹ thuật để bắt đầu trao đổi với VIVAFIRE.
              </p>
            </div>
            <Link href="/lien-he" className="inline-flex min-h-13 items-center justify-center gap-3 bg-[#F58220] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C85E0A]">
              Gửi yêu cầu ngay <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#19202B] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" aria-label="VIVAFIRE - Trang chủ">
            <Image src="/images/vivafire/logo-vivafire.png" alt="VIVAFIRE" width={220} height={60} className="h-11 w-auto object-contain object-left" />
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <Link className="hover:text-[#FF9A3D]" href="/san-pham">Sản phẩm</Link>
            <Link className="hover:text-[#FF9A3D]" href="/giai-phap">Giải pháp</Link>
            <Link className="hover:text-[#FF9A3D]" href="/dich-vu">Dịch vụ</Link>
            <Link className="hover:text-[#FF9A3D]" href="/du-an">Dự án</Link>
            <Link className="hover:text-[#FF9A3D]" href="/lien-he">Liên hệ</Link>
          </div>
          <p className="text-xs text-white/45">© 2026 VIVAFIRE. All rights reserved.</p>
        </div>
      </footer>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#E6E1DC] bg-white/95 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
        <Link href="/san-pham" className="flex min-h-11 items-center justify-center text-sm font-bold text-[#20242B]">Sản phẩm</Link>
        <Link href="/lien-he" className="flex min-h-11 items-center justify-center bg-[#F58220] px-2 text-sm font-bold text-white">Yêu cầu báo giá</Link>
      </div>
      <div className="h-16 sm:hidden" />
    </main>
  );
}
