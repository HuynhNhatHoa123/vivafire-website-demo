
import Link from "next/link";
import Header from "@/components/Header";

const services = [
  {
    number: "01",
    eyebrow: "EQUIPMENT CONSULTING",
    title: "Tư vấn thiết bị & giải pháp",
    description:
      "Làm rõ nhu cầu, nhóm thiết bị và thông tin kỹ thuật để doanh nghiệp có cơ sở lựa chọn danh mục phù hợp cho công trình.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Hoạt động kỹ thuật và thiết bị công nghiệp",
    deliverables: ["Xác định nhu cầu", "Tra cứu mã hàng", "Thông tin kỹ thuật"],
  },
  {
    number: "02",
    eyebrow: "INDUSTRIAL SUPPLY",
    title: "Cung cấp thiết bị & vật tư",
    description:
      "Tiếp nhận danh mục sản phẩm, mã hàng và số lượng để trao đổi phương án cung cấp cho doanh nghiệp, nhà thầu và dự án.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Kho hàng và hoạt động logistics",
    deliverables: ["Danh mục vật tư", "Mã hàng & số lượng", "Yêu cầu báo giá"],
  },
  {
    number: "03",
    eyebrow: "TECHNICAL DOCUMENTATION",
    title: "Hồ sơ & tài liệu kỹ thuật",
    description:
      "Hỗ trợ trao đổi catalogue, datasheet và tài liệu sản phẩm theo yêu cầu, trong phạm vi tài liệu có thể cung cấp.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Trao đổi hồ sơ và tài liệu trong môi trường doanh nghiệp",
    deliverables: ["Catalogue", "Datasheet", "Thông tin sản phẩm"],
  },
  {
    number: "04",
    eyebrow: "PROJECT SUPPORT",
    title: "Hỗ trợ nhu cầu dự án",
    description:
      "Tiếp nhận BOQ, danh sách thiết bị hoặc thông tin công trình để làm rõ phạm vi cung cấp và các đầu việc cần phối hợp.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Công trình kiến trúc hiện đại",
    deliverables: ["Danh sách BOQ", "Thiết bị dự án", "Phạm vi yêu cầu"],
  },
];

const workflow = [
  {
    number: "01",
    title: "Tiếp nhận yêu cầu",
    description:
      "Khách hàng gửi thông tin doanh nghiệp, danh mục thiết bị và nhu cầu cần hỗ trợ.",
  },
  {
    number: "02",
    title: "Làm rõ phạm vi",
    description:
      "Trao đổi mã hàng, số lượng, tài liệu cần thiết và những yêu cầu liên quan.",
  },
  {
    number: "03",
    title: "Phản hồi phương án",
    description:
      "Xem xét thông tin đã cung cấp và phản hồi theo phạm vi, điều kiện thực tế.",
  },
  {
    number: "04",
    title: "Trao đổi báo giá",
    description:
      "Thống nhất các thông tin thương mại và bước tiếp theo cho yêu cầu.",
  },
];

const audiences = [
  {
    title: "Chủ đầu tư",
    description:
      "Tìm hiểu danh mục thiết bị và chuẩn bị thông tin cho nhu cầu công trình.",
    icon: "01",
  },
  {
    title: "Nhà thầu cơ điện",
    description:
      "Trao đổi danh sách thiết bị, vật tư và BOQ theo từng hạng mục.",
    icon: "02",
  },
  {
    title: "Bộ phận mua hàng",
    description:
      "Gửi mã hàng, số lượng và yêu cầu báo giá để thuận tiện đối chiếu.",
    icon: "03",
  },
];

