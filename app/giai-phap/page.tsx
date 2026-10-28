
import Link from "next/link";
import Header from "@/components/Header";
const solutions = [
  {
    number: "01",
    title: "Hệ thống báo cháy",
    subtitle: "FIRE ALARM SYSTEMS",
    description:
      "Nhóm thiết bị phát hiện và cảnh báo cháy, hỗ trợ doanh nghiệp tìm hiểu các thành phần cần thiết cho hệ thống báo cháy công trình.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tòa nhà văn phòng hiện đại",
    tags: ["Thiết bị báo cháy", "Tủ trung tâm", "Thiết bị cảnh báo"],
  },
  {
    number: "02",
    title: "Hệ thống chữa cháy",
    subtitle: "FIRE SUPPRESSION SYSTEMS",
    description:
      "Danh mục thiết bị và vật tư chữa cháy dành cho nhu cầu tìm hiểu, lựa chọn và chuẩn bị vật tư cho các công trình.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Công trường xây dựng và hoạt động kỹ thuật",
    tags: ["Thiết bị chữa cháy", "Van & phụ kiện", "Vật tư thi công"],
  },
  {
    number: "03",
    title: "Bơm & cấp nước",
    subtitle: "PUMPING & WATER SUPPLY",
    description:
      "Các nhóm thiết bị bơm, đường ống và phụ kiện phục vụ nhu cầu cấp nước, vận hành và bảo trì hệ thống kỹ thuật.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Thiết bị và hoạt động kỹ thuật công nghiệp",
    tags: ["Máy bơm", "Đường ống", "Van & phụ kiện"],
  },
  {
    number: "04",
    title: "An toàn công trình",
    subtitle: "CONSTRUCTION SAFETY",
    description:
      "Nhóm thiết bị bảo hộ và vật tư an toàn hỗ trợ nhu cầu chuẩn bị, thi công và vận hành tại công trường.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Kiến trúc và công trình xây dựng",
    tags: ["Bảo hộ lao động", "Thiết bị an toàn", "Vật tư công trình"],
  },
];

const benefits = [
  {
    number: "01",
    title: "Tư vấn theo nhu cầu",
    description:
      "Tiếp nhận thông tin công trình và nhu cầu thiết bị để định hướng danh mục phù hợp.",
  },
  {
    number: "02",
    title: "Danh mục rõ ràng",
    description:
      "Phân nhóm sản phẩm theo lĩnh vực để khách hàng dễ tìm hiểu và đối chiếu.",
  },
  {
    number: "03",
    title: "Tiếp nhận yêu cầu báo giá",
    description:
      "Gửi thông tin sản phẩm, số lượng và nhu cầu dự án qua biểu mẫu liên hệ.",
  },
];

