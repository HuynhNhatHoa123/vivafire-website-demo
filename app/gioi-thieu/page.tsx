
import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const ORANGE = "#F58220";
const ORANGE_DARK = "#C85E0A";
const DARK = "#20242B";
const MUTED = "#667085";
const LIGHT = "#F7F7F6";

/**
 * Các ảnh được lấy từ bộ hồ sơ năng lực đã đưa vào:
 * public/vivafire/
 *
 * Ví dụ: public/vivafire/image78.jpeg
 * sẽ được gọi bằng: /vivafire/image78.jpeg
 */

const companyDetails = [
  { label: "Tên công ty", value: "Công ty Cổ phần Dịch vụ Công nghệ VIVAFIRE" },
  {
    label: "Tên tiếng Anh",
    value: "VIVAFIRE TECHNOLOGY SERVICES JOINT STOCK COMPANY",
  },
  { label: "Tên viết tắt", value: "VIVAFIRE" },
  { label: "Mã số doanh nghiệp", value: "0316732553" },
  { label: "Năm thành lập", value: "2021" },
];

const values = [
  {
    number: "01",
    title: "Kỷ luật kỹ thuật",
    description:
      "Tôn trọng quy trình, tiêu chuẩn và yêu cầu kỹ thuật trong quá trình tư vấn, cung cấp và triển khai.",
  },
  {
    number: "02",
    title: "Chính trực và tin cậy",
    description:
      "Xây dựng quan hệ hợp tác trên cơ sở minh bạch, trách nhiệm và cam kết với khách hàng.",
  },
  {
    number: "03",
    title: "Cải tiến liên tục",
    description:
      "Chú trọng kiến thức chuyên môn, kinh nghiệm thực tiễn và lựa chọn giải pháp phù hợp từng công trình.",
  },
];

const licenses = [
  {
    title: "Giấy chứng nhận đăng ký doanh nghiệp",
    description:
      "Hồ sơ pháp lý doanh nghiệp theo tài liệu năng lực được cung cấp.",
    image: "/images/vivafire/image4.png",
    tag: "HỒ SƠ DOANH NGHIỆP",
  },
  {
    title: "Hồ sơ kiểm định phương tiện PCCC",
    description:
      "Tài liệu kiểm định thiết bị phòng cháy chữa cháy trong hồ sơ năng lực.",
    image: "/images/vivafire/image7.jpeg",
    tag: "KIỂM ĐỊNH THIẾT BỊ",
  },
  {
    title: "Tài liệu chứng nhận và năng lực chuyên môn",
    description:
      "Hình ảnh tài liệu chứng nhận được trích xuất từ bộ hồ sơ công ty.",
    image: "/images/vivafire/image11.png",
    tag: "CHỨNG NHẬN",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Hệ thống báo cháy",
    description:
      "Cung cấp thiết bị và giải pháp báo cháy, hỗ trợ phát hiện sớm và truyền tín hiệu cảnh báo trong công trình.",
    image: "/images/vivafire/image91.png",
    tags: ["Thiết bị báo cháy", "Tủ điều khiển", "Giải pháp hệ thống"],
  },
  {
    number: "02",
    title: "Cửa và màn ngăn cháy",
    description:
      "Giải pháp cửa chống cháy và màn ngăn cháy phục vụ phân khu, ngăn cháy lan theo yêu cầu thiết kế.",
    image: "/images/vivafire/image42.jpeg",
    tags: ["Cửa chống cháy", "Màn ngăn cháy", "Lắp đặt"],
  },
  {
    number: "03",
    title: "Thiết bị và hệ thống kỹ thuật",
    description:
      "Hình ảnh thiết bị, tủ kỹ thuật và hạng mục lắp đặt được ghi nhận trong hồ sơ năng lực.",
    image: "/images/vivafire/image70.png",
    tags: ["Thiết bị kỹ thuật", "Tủ hệ thống", "Công trình"],
  },
];

