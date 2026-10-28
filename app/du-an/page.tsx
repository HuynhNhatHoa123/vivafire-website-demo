"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const projects = [
  {
    id: "nam-sai-gon",
    category: "Y tế",
    type: "CÔNG TRÌNH Y TẾ",
    title: "Bệnh viện Đa khoa Nam Sài Gòn",
    location: "TP. Hồ Chí Minh",
    description:
      "Công trình y tế được nhắc đến trong tài liệu kinh nghiệm dự án tham khảo. Phạm vi công việc cụ thể cần được xác nhận.",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pullman-hai-phong",
    category: "Khách sạn",
    type: "KHÁCH SẠN & DỊCH VỤ",
    title: "Pullman Hải Phòng",
    location: "Hải Phòng",
    description:
      "Công trình khách sạn được đề cập trong hồ sơ kinh nghiệm tham khảo. Vai trò cụ thể cần được xác nhận.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "one-verandah",
    category: "Căn hộ",
    type: "KHU CĂN HỘ",
    title: "One Verandah",
    location: "TP. Hồ Chí Minh",
    description:
      "Dự án khu căn hộ xuất hiện trong tài liệu kinh nghiệm tham khảo. Hạng mục liên quan cần được xác minh.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "grand-manhattan",
    category: "Thương mại",
    type: "TÒA NHÀ & THƯƠNG MẠI",
    title: "The Grand Manhattan",
    location: "TP. Hồ Chí Minh",
    description:
      "Công trình được nhắc đến trong tài liệu tham khảo. Cần xác nhận hạng mục và vai trò thực tế.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "industrial-reference",
    category: "Công nghiệp",
    type: "CÔNG TRÌNH CÔNG NGHIỆP",
    title: "Hệ thống kỹ thuật nhà xưởng",
    location: "Dự án minh họa",
    description:
      "Mẫu trình bày cho nhóm công trình công nghiệp. Cần thay bằng dự án thực tế được doanh nghiệp duyệt.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "commercial-reference",
    category: "Thương mại",
    type: "CÔNG TRÌNH THƯƠNG MẠI",
    title: "Hệ thống kỹ thuật tòa nhà",
    location: "Dự án minh họa",
    description:
      "Mẫu giao diện để trình bày công trình thương mại sau khi có dữ liệu thực tế được xác nhận.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
  },
];

const filters = ["Tất cả", "Y tế", "Khách sạn", "Căn hộ", "Thương mại", "Công nghiệp"];

const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description: "Tìm hiểu loại công trình, mục đích sử dụng và yêu cầu ban đầu.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Rà soát kỹ thuật",
    description: "Đối chiếu thông số, hồ sơ và điều kiện ứng dụng của thiết bị.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Đề xuất phương án",
    description: "Trao đổi lựa chọn phù hợp với phạm vi yêu cầu và thông tin hiện có.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Phối hợp triển khai",
    description: "Tiếp tục trao đổi thông tin, báo giá và các bước tiếp theo.",
    icon: "✓",
  },
];

const strengths = [
  {
    title: "Kinh nghiệm đa lĩnh vực",
    description: "Tham khảo các nhóm công trình thuộc nhiều lĩnh vực khác nhau.",
    icon: "▦",
  },
  {
    title: "Đội ngũ kỹ thuật",
    description: "Hỗ trợ trao đổi thông tin và phối hợp theo nhu cầu thực tế.",
    icon: "◎",
  },
  {
    title: "Giải pháp phù hợp",
    description: "Đối chiếu yêu cầu kỹ thuật và điều kiện sử dụng của công trình.",
    icon: "◇",
  },
  {
    title: "Hợp tác lâu dài",
    description: "Hướng đến trao đổi rõ ràng và phối hợp hiệu quả với khách hàng.",
    icon: "↗",
  },
];