export default function GiaiPhapPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HEADER */}
    <Header />
{/* HEADER - GIỮ NGUYÊN GIAO DIỆN TRANG CHỦ */}
{/* <header className="sticky top-0 z-50 border-b border-[#dce9df] bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
    <a href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17452f] text-lg font-black text-white">
        I
      </div>

      <div>
        <div className="text-xl font-black tracking-[0.18em] text-[#17452f]">
          INTES
        </div>
        <div className="text-[9px] font-semibold tracking-[0.15em] text-slate-500">
          INDUSTRIAL SOLUTIONS
        </div>
      </div>
    </a>

    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 xl:flex">
      <a href="/san-pham" className="transition hover:text-[#23764b]">
        Sản phẩm
      </a>

      <a href="/giai-phap" className="text-[#17452f]">
        Giải pháp
      </a>

      <a href="/dich-vu" className="transition hover:text-[#23764b]">
        Dịch vụ
      </a>

      <a href="/du-an" className="transition hover:text-[#23764b]">
        Dự án
      </a>

      <a href="/tai-lieu" className="transition hover:text-[#23764b]">
        Tài liệu
      </a>

      <a href="/gioi-thieu" className="transition hover:text-[#23764b]">
        Về INTES
      </a>

      <a href="/lien-he" className="transition hover:text-[#23764b]">
        Liên hệ
      </a>
    </nav>

    <a
      href="/lien-he"
      className="flex shrink-0 items-center gap-2 rounded-xl bg-[#23764b] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#185b38]"
    >
      Yêu cầu báo giá
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</header> */}


      {/* HERO BANNER */}
      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#f5faf6] sm:min-h-[650px]">
        <div
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-#17452f via-#17452f/90 to-#17452f/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-#17452f/70 via-transparent to-#17452f/10" />

        <div className="mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-20 sm:min-h-[650px] lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[11px] font-bold tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#83d6a1]" />
              ENGINEERING · INDUSTRIAL · SAFETY
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.13] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Giải pháp kỹ thuật
              <span className="mt-2 block text-[#83d6a1]">
                cho công trình hiện đại
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#e5f3e9] sm:text-lg">
              Khám phá các nhóm giải pháp thiết bị và vật tư kỹ thuật
              dành cho doanh nghiệp, nhà thầu và dự án. Tìm hiểu danh mục
              sản phẩm, gửi nhu cầu và yêu cầu báo giá tại INTES.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#danh-sach-giai-phap"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#23764b] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-[#185b38]"
              >
                Khám phá giải pháp
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Trao đổi nhu cầu
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Báo cháy",
                "Chữa cháy",
                "Bơm & cấp nước",
                "An toàn",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-4 backdrop-blur-sm"
                >
                  <span className="text-xs font-black text-[#83d6a1]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-white sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-1.5 w-1/3 bg-[#23764b] lg:block" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
              INTES · Solutions
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-[#17452f] sm:text-4xl lg:text-5xl">
              Kết nối thiết bị với nhu cầu thực tế
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Mỗi công trình có yêu cầu riêng về thiết bị, vật tư và
              phương án triển khai. INTES hướng đến việc trình bày danh
              mục rõ ràng, giúp khách hàng thuận tiện tìm hiểu và gửi
              thông tin yêu cầu tư vấn.
            </p>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#23764b]" />
          </div>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section
        id="danh-sach-giai-phap"
        className="scroll-mt-24 bg-[#f5faf6] px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
                Danh mục giải pháp
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#17452f] sm:text-4xl">
                Khám phá lĩnh vực
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Chọn lĩnh vực quan tâm để tìm hiểu nhóm sản phẩm, vật tư
              và nội dung liên quan.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <article
                key={solution.number}
                className={`group overflow-hidden rounded-[1.6rem] border border-[#dce9df] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#a8d7b6] hover:shadow-xl ${index === 0 ? "md:col-span-2 lg:col-span-7" : index === 1 ? "lg:col-span-5" : index === 2 ? "lg:col-span-5" : "lg:col-span-7"}`}
              >
                {/* IMAGE */}
                <div className={`relative overflow-hidden bg-[#eaf3ec] ${index === 0 ? "h-72 sm:h-[26rem]" : index === 3 ? "h-64 sm:h-80" : "h-64 sm:h-72"}`}>
                  <div
                    role="img"
                    aria-label={solution.imageAlt}
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${solution.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-#17452f/95 via-#17452f/10 to-#17452f/10" />

                  <div className="absolute left-5 top-5 rounded-lg border border-white/25 bg-[#17452f]/65 px-3 py-2 text-[10px] font-bold tracking-[0.17em] text-white backdrop-blur-md">
                    SOLUTION {solution.number}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#23764b] sm:text-xs">
                      {solution.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#dce9df] bg-[#f5faf6] px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                    <Link
                      href="/san-pham"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#17452f] transition hover:text-[#23764b]"
                    >
                      Xem sản phẩm
                      <span aria-hidden="true">→</span>
                    </Link>

                    <Link
                      href="/lien-he"
                      className="rounded-lg bg-[#17452f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#23764b]"
                    >
                      Yêu cầu báo giá
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INTES */}
      <section className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
              Quy trình hỗ trợ
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#17452f] sm:text-4xl">
              Bắt đầu từ nhu cầu của bạn
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Các bước tham khảo giúp khách hàng gửi thông tin và xác
              định danh mục cần trao đổi.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-2xl border border-[#dce9df] bg-white p-7 transition hover:border-[#a8d7b6] hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17452f] text-sm font-black text-[#83d6a1]">
                  {benefit.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#17452f]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#dce9df] bg-[#edf7ef]">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#b9d9c3]/70" />
          <div className="absolute -right-5 -top-12 h-56 w-56 rounded-full border border-[#b9d9c3]/70" />
          <div className="absolute bottom-0 left-0 h-1.5 w-40 bg-[#23764b]" />

          <div className="relative flex flex-col gap-8 px-7 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83d6a1]">
                Hãy trao đổi với chúng tôi
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Bạn đang chuẩn bị cho một dự án mới?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Gửi danh mục thiết bị, số lượng dự kiến và thông tin
                công trình để bắt đầu yêu cầu tư vấn, báo giá.
              </p>
            </div>

            <Link
              href="/lien-he"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#23764b] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#185b38]"
            >
              Liên hệ INTES
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#123b29] px-5 pb-24 pt-12 text-slate-400 lg:px-8 lg:pb-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-[0.15em] text-white"
            >
              INTES
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Giới thiệu danh mục thiết bị, vật tư và giải pháp kỹ thuật
              dành cho doanh nghiệp và dự án.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Khám phá</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/san-pham" className="block hover:text-[#83d6a1]">
                Sản phẩm
              </Link>
              <Link href="/giai-phap" className="block hover:text-[#83d6a1]">
                Giải pháp
              </Link>
              <Link href="/dich-vu" className="block hover:text-[#83d6a1]">
                Dịch vụ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Thông tin</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/du-an" className="block hover:text-[#83d6a1]">
                Dự án
              </Link>
              <Link href="/tai-lieu" className="block hover:text-[#83d6a1]">
                Tài liệu & kiến thức
              </Link>
              <Link href="/gioi-thieu" className="block hover:text-[#83d6a1]">
                Về INTES
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Liên hệ</h3>
            <p className="mt-4 text-sm leading-7">
              Bạn cần thông tin sản phẩm hoặc báo giá cho dự án?
            </p>

            <Link
              href="/lien-he"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#83d6a1] hover:text-[#23764b]"
            >
              Gửi yêu cầu báo giá →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} INTES · Website demo</p>
          <p>Hình ảnh và nội dung minh họa · Cần xác nhận trước khi sử dụng chính thức</p>
        </div>
      </footer>

      {/* MOBILE BOTTOM BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-[#dce9df] bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-lg lg:hidden">
        <Link
          href="/"
          className="py-3 text-center text-[11px] font-semibold text-slate-600"
        >
          <span className="mb-1 block text-lg">⌂</span>
          Trang chủ
        </Link>

        <Link
          href="/san-pham"
          className="py-3 text-center text-[11px] font-semibold text-slate-600"
        >
          <span className="mb-1 block text-lg">▦</span>
          Sản phẩm
        </Link>

        <Link
          href="/lien-he"
          className="py-3 text-center text-[11px] font-semibold text-slate-600"
        >
          <span className="mb-1 block text-lg">☎</span>
          Liên hệ
        </Link>

        <Link
          href="/lien-he"
          className="bg-[#23764b] py-3 text-center text-[11px] font-bold text-white transition hover:bg-[#185b38]"
        >
          <span className="mb-1 block text-lg">↗</span>
          Báo giá
        </Link>
      </div>
    </main>
  );
}