export default function DichVuPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#17452f]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#123923] via-[#17452f]/90 to-[#17452f]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#123923]/70 via-transparent to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#7dbb8b]" />
              INDUSTRIAL SERVICES · INTES
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Đồng hành cùng
              <span className="block text-[#9bd0a6]">
                nhu cầu kỹ thuật
              </span>
              của doanh nghiệp
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Từ tìm hiểu thiết bị, trao đổi tài liệu kỹ thuật đến tiếp
              nhận nhu cầu vật tư dự án — INTES giúp doanh nghiệp có
              một điểm bắt đầu rõ ràng cho yêu cầu của mình.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#23764b] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#185b38]"
              >
                Trao đổi nhu cầu
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="#danh-sach-dich-vu"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Khám phá dịch vụ
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-green-50 sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="text-[#9bd0a6]">✓</span>
                Tiếp nhận nhu cầu doanh nghiệp
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#9bd0a6]">✓</span>
                Trao đổi theo danh mục thực tế
              </span>
            </div>
          </div>

          {/* HERO SIDE PANEL */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/20 bg-[#17452f]/55 p-7 shadow-2xl backdrop-blur-md xl:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9bd0a6]">
                Your project starts here
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-snug text-white xl:text-3xl">
                Một yêu cầu rõ ràng.
                <span className="block text-green-100">
                  Một quy trình trao đổi chuyên nghiệp.
                </span>
              </h2>

              <div className="my-7 h-px bg-white/15" />

              {[
                ["01", "Danh mục thiết bị"],
                ["02", "Số lượng & mã hàng"],
                ["03", "Thông tin công trình"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 border-b border-white/10 py-4 last:border-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-black text-[#9bd0a6]">
                    {number}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {label}
                  </span>
                </div>
              ))}

              <Link
                href="/lien-he"
                className="mt-5 flex w-full items-center justify-center rounded-lg bg-white px-5 py-4 text-sm font-bold text-[#17452f] transition hover:bg-[#7dbb8b]"
              >
                Gửi thông tin yêu cầu →
              </Link>
            </div>
          </div>
        </div>

        <div className="h-1.5 w-32 bg-[#23764b] sm:w-48" />
      </section>

      {/* SERVICE INTRO */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
              What we do
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#17452f] sm:text-4xl lg:text-5xl">
              Hỗ trợ đúng nhu cầu.
              <span className="block text-slate-400">
                Trao đổi rõ từng hạng mục.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Trong môi trường B2B, thông tin chính xác và phạm vi công
              việc rõ ràng là nền tảng của một quá trình hợp tác hiệu quả.
              INTES tiếp nhận nhu cầu theo từng hạng mục để việc trao đổi
              thiết bị và yêu cầu dự án được thuận tiện hơn.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-4 border-t border-[#dce9df] pt-8 sm:grid-cols-3">
          {[
            ["01", "Làm rõ nhu cầu", "Bắt đầu từ thông tin khách hàng cung cấp."],
            ["02", "Tập trung hạng mục", "Trao đổi theo mã hàng và phạm vi yêu cầu."],
            ["03", "Kết nối báo giá", "Chuyển yêu cầu sang bước trao đổi tiếp theo."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-4 py-3">
              <span className="text-sm font-black text-[#23764b]">
                {number}
              </span>
              <div>
                <h3 className="font-bold text-[#17452f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="danh-sach-dich-vu"
        className="scroll-mt-24 bg-[#f5faf6] px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
                Our services
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.025em] text-[#17452f] sm:text-4xl lg:text-5xl">
                Dịch vụ dành cho doanh nghiệp
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Lựa chọn hạng mục phù hợp hoặc gửi trực tiếp nhu cầu để
              INTES có cơ sở trao đổi với bạn.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-[#dce9df] bg-white transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-slate-200 sm:h-72">
                  <div
                    role="img"
                    aria-label={service.imageAlt}
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#123923]/95 via-[#17452f]/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-md border border-white/20 bg-[#17452f]/65 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur">
                    SERVICE {service.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[10px] font-bold tracking-[0.17em] text-[#b8e0bf] sm:text-xs">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-2 max-w-lg text-2xl font-black text-white sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#17452f]">
                      Hạng mục trao đổi
                    </p>

                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="mt-0.5 font-bold text-[#23764b]">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <Link
                      href="/lien-he"
                      className="inline-flex items-center gap-3 text-sm font-bold text-[#17452f] transition hover:text-[#23764b]"
                    >
                      Trao đổi về hạng mục này
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TYPES */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
                Who we support
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#17452f] sm:text-4xl">
                Thiết kế cách tiếp cận cho khách hàng B2B
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Mỗi nhóm khách hàng có cách chuẩn bị thông tin và yêu
                cầu khác nhau. Hãy bắt đầu bằng hạng mục mà doanh nghiệp
                của bạn đang quan tâm.
              </p>

              <Link
                href="/lien-he"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#17452f] hover:text-[#23764b]"
              >
                Trao đổi với INTES →
              </Link>
            </div>

            <div className="space-y-4">
              {audiences.map((audience) => (
                <div
                  key={audience.icon}
                  className="group flex gap-5 rounded-2xl border border-[#dce9df] p-6 transition hover:border-green-200 hover:bg-[#f5faf6] sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#17452f] text-xs font-black text-[#9bd0a6] transition group-hover:bg-[#23764b] group-hover:text-white">
                    {audience.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#17452f]">
                      {audience.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {audience.description}
                    </p>
                  </div>

                  <span className="ml-auto hidden text-xl text-slate-300 transition group-hover:text-[#23764b] sm:block">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#17452f] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9bd0a6]">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Quy trình trao đổi minh bạch
            </h2>

            <p className="mt-5 leading-8 text-green-50/75">
              Các bước dưới đây là quy trình tham khảo để khách hàng
              biết cần chuẩn bị gì khi gửi yêu cầu dịch vụ.
            </p>
          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <div
                key={step.number}
                className="relative border-l border-white/15 py-5 pl-6 md:py-7 lg:border-l-0 lg:border-t lg:pl-0 lg:pr-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7dbb8b]/40 bg-[#7dbb8b]/10 text-sm font-black text-[#9bd0a6]">
                  {step.number}
                </div>

                {index < workflow.length - 1 && (
                  <div className="absolute right-5 top-12 hidden text-xl text-[#9bd0a6]/70 lg:block">
                    →
                  </div>
                )}

                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="text-xs leading-6 text-green-50/60">
              Phạm vi, thời gian phản hồi và điều kiện thực hiện sẽ được
              xác nhận theo từng yêu cầu cụ thể.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT BRIEF CTA */}
      <section className="px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-100">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-green-100/80 to-transparent" />
          <div className="absolute right-12 top-12 h-36 w-36 rounded-full border border-green-200/70 sm:right-24 sm:h-56 sm:w-56" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#23764b]">
                Start a conversation
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#17452f] sm:text-4xl lg:text-5xl">
                Hãy bắt đầu từ yêu cầu dự án của bạn
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Bạn đã có BOQ, danh sách mã hàng hoặc yêu cầu thiết bị?
                Gửi thông tin cơ bản để bắt đầu trao đổi với INTES.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Danh sách thiết bị", "Số lượng dự kiến", "Thông tin dự án"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[#dce9df] bg-white px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#23764b] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-[#185b38]"
            >
              Gửi yêu cầu báo giá
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 pb-8 pt-12 text-slate-400 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-[0.18em] text-white"
            >
              INTES
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7">
              Website giới thiệu sản phẩm, dịch vụ và giải pháp kỹ thuật
              dành cho doanh nghiệp và dự án.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Danh mục</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/san-pham" className="block hover:text-[#9bd0a6]">
                Sản phẩm
              </Link>
              <Link href="/giai-phap" className="block hover:text-[#9bd0a6]">
                Giải pháp
              </Link>
              <Link href="/dich-vu" className="block hover:text-[#9bd0a6]">
                Dịch vụ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Thông tin</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/du-an" className="block hover:text-[#9bd0a6]">
                Dự án
              </Link>
              <Link href="/tai-lieu" className="block hover:text-[#9bd0a6]">
                Tài liệu & kiến thức
              </Link>
              <Link href="/gioi-thieu" className="block hover:text-[#9bd0a6]">
                Về INTES
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Liên hệ</h3>
            <p className="mt-4 text-sm leading-7">
              Gửi thông tin thiết bị hoặc nhu cầu dự án để bắt đầu trao đổi.
            </p>
            <Link
              href="/lien-he"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#9bd0a6] hover:text-[#b8e0bf]"
            >
              Liên hệ INTES →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">
© 2026 VIVAFIRE · Website demo. Thông tin
dịch vụ cần được xác nhận trước khi công bố chính thức.
        </div>
      </footer>
    </main>
  );
}
