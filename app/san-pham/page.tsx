"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const products = [
  {
    id: "P001",
    name: "Tủ trung tâm báo cháy",
    model: "INT-FACP-001",
    category: "Báo cháy",
    brand: "INTES Demo",
    description:
      "Thiết bị trung tâm tiếp nhận và xử lý tín hiệu từ hệ thống báo cháy.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
    tag: "Sản phẩm nổi bật",
  },
  {
    id: "P002",
    name: "Đầu báo khói",
    model: "INT-SD-002",
    category: "Báo cháy",
    brand: "INTES Demo",
    description:
      "Thiết bị phát hiện khói, dùng trong phương án cảnh báo cháy cho công trình.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
    tag: "Thiết bị phát hiện",
  },
  {
    id: "P003",
    name: "Thiết bị cảnh báo",
    model: "INT-ALM-003",
    category: "Báo cháy",
    brand: "INTES Demo",
    description:
      "Thiết bị cảnh báo phục vụ hệ thống an toàn và thông báo sự cố.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    tag: "Thiết bị cảnh báo",
  },
  {
    id: "P004",
    name: "Thiết bị chữa cháy",
    model: "INT-FIRE-004",
    category: "Chữa cháy",
    brand: "INTES Demo",
    description:
      "Nhóm thiết bị minh họa cho danh mục giải pháp chữa cháy công trình.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=85",
    tag: "Thiết bị công trình",
  },
  {
    id: "P005",
    name: "Van và phụ kiện đường ống",
    model: "INT-VALVE-005",
    category: "Chữa cháy",
    brand: "INTES Demo",
    description:
      "Nhóm phụ kiện phục vụ thiết kế và triển khai hệ thống đường ống kỹ thuật.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
    tag: "Phụ kiện hệ thống",
  },
  {
    id: "P006",
    name: "Thiết bị bơm công nghiệp",
    model: "INT-PUMP-006",
    category: "Bơm & cấp nước",
    brand: "INTES Demo",
    description:
      "Nhóm thiết bị bơm minh họa cho các hệ thống kỹ thuật và cấp nước.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c9a7e5?auto=format&fit=crop&w=900&q=85",
    tag: "Thiết bị cơ điện",
  },
  {
    id: "P007",
    name: "Thiết bị an toàn công trình",
    model: "INT-SAFE-007",
    category: "An toàn",
    brand: "INTES Demo",
    description:
      "Nhóm thiết bị an toàn minh họa, cần xác nhận chủng loại thực tế trước khi công bố.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    tag: "An toàn công trình",
  },
  {
    id: "P008",
    name: "Thiết bị kỹ thuật",
    model: "INT-TECH-008",
    category: "An toàn",
    brand: "INTES Demo",
    description:
      "Danh mục minh họa để trình bày khả năng tìm kiếm và gửi yêu cầu sản phẩm.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",
    tag: "Thiết bị kỹ thuật",
  },
];

