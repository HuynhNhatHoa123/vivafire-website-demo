
import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    id: "p001",
    name: "Tủ trung tâm báo cháy",
    model: "INT-FACP-001",
    category: "Báo cháy",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Thiết bị trung tâm tiếp nhận và xử lý tín hiệu từ các thiết bị ngoại vi trong hệ thống báo cháy.",
    description:
      "Sản phẩm minh họa giao diện tra cứu thiết bị dành cho khách hàng doanh nghiệp. Cấu hình, khả năng kết nối và tiêu chuẩn áp dụng cần được xác nhận theo model thực tế trước khi sử dụng.",
    features: [
      "Thông tin model và mã hàng",
      "Mô tả chức năng thiết bị",
      "Khu vực tài liệu kỹ thuật",
      "Yêu cầu tư vấn và báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-FACP-001"],
      ["Danh mục", "Báo cháy"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p002",
    name: "Đầu báo khói",
    model: "INT-SD-002",
    category: "Báo cháy",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Thiết bị phát hiện khói, được giới thiệu trong danh mục mẫu hệ thống báo cháy.",
    description:
      "Trang demo trình bày thông tin cơ bản, mã hàng và khu vực tài liệu cho một thiết bị phát hiện khói. Thông số thực tế phải dựa trên tài liệu nhà sản xuất.",
    features: [
      "Thông tin thiết bị và mã hàng",
      "Mô tả chức năng",
      "Khu vực tài liệu kỹ thuật",
      "Yêu cầu tư vấn và báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-SD-002"],
      ["Danh mục", "Báo cháy"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p003",
    name: "Thiết bị cảnh báo",
    model: "INT-ALM-003",
    category: "Báo cháy",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    summary: "Thiết bị minh họa cho nhóm cảnh báo và thông báo sự cố.",
    description:
      "Dữ liệu dùng để trình bày giao diện sản phẩm. Cần thay bằng thông tin chính thức của thiết bị trước khi công bố.",
    features: [
      "Thông tin model",
      "Mô tả chức năng",
      "Tài liệu kỹ thuật",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-ALM-003"],
      ["Danh mục", "Báo cháy"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p004",
    name: "Thiết bị chữa cháy",
    model: "INT-FIRE-004",
    category: "Chữa cháy",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Nhóm thiết bị minh họa phục vụ danh mục giải pháp chữa cháy công trình.",
    description:
      "Thông tin thực tế về loại thiết bị, ứng dụng và tiêu chuẩn cần được xác nhận từ nhà cung cấp.",
    features: [
      "Thông tin sản phẩm",
      "Phân loại thiết bị",
      "Khu vực tài liệu",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-FIRE-004"],
      ["Danh mục", "Chữa cháy"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p005",
    name: "Van và phụ kiện đường ống",
    model: "INT-VALVE-005",
    category: "Chữa cháy",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
    summary: "Nhóm phụ kiện minh họa cho hệ thống đường ống kỹ thuật.",
    description:
      "Thông số kích thước, vật liệu, áp suất làm việc và tiêu chuẩn phải được bổ sung từ hồ sơ sản phẩm thực tế.",
    features: [
      "Thông tin mã hàng",
      "Phân loại phụ kiện",
      "Tài liệu kỹ thuật",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-VALVE-005"],
      ["Danh mục", "Chữa cháy"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p006",
    name: "Thiết bị bơm công nghiệp",
    model: "INT-PUMP-006",
    category: "Bơm & cấp nước",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c9a7e5?auto=format&fit=crop&w=1200&q=85",
    summary: "Nhóm thiết bị bơm minh họa cho danh mục cơ điện và cấp nước.",
    description:
      "Lưu lượng, cột áp, công suất và thông số vận hành phải được xác nhận theo model bơm thực tế.",
    features: [
      "Thông tin model",
      "Mô tả ứng dụng",
      "Khu vực tài liệu",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-PUMP-006"],
      ["Danh mục", "Bơm & cấp nước"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p007",
    name: "Thiết bị an toàn công trình",
    model: "INT-SAFE-007",
    category: "An toàn",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    summary: "Nhóm thiết bị minh họa cho danh mục an toàn công trình.",
    description:
      "Sản phẩm được dùng để trình diễn giao diện. Chủng loại và công năng thực tế cần được xác nhận.",
    features: [
      "Thông tin sản phẩm",
      "Mã hàng tham khảo",
      "Khu vực tài liệu",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-SAFE-007"],
      ["Danh mục", "An toàn"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
  {
    id: "p008",
    name: "Thiết bị kỹ thuật",
    model: "INT-TECH-008",
    category: "An toàn",
    brand: "VIVAFIRE Demo",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85",
    summary: "Mục sản phẩm mẫu để minh họa khả năng tra cứu và gửi yêu cầu.",
    description:
      "Nội dung kỹ thuật sẽ được thay bằng dữ liệu sản phẩm được doanh nghiệp xác nhận.",
    features: [
      "Thông tin mã hàng",
      "Mô tả sản phẩm",
      "Khu vực tài liệu",
      "Yêu cầu báo giá",
    ],
    specifications: [
      ["Mã sản phẩm", "INT-TECH-008"],
      ["Danh mục", "An toàn"],
      ["Thương hiệu", "VIVAFIRE Demo"],
      ["Tình trạng thông tin", "Dữ liệu minh họa"],
      ["Thông số kỹ thuật", "Cần xác nhận theo model thực tế"],
    ],
  },
];

type Product = (typeof products)[number];

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Product | undefined = products.find(
    (item) => item.id === slug.toLowerCase(),
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-5 text-sm text-slate-500 lg:px-8">
          <a href="/" className="hover:text-orange-600">
            Trang chủ
          </a>
          <span className="mx-2">/</span>
          <a href="/san-pham" className="hover:text-orange-600">
            Sản phẩm
          </a>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <div>
          <div className="relative min-h-[350px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[520px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-4 py-2 text-xs font-bold text-slate-900">
              {product.category}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Thông tin sản phẩm", "Thông số kỹ thuật", "Tài liệu"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 px-3 py-4 text-center text-xs font-semibold text-slate-600 sm:text-sm"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Product information
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-md bg-slate-100 px-3 py-2 text-slate-600">
              Mã hàng: <strong className="text-slate-900">{product.model}</strong>
            </span>
            <span className="rounded-md bg-orange-50 px-3 py-2 text-orange-800">
              {product.brand}
            </span>
          </div>

          <p className="mt-7 text-base leading-8 text-slate-600">
            {product.summary}
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="text-sm font-bold text-slate-900">
              Bạn cần báo giá sản phẩm này?
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Gửi mã hàng và thông tin nhu cầu để đội ngũ phụ trách có thể
              tiếp nhận yêu cầu.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/lien-he?product=${product.id}`}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-orange-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Yêu cầu báo giá ↗
              </a>
              <a
                href="/lien-he"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-4 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>

          <div className="mt-9">
            <h2 className="text-xl font-bold text-slate-900">
              Đặc điểm thông tin
            </h2>
            <div className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Technical information
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                Thông số & tài liệu
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Thông số chi tiết và tài liệu tải về sẽ được cập nhật sau khi
                có hồ sơ chính thức từ nhà sản xuất hoặc nhà cung cấp.
              </p>
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                Lưu ý: Đây là dữ liệu demo, không dùng để thiết kế hoặc thi
                công khi chưa được xác nhận.
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {product.specifications.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid gap-2 px-5 py-4 sm:grid-cols-[200px_1fr] ${
                    index !== product.specifications.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {value}
                  </div>
                </div>
              ))}

              <div className="border-t border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-bold text-slate-900">
                      Cần tài liệu kỹ thuật?
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      Liên hệ để yêu cầu hồ sơ sản phẩm phù hợp.
                    </p>
                  </div>
                  <a
                    href={`/lien-he?product=${product.id}`}
                    className="rounded-lg border border-slate-900 px-4 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
                  >
                    Yêu cầu tài liệu ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-5 rounded-2xl bg-slate-900 p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Cần hỗ trợ lựa chọn thiết bị?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Gửi yêu cầu để trao đổi về nhu cầu, thông số và phương án báo giá.
            </p>
          </div>
          <a
            href="/lien-he"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-6 py-4 text-sm font-bold text-white hover:bg-orange-600"
          >
            Liên hệ tư vấn ↗
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/san-pham"
            className="text-sm font-bold text-slate-900 hover:text-orange-600"
          >
            ← Quay lại danh mục sản phẩm
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <a href="/" className="font-black tracking-[0.2em] text-white">
          VIVAFIRE
        </a>
        <p className="mt-3">
          Website demo · Thông số và tài liệu cần được xác nhận trước khi công bố.
        </p>
      </footer>
    </main>
  );
}