export default function DuAnPage() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "Tất cả" || project.category === activeFilter;
      const query = searchTerm.trim().toLocaleLowerCase("vi");
      const matchesSearch =
        !query ||
        `${project.title} ${project.category} ${project.location}`
          .toLocaleLowerCase("vi")
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="min-h-screen bg-white pb-16 text-slate-800 sm:pb-0">
      <Header />

      {/* HERO: editorial layout, not a full-screen background image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-lime-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-16 lg:min-h-[470px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              <span className="h-px w-8 bg-emerald-700" />
              Dự án & công trình
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.65rem]">
              Giá trị thực tế
              <br />
              từ những <span className="text-emerald-700">công trình</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Khám phá các nhóm công trình tham khảo và định hướng ứng dụng
              thiết bị, giải pháp kỹ thuật cho lĩnh vực y tế, khách sạn, căn hộ,
              thương mại và công nghiệp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#danh-sach-du-an"
                className="inline-flex items-center rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-900"
              >
                Khám phá dự án <span className="ml-3">→</span>
              </a>
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-emerald-900 transition hover:border-emerald-400 hover:bg-emerald-50"
              >
                Liên hệ INTES
              </Link>
            </div>
          </div>

          {/* Collage gives the hero a different composition from other pages */}
          <div className="relative mx-auto h-[330px] w-full max-w-[620px] sm:h-[390px] lg:h-[420px]">
            <div className="absolute left-[19%] top-[5%] h-[84%] w-[61%] rounded-[42%_42%_28%_28%] bg-emerald-100" />
            <div className="absolute left-0 top-[27%] h-[44%] w-[39%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=85"
                alt="Công trình y tế minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 40vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[29%] top-[2%] h-[75%] w-[43%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
                alt="Tòa nhà hiện đại minh họa"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 45vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-[20%] h-[39%] w-[36%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=85"
                alt="Không gian kỹ thuật công nghiệp minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 36vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[1%] right-[4%] h-[34%] w-[40%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85"
                alt="Khu căn hộ hiện đại minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 40vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[8%] left-[3%] hidden items-center gap-3 rounded-2xl border border-emerald-100 bg-white/95 px-4 py-3 shadow-lg sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-lg text-emerald-800">✳</span>
              <span className="text-xs font-semibold leading-5 text-slate-700">
                Kết nối giải pháp
                <br />
                cho mọi công trình
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK POINTS */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 lg:px-8">
          {[
            ["01", "Đa dạng công trình", "Tham khảo nhiều nhóm công trình và lĩnh vực ứng dụng."],
            ["02", "Quan tâm kỹ thuật", "Đặt yêu cầu và thông số làm trọng tâm trao đổi."],
            ["03", "Kết nối nhu cầu", "Gửi thông tin công trình để trao đổi bước tiếp theo."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex items-start gap-4">
              <span className="text-2xl font-semibold text-emerald-700">{number}</span>
              <div>
                <h2 className="font-bold text-slate-900">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="danh-sach-du-an"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Dự án nổi bật
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Danh sách dự án tham khảo
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              Lọc theo nhóm công trình hoặc tìm theo tên để xem các mục tham khảo.
              Những dự án minh họa cần được thay bằng thông tin thực tế trước khi công bố.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-emerald-800 transition hover:text-emerald-950"
          >
            Gửi yêu cầu dự án <span>→</span>
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Lọc dự án">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-emerald-800 bg-emerald-800 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-800"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-500 focus-within:border-emerald-500 lg:max-w-xs">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.2 4.2" />
            </svg>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Tìm kiếm dự án..."
              className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              aria-label="Tìm kiếm dự án"
            />
          </label>
        </div>

        <div className="mt-7 flex items-center justify-between border-b border-slate-200 pb-4">
          <p className="text-sm text-slate-500">
            Nhóm đang xem: <span className="font-semibold text-slate-900">{activeFilter}</span>
          </p>
          <p className="text-sm font-semibold text-emerald-800">{filteredProjects.length} mục</p>
        </div>

        {filteredProjects.length ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div className="relative h-52 overflow-hidden bg-emerald-50 sm:h-56">
                  <Image
                    src={project.image}
                    alt={`Hình minh họa ${project.title}`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-emerald-800/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-emerald-700">⌖</span>{project.location}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{project.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-400">Thông tin tham khảo</span>
                    <Link
                      href="/lien-he"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition hover:text-emerald-950"
                      aria-label={`Liên hệ về ${project.title}`}
                    >
                      Trao đổi <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-slate-900">Không tìm thấy dự án phù hợp</h3>
            <p className="mt-2 text-sm text-slate-500">Thử từ khóa khác hoặc chọn nhóm công trình khác.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("Tất cả");
                setSearchTerm("");
              }}
              className="mt-5 rounded-full bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-900"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}

        <p className="mt-5 text-xs leading-6 text-slate-400">
          Hình ảnh hiện tại là hình minh họa, không xác nhận hình ảnh hoặc vai trò thực tế của INTES tại từng công trình.
        </p>
      </section>

      {/* PROCESS BAND */}
      <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Quy trình phối hợp</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Từ nhu cầu
              <br /> đến giải pháp
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Chúng tôi tiếp cận dự án theo quy trình rõ ràng, minh bạch và linh hoạt,
              nhằm đảm bảo đưa ra phương án phù hợp nhất với từng công trình.
            </p>
            <Link
              href="/giai-phap"
              className="mt-7 inline-flex items-center rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-900"
            >
              Tìm hiểu thêm <span className="ml-3">→</span>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-800">{step.icon}</span>
                <p className="mt-5 text-xs font-bold tracking-[0.18em] text-emerald-700">{step.number}</p>
                <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-emerald-50 sm:min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"
              alt="Kiến trúc công trình hiện đại minh họa"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/55 via-emerald-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs text-white sm:bottom-8 sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">INTES · Industrial Solutions</p>
              <p className="mt-3 text-2xl font-semibold leading-snug">Đồng hành cùng nhu cầu thực tế</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Vì sao chọn INTES</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Tập trung vào yêu cầu thực tế của từng công trình
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Mỗi dự án có đặc điểm riêng về quy mô, môi trường vận hành, thông số và hồ sơ kỹ thuật.
              Việc xác định rõ nhu cầu là cơ sở để trao đổi sản phẩm và phương án phù hợp hơn.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-lg text-emerald-800">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-emerald-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-emerald-50/95 to-white/80" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Bắt đầu trao đổi</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Bạn đang chuẩn bị dự án mới?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Chia sẻ loại công trình, nhu cầu thiết bị hoặc hồ sơ kỹ thuật để bắt đầu trao đổi cùng INTES.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-800 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-900"
          >
            Liên hệ ngay <span className="ml-3">→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Link href="/" className="text-2xl font-black tracking-[0.18em]">INTES</Link>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.15em] text-slate-400">INDUSTRIAL SOLUTIONS</p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Kết nối thiết bị, thông tin kỹ thuật và giải pháp dành cho khách hàng doanh nghiệp.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Khám phá</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <Link className="block transition hover:text-white" href="/san-pham">Sản phẩm</Link>
              <Link className="block transition hover:text-white" href="/giai-phap">Giải pháp</Link>
              <Link className="block transition hover:text-white" href="/dich-vu">Dịch vụ</Link>
              <Link className="block transition hover:text-white" href="/du-an">Dự án</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Thông tin</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <Link className="block transition hover:text-white" href="/gioi-thieu">Về INTES</Link>
              <Link className="block transition hover:text-white" href="/tai-lieu">Tài liệu & Kiến thức</Link>
              <Link className="block transition hover:text-white" href="/lien-he">Liên hệ</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Kết nối với INTES</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Thông tin liên hệ chính thức sẽ được cập nhật sau khi doanh nghiệp xác nhận.
            </p>
            <Link href="/lien-he" className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-3 text-sm font-semibold transition hover:bg-white/10">
              Gửi yêu cầu tư vấn ↗
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between lg:px-8">
            <span>© 2026 INTES · Industrial Solutions</span>
            <span>Hình ảnh minh họa; dữ liệu dự án cần được xác nhận trước khi công bố</span>
          </div>
        </div>
      </footer>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white p-2 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] sm:hidden">
        <Link href="/san-pham" className="flex items-center justify-center rounded-full py-3 text-sm font-bold text-emerald-900">
          Danh mục
        </Link>
        <Link href="/lien-he" className="flex items-center justify-center rounded-full bg-emerald-800 py-3 text-sm font-bold text-white">
          Yêu cầu báo giá
        </Link>
      </div>
    </main>
  );
}