const categoryOptions = [
  "Tất cả sản phẩm",
  "Báo cháy",
  "Chữa cháy",
  "Bơm & cấp nước",
  "An toàn",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả sản phẩm");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory =
        category === "Tất cả sản phẩm" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        product.model.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="min-h-screen bg-[#F7FAF7] text-[#24352B]">
      <Header />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#173F2B] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-11 lg:px-8 lg:py-14">
          <div className="text-sm text-[#C8DDCF]">
            <Link href="/" className="transition hover:text-white">
              Trang chủ
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white">Sản phẩm</span>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A9D8B8]">
                INTES · PRODUCT CATALOGUE
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Danh mục sản phẩm
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Khám phá thiết bị, tra cứu mã sản phẩm và thông tin kỹ thuật
                phục vụ lựa chọn giải pháp cho công trình của bạn.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
              <div className="text-sm text-white/70">Danh mục hiện có</div>
              <div className="mt-1.5 text-3xl font-semibold tracking-tight">
                {filteredProducts.length.toString().padStart(2, "0")}
                <span className="ml-2 text-sm font-medium text-white/70">
                  sản phẩm
                </span>
              </div>
              <div className="mt-3 border-t border-white/15 pt-3 text-xs leading-5 text-white/60">
                Số lượng kết quả thay đổi theo bộ lọc bạn chọn.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="border-b border-[#E3EBE5] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <label
            htmlFor="product-search"
            className="mb-2.5 block text-sm font-semibold text-[#254B35]"
          >
            Tìm theo tên sản phẩm, mã hàng hoặc thương hiệu
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#87968B]">
                ⌕
              </span>
              <input
                id="product-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ví dụ: đầu báo khói, INT-SD-002..."
                className="w-full rounded-lg border border-[#DCE6DE] bg-[#FAFCFA] py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#9AA69E] focus:border-[#39835A] focus:ring-4 focus:ring-[#39835A]/10"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Tất cả sản phẩm");
                setSort("featured");
              }}
              className="rounded-lg border border-[#DCE6DE] px-4 py-3 text-sm font-semibold text-[#526258] transition hover:border-[#AFCDB8] hover:bg-[#F5F9F5] hover:text-[#176B45]"
            >
              Xóa bộ lọc
            </button>

            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#176B45] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#105536]"
            >
              Yêu cầu báo giá <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="mx-auto max-w-7xl px-5 py-9 lg:px-8 lg:py-12">
        <div className="grid gap-7 lg:grid-cols-[235px_1fr]">
          {/* SIDEBAR */}
          <aside>
            <div className="rounded-xl border border-[#E1E9E2] bg-white p-5">
              <h2 className="text-base font-bold text-[#203F2D]">
                Danh mục sản phẩm
              </h2>

              <div className="mt-4 space-y-1">
                {categoryOptions.map((option) => {
                  const count =
                    option === "Tất cả sản phẩm"
                      ? products.length
                      : products.filter(
                          (product) => product.category === option,
                        ).length;

                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setCategory(option)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        category === option
                          ? "bg-[#EAF4EC] font-semibold text-[#176B45]"
                          : "text-[#5D6A61] hover:bg-[#F5F8F5] hover:text-[#176B45]"
                      }`}
                    >
                      <span>{option}</span>
                      <span
                        className={`rounded-md px-1.5 py-0.5 text-[11px] ${
                          category === option
                            ? "bg-white text-[#176B45]"
                            : "text-[#8A968D]"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="my-5 border-t border-[#E8EEE9]" />

              <h3 className="text-sm font-bold text-[#203F2D]">
                Hỗ trợ khách hàng
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-[#748077]">
                Chưa tìm được thiết bị phù hợp? Hãy gửi nhu cầu để trao đổi
                thêm về mã hàng và thông số kỹ thuật.
              </p>
              <Link
                href="/lien-he"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-[#B8D2BF] px-3 py-2.5 text-sm font-semibold text-[#176B45] transition hover:border-[#176B45] hover:bg-[#F2F8F3]"
              >
                Liên hệ tư vấn ↗
              </Link>
            </div>
          </aside>

          {/* PRODUCT LIST */}
          <div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#203F2D] sm:text-2xl">
                  Thiết bị & vật tư
                </h2>
                <p className="mt-1.5 text-sm text-[#7A877E]">
                  Tìm thấy {filteredProducts.length} sản phẩm phù hợp
                </p>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort-products"
                  className="shrink-0 text-sm text-[#748077]"
                >
                  Sắp xếp
                </label>
                <select
                  id="sort-products"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="min-w-40 rounded-lg border border-[#DCE6DE] bg-white px-3 py-2.5 text-sm text-[#435248] outline-none focus:border-[#39835A] focus:ring-4 focus:ring-[#39835A]/10"
                >
                  <option value="featured">Mặc định</option>
                  <option value="name">Tên sản phẩm A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-xl border border-[#E1E9E2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#B8D8C1] hover:shadow-[0_14px_35px_rgba(31,77,48,0.09)]"
                  >
                    <Link
                      href={`/san-pham/${product.id.toLowerCase()}`}
                      className="block"
                    >
                      <div className="relative h-52 overflow-hidden bg-[#F0F4F0]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-[#31543D]">
                          {product.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-4.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#39835A]">
                          {product.category}
                        </span>
                        <span className="text-[10px] font-medium tracking-wide text-[#9AA49C]">
                          {product.id}
                        </span>
                      </div>

                      <Link
                        href={`/san-pham/${product.id.toLowerCase()}`}
                        className="mt-2.5 block text-base font-bold leading-6 text-[#203F2D] transition hover:text-[#218454]"
                      >
                        {product.name}
                      </Link>

                      <div className="mt-1.5 text-[11px] text-[#8A968D]">
                        Mã sản phẩm: {product.model}
                      </div>

                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#718076]">
                        {product.description}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#EDF1ED] pt-3.5">
                        <Link
                          href={`/san-pham/${product.id.toLowerCase()}`}
                          className="rounded-lg border border-[#DCE6DE] px-3 py-2.5 text-center text-xs font-semibold text-[#435248] transition hover:border-[#8DB99A] hover:bg-[#F6FAF6] hover:text-[#176B45]"
                        >
                          Chi tiết
                        </Link>
                        <Link
                          href={`/lien-he?product=${product.id}`}
                          className="rounded-lg bg-[#176B45] px-3 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#105536]"
                        >
                          Báo giá ↗
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-[#C9D8CC] bg-white px-6 py-14 text-center">
                <div className="text-4xl text-[#A7B8AB]">⌕</div>
                <h3 className="mt-4 text-lg font-bold text-[#203F2D]">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="mt-2 text-sm text-[#748077]">
                  Thử từ khóa khác hoặc chọn một danh mục khác.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("Tất cả sản phẩm");
                    setSort("featured");
                  }}
                  className="mt-5 rounded-lg bg-[#176B45] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#105536]"
                >
                  Hiển thị tất cả
                </button>
              </div>
            )}

            <div className="mt-8 rounded-xl border border-[#DDE9DF] bg-[#EDF6EF] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <div>
                <h3 className="font-bold text-[#203F2D]">
                  Bạn cần báo giá nhiều thiết bị?
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[#647469]">
                  Gửi danh sách mã hàng hoặc hồ sơ BOQ để trao đổi về nhu cầu
                  của công trình.
                </p>
              </div>
              <Link
                href="/lien-he"
                className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#176B45] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#105536] sm:mt-0"
              >
                Gửi yêu cầu ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E1E9E2] bg-white px-5 py-8 text-center text-sm text-[#7A877E]">
        <Link href="/" className="font-black tracking-[0.2em] text-[#203F2D]">
          INTES
        </Link>
        <p className="mt-3">
          Website demo · Danh mục và mã hàng cần được xác nhận trước khi công bố.
        </p>
        <Link href="/" className="mt-4 inline-block transition hover:text-[#176B45]">
          ← Quay về trang chủ
        </Link>
      </footer>
    </main>
  );
}