const projects = [
  {
    category: "CÔNG TRÌNH",
    title: "Hình ảnh công trình và hạ tầng",
    image: "/images/vivafire/image82.jpeg",
  },
  {
    category: "NHÀ XƯỞNG",
    title: "Hình ảnh nhà máy và khu sản xuất",
    image: "/images/vivafire/image78.jpeg",
  },
  {
    category: "TÒA NHÀ",
    title: "Hình ảnh công trình cao tầng",
    image: "/images/vivafire/image85.jpeg",
  },
  {
    category: "HẠ TẦNG",
    title: "Hình ảnh khuôn viên và công trình",
    image: "/images/vivafire/image88.png",
  },
];

const brands = [
  "VIVAFIRE",
  "VIVAIO",
  "VIVADOORS",
  "VIVATEK",
  "VIVAPARKING",
  "VIVA PA",
  "VIVACOMMS",
  "COMELIT",
  "SANJIANG",
];

const leadership = [
  {
    name: "Bùi Khắc Thiện",
    role: "Giám đốc / Kỹ sư Điện – Viễn thông",
    experience: "18 năm",
  },
  {
    name: "Mai Quốc Chương",
    role: "Giám đốc ngành / Kỹ sư Điện – Điện tử",
    experience: "22 năm",
  },
  {
    name: "Hoàng Minh Nhật",
    role: "Giám đốc Công nghệ / Kỹ sư Cơ điện tử",
    experience: "11 năm",
  },
  {
    name: "Trần Phương Linh",
    role: "Nghiên cứu và Phát triển sản phẩm",
    experience: "12 năm",
  },
  {
    name: "Nguyễn Anh Kha",
    role: "Trưởng phòng Quản lý Dự án",
    experience: "6 năm",
  },
  {
    name: "Trần Thanh Công",
    role: "Phó phòng Quản lý & Phát triển Dự án",
    experience: "11 năm",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-[#D96B12] sm:text-sm">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`max-w-[24ch] text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : "text-[#20242B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-[68ch] text-sm leading-7 sm:text-base sm:leading-8 ${
            light ? "text-white/70" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function LocalImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}

export default function GioiThieuPage() {
  return (
    <main
      className="min-h-screen overflow-x-clip bg-white text-[#20242B] antialiased"
      style={{ fontFamily: "Arial, Roboto, sans-serif" }}
    >
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#20242B] text-white">
        <div className="absolute inset-0 -z-20">
          <LocalImage
            src="/images/vivafire/image78.jpeg"
            alt="Hình ảnh nhà máy trong hồ sơ năng lực VIVAFIRE"
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171A20]/95 via-[#20242B]/85 to-[#20242B]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#20242B]/65 via-transparent to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:min-h-[590px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF9A3D]" />
              VIVAFIRE · Technology Services
            </div>

            <h1 className="mt-7 max-w-[15ch] text-4xl font-bold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[68px]">
              Năng lực kỹ thuật.
              <span className="mt-2 block text-[#FF9A3D]">
                Giá trị bền vững.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              VIVAFIRE hoạt động trong lĩnh vực phòng cháy chữa cháy và các
              giải pháp kỹ thuật công trình, hướng đến sự tin cậy, năng lực
              chuyên môn và trách nhiệm trong từng hạng mục triển khai.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/san-pham"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#F58220] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D96B12]"
              >
                Khám phá sản phẩm <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex min-h-12 items-center justify-center border border-white/45 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FF9A3D] hover:bg-white/10"
              >
                Trao đổi với chúng tôi
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-2xl font-bold text-white">2021</p>
                <p className="mt-1 text-xs text-white/65">Năm thành lập</p>
              </div>
              <div className="hidden h-12 w-px bg-white/20 sm:block" />
              <div>
                <p className="text-2xl font-bold text-white">PCCC</p>
                <p className="mt-1 text-xs text-white/65">
                  Lĩnh vực chuyên môn
                </p>
              </div>
              <div className="hidden h-12 w-px bg-white/20 sm:block" />
              <div>
                <p className="text-2xl font-bold text-white">VIVAFIRE</p>
                <p className="mt-1 text-xs text-white/65">
                  Technology Services
                </p>
              </div>
            </div>
          </div>

          <aside className="relative min-w-0 border border-white/20 bg-[#20242B]/75 p-6 backdrop-blur-md sm:p-8">
            <div className="absolute left-0 top-0 h-1 w-20 bg-[#F58220]" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFAD64]">
              Company profile
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Công ty Cổ phần Dịch vụ Công nghệ VIVAFIRE
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              VIVAFIRE TECHNOLOGY SERVICES JOINT STOCK COMPANY
            </p>

            <div className="mt-7 space-y-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-xs text-white/55">Mã số doanh nghiệp</p>
                <p className="mt-1 break-words text-base font-semibold">
                  0316732553
                </p>
              </div>
              <div>
                <p className="text-xs text-white/55">Định hướng hoạt động</p>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  Tư vấn, cung cấp thiết bị và triển khai các giải pháp kỹ thuật
                  cho công trình.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#F0F0EE]">
              <LocalImage
                src="/images/vivafire/image31.png"
                alt="Sơ đồ và thông tin giải pháp kỹ thuật trong hồ sơ VIVAFIRE"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-3 sm:p-6"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[250px] border-l-4 border-[#F58220] bg-white p-4 shadow-xl sm:right-7 sm:p-5">
              <p className="text-sm font-bold text-[#20242B]">
                Engineering & Technology
              </p>
              <p className="mt-1 text-xs leading-5 text-[#667085]">
                Năng lực kỹ thuật và giải pháp theo hồ sơ doanh nghiệp. 
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <SectionHeading
              eyebrow="01 · Về VIVAFIRE"
              title="Đối tác kỹ thuật đồng hành cùng công trình"
              description="Trong lĩnh vực kỹ thuật và phòng cháy chữa cháy, chất lượng giải pháp không chỉ đến từ thiết bị mà còn phụ thuộc vào sự phối hợp, năng lực chuyên môn và trách nhiệm trong quá trình thực hiện."
            />
            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              VIVAFIRE định hướng cung cấp thiết bị, dịch vụ tư vấn và các hạng
              mục kỹ thuật liên quan đến hệ thống phòng cháy chữa cháy. Hồ sơ
              năng lực của doanh nghiệp cũng thể hiện các nhóm sản phẩm, thương
              hiệu và hình ảnh công trình phục vụ việc giới thiệu năng lực.
            </p>
            <Link
              href="/lien-he"
              className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#F58220] pb-2 text-sm font-bold text-[#20242B] transition hover:text-[#D96B12]"
            >
              Kết nối với VIVAFIRE <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY INFORMATION */}
      <section className="border-y border-[#E8E8E6] bg-[#FAFAF9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="02 · Thông tin doanh nghiệp"
            title="Thông tin pháp lý và nhận diện"
            description="Thông tin dưới đây được tổng hợp từ hồ sơ năng lực do doanh nghiệp cung cấp."
          />

          <div className="border-y border-[#DFE1E3]">
            {companyDetails.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 border-b border-[#DFE1E3] py-4 last:border-b-0 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:py-5"
              >
                <p className="text-sm leading-6 text-[#7A8089]">
                  {item.label}
                </p>
                <p className="break-words text-sm font-semibold leading-7 text-[#20242B] sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="03 · Tầm nhìn & giá trị"
            title="Lấy năng lực chuyên môn làm nền tảng"
            description="Định hướng phát triển tập trung vào uy tín, khả năng triển khai và mối quan hệ hợp tác lâu dài."
          />

          <div className="grid gap-4">
            <article className="border-l-4 border-[#F58220] bg-[#FAF7F3] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D96B12]">
                Tầm nhìn
              </p>
              <h3 className="mt-3 text-xl font-bold text-[#20242B]">
                Trở thành đối tác kỹ thuật đáng tin cậy
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Hướng đến vị thế doanh nghiệp kỹ thuật và công nghệ được khách
                hàng tin tưởng trong các dự án công nghiệp và thương mại.
              </p>
            </article>

            <article className="border border-[#E6E6E4] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D96B12]">
                Sứ mệnh
              </p>
              <h3 className="mt-3 text-xl font-bold text-[#20242B]">
                Mang đến giải pháp phù hợp và có trách nhiệm
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Kết hợp chuyên môn kỹ thuật, phương pháp quản lý và sự phối hợp
                của đội ngũ để đáp ứng yêu cầu của khách hàng.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="group border border-[#E6E6E4] p-6 transition hover:-translate-y-1 hover:border-[#F58220] hover:shadow-lg sm:p-7"
            >
              <p className="text-sm font-bold tracking-[0.15em] text-[#F58220]">
                {value.number}
              </p>
              <h3 className="mt-5 text-lg font-bold text-[#20242B]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#667085]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* LICENSES AND CERTIFICATES */}
      <section className="bg-[#F6F6F4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="04 · Hồ sơ pháp lý"
              title="Giấy phép và chứng nhận"
              description="Một số hình ảnh tài liệu được trích xuất trực tiếp từ hồ sơ năng lực VIVAFIRE."
            />
            <p className="max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              Khi công bố chính thức, cần đối chiếu bản gốc để xác nhận số hiệu,
              cơ quan cấp, thời hạn và phạm vi hiệu lực của từng tài liệu.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {licenses.map((license, index) => (
              <article
                key={license.title}
                className="group overflow-hidden border border-[#E2E2DF] bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#ECEDEB] p-4">
                  <Image
                    src={license.image}
                    alt={license.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 bg-white/95 px-3 py-2 text-[10px] font-bold tracking-[0.12em] text-[#D96B12]">
                    {license.tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-bold text-[#F58220]">
                    TÀI LIỆU {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-7 text-[#20242B]">
                    {license.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {license.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="05 · Năng lực kỹ thuật"
            title="Giải pháp thiết bị và hệ thống"
            description="Các nhóm năng lực được trình bày theo lĩnh vực hoạt động trong hồ sơ doanh nghiệp."
          />
          <Link
            href="/san-pham"
            className="inline-flex w-fit shrink-0 items-center gap-2 border-b-2 border-[#F58220] pb-2 text-sm font-bold text-[#20242B] transition hover:text-[#D96B12]"
          >
            Xem sản phẩm <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group min-w-0 overflow-hidden border border-[#E6E6E4] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-[#F0F0EE]">
                <LocalImage
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#F58220] px-3 py-2 text-xs font-bold text-white">
                  {item.number}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-[#20242B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#E8E8E6] bg-[#FAFAF9] px-3 py-2 text-xs text-[#555D67]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#20242B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="06 · Hình ảnh công trình"
              title="Dấu ấn từ thực tế triển khai"
              description="Một số hình ảnh công trình và hạ tầng có trong bộ hồ sơ năng lực được sử dụng để minh họa."
              light
            />
            <Link
              href="/du-an"
              className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#FF9A3D] pb-2 text-sm font-bold text-[#FFAD64] transition hover:text-white"
            >
              Khám phá dự án <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group min-w-0 overflow-hidden border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#34383F]">
                  <LocalImage
                    src={project.image}
                    alt={project.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#FFAD64]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-6 text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-white/35 bg-black/20 text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-white/50">
            Lưu ý: cần xác nhận ảnh, tên dự án và phạm vi công việc của VIVAFIRE
            trước khi gắn từng ảnh với một dự án cụ thể trên website chính thức.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="07 · Đội ngũ chuyên môn"
          title="Con người tạo nên năng lực triển khai"
          description="Thông tin chức danh và kinh nghiệm được tổng hợp từ hồ sơ được cung cấp; vui lòng xác nhận trước khi đăng công khai."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((person, index) => (
            <article
              key={person.name}
              className="group flex min-w-0 gap-5 border border-[#E6E6E4] p-5 transition hover:border-[#F58220] hover:shadow-lg sm:p-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#FFF1E4] text-base font-bold text-[#D96B12] transition group-hover:bg-[#F58220] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <h3 className="break-words text-lg font-bold leading-6 text-[#20242B]">
                  {person.name}
                </h3>
                <p className="mt-2 break-words text-sm leading-6 text-[#667085]">
                  {person.role}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#D96B12]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F58220]" />
                  Kinh nghiệm: {person.experience}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-[#E8E8E6] bg-[#FAFAF9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="08 · Thương hiệu"
            title="Hệ sinh thái thương hiệu và đối tác"
            description="Danh sách tên thương hiệu được ghi nhận trong hồ sơ năng lực. Việc thể hiện quan hệ đại lý hoặc đối tác cần căn cứ tài liệu xác nhận."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="flex min-h-[84px] items-center justify-center border border-[#E4E4E1] bg-white px-3 py-5 text-center transition hover:border-[#F58220] hover:shadow-md"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-[#A0A4AA]">
                    BRAND {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 break-words text-sm font-extrabold tracking-[0.04em] text-[#20242B]">
                    {brand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
{/* CONTACT CTA */}
<section className="bg-[#F7F7F6] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
  <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20242B]">
    {/* Decorative elements */}
    <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/[0.08]" />
    <div className="pointer-events-none absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/[0.08]" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-1/3 bg-[#F58220]" />

    <div className="relative grid gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:gap-16 lg:px-16 lg:py-16">
      {/* Left content */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#F58220]" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFAD64]">
            Kết nối cùng VIVAFIRE
          </p>
        </div>

        <h2 className="mt-7 max-w-[18ch] text-3xl font-bold leading-[1.2] tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
          Giải pháp kỹ thuật phù hợp.
          <span className="block text-[#FF9A3D]">
            Đồng hành cùng công trình.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
          Từ nhu cầu thiết bị, hệ thống phòng cháy chữa cháy đến các hạng mục
          kỹ thuật công trình, VIVAFIRE sẵn sàng trao đổi để cùng khách hàng
          tìm ra phương án phù hợp với yêu cầu thực tế.
        </p>
      </div>

      {/* Right action panel */}
      <div className="relative border border-white/15 bg-white/[0.04] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
          Bắt đầu trao đổi
        </p>

        <h3 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
          Bạn đang cần tư vấn cho dự án?
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/60">
          Gửi thông tin nhu cầu để đội ngũ VIVAFIRE có cơ sở trao đổi và đề
          xuất hướng giải quyết phù hợp.
        </p>

        <Link
          href="/lien-he"
          className="mt-7 flex min-h-12 w-full items-center justify-center gap-3 bg-[#F58220] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D96B12]"
        >
          Liên hệ tư vấn
          <span aria-hidden="true">↗</span>
        </Link>

        <Link
          href="/san-pham"
          className="mt-4 flex min-h-11 w-full items-center justify-center border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06] hover:text-white"
        >
          Khám phá danh mục sản phẩm
        </Link>
      </div>
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
              
            </span>
          </div>
        </div>
      </footer>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#E6E6E4] bg-white/95 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
        <Link
          href="/san-pham"
          className="flex min-h-11 items-center justify-center px-2 text-sm font-bold text-[#20242B]"
        >
          Sản phẩm
        </Link>
        <Link
          href="/lien-he"
          className="flex min-h-11 items-center justify-center bg-[#F58220] px-2 text-center text-sm font-bold text-white"
        >
          Yêu cầu báo giá
        </Link>
      </div>

      <div className="h-16 sm:hidden" />
    </main>
  );
}
