
  "use client";

  import Image from "next/image";
  import { useMemo, useState } from "react";
  import Link from "next/link";
  import Header from "@/components/Header";
  import { products } from "@/data/products";

  const ALL_CATEGORIES = "Tất cả sản phẩm";

  // Chuẩn hóa tiếng Việt để tìm kiếm không phân biệt dấu
  function normalize(value: string | null | undefined) {
    return (value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }

  export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(ALL_CATEGORIES);
    const [sort, setSort] = useState("featured");

    // Tự động lấy danh mục từ dữ liệu sản phẩm
    const categoryOptions = useMemo(
      () => [
        ALL_CATEGORIES,
        ...Array.from(
          new Set(
            products
              .map((product) => product.category?.trim())
              .filter((value): value is string => Boolean(value))
          )
        ).sort((a, b) => a.localeCompare(b, "vi", { numeric: true })),
      ],
      []
    );

    // LỌC SẢN PHẨM NGAY KHI GÕ HOẶC CHỌN DANH MỤC
    const filteredProducts = useMemo(() => {
      const keyword = normalize(search);

      let result = products.filter((product) => {
        // Kiểm tra danh mục được chọn
        const matchesCategory =
          category === ALL_CATEGORIES ||
          normalize(product.category) === normalize(category);

        // Nội dung được phép tìm kiếm
        const searchableText = normalize(
          [
            product.name,
            product.title,
            product.model,
            product.brand,
            product.category,
            product.description,
            ...(product.codes ?? []),
          ].join(" ")
        );

        // Kiểm tra từ khóa
        const matchesSearch =
          keyword === "" || searchableText.includes(keyword);

        return matchesCategory && matchesSearch;
      });

      // Sắp xếp kết quả
      if (sort === "name") {
        result.sort((a, b) =>
          normalize(a.name).localeCompare(normalize(b.name), "vi")
        );
      } else if (sort === "brand") {
        result.sort((a, b) =>
          normalize(a.brand).localeCompare(normalize(b.brand), "vi")
        );
      }

      return result;
    }, [search, category, sort]);

    // Đếm số sản phẩm của từng danh mục
    const getCategoryCount = (option: string) => {
      return option === ALL_CATEGORIES
        ? products.length
        : products.filter(
            (product) =>
              normalize(product.category) === normalize(option)
          ).length;
    };

    // Xóa toàn bộ bộ lọc
    const resetFilters = () => {
      setSearch("");
      setCategory(ALL_CATEGORIES);
      setSort("featured");
    };

    return (
      <main className="min-h-screen bg-[#F5F6F8] text-[#19202B]">
        <Header />

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#19202B] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10"
          />

          <div className="relative mx-auto max-w-7xl px-5 py-11 lg:px-8 lg:py-14">
            <div className="text-sm text-[#D1D5DB]">
              <Link href="/" className="transition hover:text-white">
                Trang chủ
              </Link>
              <span className="mx-2 text-white/50">/</span>
              <span className="text-white">Sản phẩm</span>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF8B14]">
                  VIVAFIRE · PRODUCT CATALOGUE
                </div>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Danh mục sản phẩm
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Tra cứu danh mục cửa thép, cửa chống cháy, thiết bị điện và vật
                  tư hạ tầng mạng VIVAIO theo mã hàng, thương hiệu và nhóm sản phẩm.
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
                <div className="text-sm text-white/70">
                  Sản phẩm tìm thấy
                </div>

                <div className="mt-1.5 text-3xl font-semibold tracking-tight">
                  {filteredProducts.length.toString().padStart(2, "0")}
                  <span className="ml-2 text-sm font-medium text-white/70">
                    kết quả
                  </span>
                </div>

                <div className="mt-3 border-t border-white/15 pt-3 text-xs leading-5 text-white/60">
                  Dữ liệu được lấy trực tiếp từ danh mục sản phẩm nội bộ.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="border-b border-[#E3E6EB] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
            <label
              htmlFor="product-search"
              className="mb-2.5 block text-sm font-semibold text-[#19202B]"
            >
              Tìm theo tên, mã sản phẩm, thương hiệu hoặc mô tả
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#8A919C]">
                  ⌕
                </span>

                <input
                  id="product-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Nhập tên sản phẩm, mã hàng, thương hiệu..."
                  autoComplete="off"
                  className="w-full rounded-lg border border-[#E3E6EB] bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#9AA0A9] focus:border-[#FF8B14] focus:ring-4 focus:ring-[#FF8B14]/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Xóa từ khóa tìm kiếm"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#8A919C] hover:bg-[#F1F2F4] hover:text-[#19202B]"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="rounded-lg border border-[#E3E6EB] px-4 py-3 text-sm font-semibold text-[#5B6472] transition hover:border-[#FFB45C] hover:bg-[#FFF8F1] hover:text-[#E66F00]"
              >
                Xóa bộ lọc
              </button>

              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF8B14] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#E66F00]"
              >
                Yêu cầu báo giá ↗
              </Link>
            </div>
          </div>
        </section>

        {/* CATALOGUE */}
        <section className="mx-auto max-w-7xl px-5 py-9 lg:px-8 lg:py-12">
          <div className="grid gap-7 lg:grid-cols-[270px_1fr]">

            {/* SIDEBAR - DANH MỤC */}
            <aside>
              <div className="rounded-xl border border-[#E3E6EB] bg-white p-5">
                <h2 className="text-base font-bold text-[#19202B]">
                  Danh mục sản phẩm
                </h2>

                <div className="mt-4 max-h-[620px] space-y-1 overflow-y-auto pr-1">
                  {categoryOptions.map((option) => {
                    const count = getCategoryCount(option);

                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setCategory(option)}
                        aria-pressed={category === option}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          category === option
                            ? "bg-[#FFF1E3] font-semibold text-[#E66F00]"
                            : "text-[#5B6472] hover:bg-[#F5F6F8] hover:text-[#E66F00]"
                        }`}
                      >
                        <span className="leading-5">
                          {option}
                        </span>

                        <span
                          className={`shrink-0 rounded-md px-1.5 py-0.5 text-[11px] ${
                            category === option
                              ? "bg-white text-[#E66F00]"
                              : "text-[#8A919C]"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="my-5 border-t border-[#E3E6EB]" />

                <h3 className="text-sm font-bold text-[#19202B]">
                  Hỗ trợ khách hàng
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#6B7280]">
                  Chưa xác định được mã hàng phù hợp? Gửi danh sách thiết bị hoặc
                  BOQ để đội ngũ tư vấn hỗ trợ.
                </p>

                <Link
                  href="/lien-he"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-[#FFCF9C] px-3 py-2.5 text-sm font-semibold text-[#E66F00] transition hover:border-[#FF8B14] hover:bg-[#FFF8F1]"
                >
                  Liên hệ tư vấn ↗
                </Link>
              </div>
            </aside>

            {/* PRODUCT GRID */}
            <div>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-[#19202B] sm:text-2xl">
                    {category === ALL_CATEGORIES
                      ? "Thiết bị & vật tư"
                      : category}
                  </h2>

                  <p className="mt-1.5 text-sm text-[#7A8490]">
                    Tìm thấy {filteredProducts.length} / {products.length} sản phẩm
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <label
                    htmlFor="sort-products"
                    className="shrink-0 text-sm text-[#6B7280]"
                  >
                    Sắp xếp
                  </label>

                  <select
                    id="sort-products"
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    className="min-w-40 rounded-lg border border-[#E3E6EB] bg-white px-3 py-2.5 text-sm text-[#374151] outline-none focus:border-[#FF8B14] focus:ring-4 focus:ring-[#FF8B14]/10"
                  >
                    <option value="featured">Theo danh mục gốc</option>
                    <option value="name">Tên sản phẩm A–Z</option>
                    <option value="brand">Thương hiệu A–Z</option>
                  </select>
                </div>
              </div>

              {/* HIỂN THỊ DANH MỤC ĐANG CHỌN */}
              {(category !== ALL_CATEGORIES || search.trim()) && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#7A8490]">
                    Đang lọc:
                  </span>

                  {category !== ALL_CATEGORIES && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E3] px-3 py-1.5 text-xs font-semibold text-[#E66F00]">
                      {category}
                      <button
                        type="button"
                        onClick={() => setCategory(ALL_CATEGORIES)}
                        aria-label="Bỏ lọc danh mục"
                      >
                        ✕
                      </button>
                    </span>
                  )}

                  {search.trim() && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F0F1F3] px-3 py-1.5 text-xs font-semibold text-[#525B66]">
                      Từ khóa: {search}
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Xóa từ khóa"
                      >
                        ✕
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* DANH SÁCH SẢN PHẨM */}
              {filteredProducts.length > 0 ? (
                <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => {
                    const image = product.images?.[0];
                    const visibleCodes = (product.codes ?? []).slice(0, 3);
                    const extraCodes = Math.max(
                      (product.codes?.length ?? 0) - 3,
                      0
                    );

                    return (
                      <article
                        key={product.slug}
                        className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#E3E6EB] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#FFCF9C] hover:shadow-[0_14px_35px_rgba(31,48,65,0.09)]"
                      >
                        <Link
                          href={`/san-pham/${product.slug}`}
                          className="block"
                        >
                          <div className="relative h-52 overflow-hidden bg-[#F1F2F4]">
                            {image ? (
                              <Image
                                src={image}
                                alt={product.name || product.title || "Sản phẩm"}
                                fill
                                unoptimized
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                className="object-contain p-3 transition duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] to-[#E9EBEE] text-[#8A919C]">
                                <span className="text-4xl">▧</span>
                                <span className="mt-2 text-xs">
                                  Chưa có hình ảnh
                                </span>
                              </div>
                            )}

                            <span className="absolute left-3 top-3 rounded-md border border-white/80 bg-white/95 px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-[#19202B]">
                              {product.brand}
                            </span>

                            {product.images && product.images.length > 1 && (
                              <span className="absolute bottom-3 right-3 rounded-md bg-[#19202B]/75 px-2 py-1 text-[10px] font-semibold text-white">
                                {product.images.length} hình ảnh
                              </span>
                            )}
                          </div>
                        </Link>

                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[11px] font-semibold leading-5 text-[#E66F00]">
                              {product.category}
                            </span>

                            <span className="shrink-0 text-[10px] font-medium text-[#8A919C]">
                              {product.brand}
                            </span>
                          </div>

                          <Link
                            href={`/san-pham/${product.slug}`}
                            className="mt-2 block text-base font-bold leading-6 text-[#19202B] transition hover:text-[#E66F00]"
                          >
                            {product.name}
                          </Link>

                          {product.title && product.title !== product.name && (
                            <p className="mt-1 text-xs font-medium leading-5 text-[#7B8490]">
                              {product.title}
                            </p>
                          )}

                          <div className="mt-2 text-[11px] leading-5 text-[#7B8490]">
                            <span className="font-semibold text-[#525B66]">
                              Mã hàng:{" "}
                            </span>

                            {visibleCodes.length > 0
                              ? visibleCodes.join(", ")
                              : product.model || "Đang cập nhật"}

                            {extraCodes > 0
                              ? ` và ${extraCodes} mã khác`
                              : ""}
                          </div>

                          <p className="mt-3 min-h-[66px] flex-1 text-sm leading-6 text-[#6B7280]">
                            {product.description ||
                              "Thông tin chi tiết vui lòng liên hệ VIVAFIRE."}
                          </p>

                          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#E3E6EB] pt-3.5">
                            <Link
                              href={`/san-pham/${product.slug}`}
                              className="rounded-lg border border-[#E3E6EB] px-3 py-2.5 text-center text-xs font-semibold text-[#374151] transition hover:border-[#FFB45C] hover:bg-[#FFF8F1] hover:text-[#E66F00]"
                            >
                              Chi tiết
                            </Link>

                            <Link
                              href={`/lien-he?product=${encodeURIComponent(
                                product.model ||
                                product.codes?.[0] ||
                                product.slug
                              )}`}
                              className="rounded-lg bg-[#FF8B14] px-3 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#E66F00]"
                            >
                              Báo giá ↗
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                /* KHÔNG CÓ SẢN PHẨM */
                <div className="mt-6 rounded-xl border border-dashed border-[#D1D5DB] bg-white px-6 py-14 text-center">
                  <div className="text-4xl text-[#9CA3AF]">⌕</div>

                  <h3 className="mt-4 text-lg font-bold text-[#19202B]">
                    Không tìm thấy sản phẩm
                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">
                    Không có sản phẩm phù hợp với từ khóa hoặc danh mục bạn chọn.
                    Vui lòng thử lại.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 rounded-lg bg-[#FF8B14] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E66F00]"
                  >
                    Hiển thị tất cả sản phẩm
                  </button>
                </div>
              )}

              {/* BÁO GIÁ */}
              <div className="mt-8 rounded-xl border border-[#E3E6EB] bg-[#FFF8F1] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
                <div>
                  <h3 className="font-bold text-[#19202B]">
                    Bạn cần báo giá nhiều thiết bị?
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#5B6472]">
                    Gửi danh sách mã hàng hoặc hồ sơ BOQ để trao đổi về nhu cầu
                    của công trình.
                  </p>
                </div>

                <Link
                  href="/lien-he"
                  className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF8B14] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E66F00] sm:mt-0"
                >
                  Gửi yêu cầu ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
                <h3 className="mb-3.5 text-[15px] font-bold">
                  Khám phá
                </h3>

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
                <h3 className="mb-3.5 text-[15px] font-bold">
                  Về VIVAFIRE
                </h3>

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

                <ul className="grid gap-2.5 break-words text-sm leading-6 text-[#B9C0CA]">
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
              <span>Danh mục sản phẩm · Catalogue nội bộ</span>
            </div>
          </div>
        </footer>
      </main>
    );
  }
