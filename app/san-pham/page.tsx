
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import { products } from "@/data/products";

const ALL_CATEGORIES = "Tất cả sản phẩm";

type SortOption = "default" | "name-asc" | "name-desc";

function normalize(value: string | null | undefined) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function ProductImage({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [imageError, setImageError] = useState(false);
  const image = images?.find((item) => item?.trim());

  if (!image || imageError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#F5F6F8] text-[#9AA1AA]">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="mt-2 text-xs">Chưa có hình ảnh</span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
}

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [sort, setSort] = useState<SortOption>("default");

  // Tự động lấy danh mục từ dữ liệu sản phẩm
  const categoryOptions = useMemo(() => {
    const categories = Array.from(
      new Set(
        products
          .map((product) => product.category)
          .filter((item) => Boolean(item?.trim()))
      )
    );

    return [
      ALL_CATEGORIES,
      ...categories.sort((a, b) => a.localeCompare(b, "vi")),
    ];
  }, []);

  // Tìm kiếm, lọc danh mục và sắp xếp
  const filteredProducts = useMemo(() => {
    const keyword = normalize(search);

    let result = products.filter((product) => {
      const matchCategory =
        category === ALL_CATEGORIES ||
        product.category === category;

      const searchContent = [
        product.name,
        product.title,
        product.model,
        product.brand,
        product.category,
        product.description,
        product.specification,
        product.generalSpecifications,
        ...(product.codes ?? []),
      ]
        .filter(Boolean)
        .join(" ");

      const matchSearch =
        !keyword || normalize(searchContent).includes(keyword);

      return matchCategory && matchSearch;
    });

    if (sort === "name-asc") {
      result = [...result].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "", "vi")
      );
    }

    if (sort === "name-desc") {
      result = [...result].sort((a, b) =>
        (b.name || "").localeCompare(a.name || "", "vi")
      );
    }

    return result;
  }, [search, category, sort]);

  const hasFilter =
    search.trim() !== "" ||
    category !== ALL_CATEGORIES ||
    sort !== "default";

  function resetFilters() {
    setSearch("");
    setCategory(ALL_CATEGORIES);
    setSort("default");
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F6F8] text-[#19202B]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#19202B]">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#FF8B14]/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8B14]">
                <span className="h-[2px] w-8 bg-[#FF8B14]" />
                VIVAFIRE · PRODUCT CATALOG
              </div>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Danh mục sản phẩm
                <span className="mt-2 block text-[#FF8B14]">
                  Thiết bị & giải pháp kỹ thuật
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                Khám phá các dòng sản phẩm, thiết bị và vật tư kỹ thuật
                được cung cấp bởi VIVAFIRE. Tra cứu thông tin, mã sản phẩm
                và lựa chọn giải pháp phù hợp với nhu cầu của doanh nghiệp.
              </p>

              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-3xl font-bold text-white">
                    {products.length}
                    <span className="text-[#FF8B14]">+</span>
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Sản phẩm trong danh mục
                  </p>
                </div>

                <div className="h-12 w-px bg-white/15" />

                <div>
                  <p className="text-3xl font-bold text-white">
                    {categoryOptions.length - 1}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Nhóm sản phẩm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          {/* TITLE */}
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF8B14]">
              Product collection
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#19202B] sm:text-3xl">
              Sản phẩm của chúng tôi
            </h2>
            <p className="mt-2 text-sm text-[#5B6472]">
              Tìm kiếm và lựa chọn sản phẩm theo nhu cầu của bạn.
            </p>
          </div>

          {/* SEARCH & FILTER */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_230px]">
              {/* SEARCH */}
              <div>
                <label
                  htmlFor="product-search"
                  className="mb-2 block text-sm font-semibold text-[#19202B]"
                >
                  Tìm kiếm sản phẩm
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B929C]"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>

                  <input
                    id="product-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Nhập tên, mã sản phẩm, model..."
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#F5F6F8] pl-12 pr-4 text-sm text-[#19202B] outline-none transition placeholder:text-gray-400 focus:border-[#FF8B14] focus:bg-white focus:ring-2 focus:ring-[#FF8B14]/15"
                  />
                </div>
              </div>

              {/* SORT */}
              <div>
                <label
                  htmlFor="product-sort"
                  className="mb-2 block text-sm font-semibold text-[#19202B]"
                >
                  Sắp xếp
                </label>

                <select
                  id="product-sort"
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value as SortOption)
                  }
                  className="h-12 w-full rounded-xl border border-gray-200 bg-[#F5F6F8] px-4 text-sm text-[#19202B] outline-none transition focus:border-[#FF8B14] focus:ring-2 focus:ring-[#FF8B14]/15"
                >
                  <option value="default">Mặc định</option>
                  <option value="name-asc">Tên A - Z</option>
                  <option value="name-desc">Tên Z - A</option>
                </select>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#19202B]">
                  Danh mục sản phẩm
                </p>

                {hasFilter && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-semibold text-[#FF8B14] transition hover:text-[#19202B]"
                  >
                    Xóa bộ lọc
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => {
                  const active = category === option;

                  const count =
                    option === ALL_CATEGORIES
                      ? products.length
                      : products.filter(
                          (product) => product.category === option
                        ).length;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCategory(option)}
                      aria-pressed={active}
                      className={`rounded-lg border px-4 py-2.5 text-sm transition duration-200 ${
                        active
                          ? "border-[#19202B] bg-[#19202B] font-semibold text-white shadow-sm"
                          : "border-gray-200 bg-white text-[#5B6472] hover:border-[#FF8B14] hover:text-[#19202B]"
                      }`}
                    >
                      {option}
                      <span
                        className={`ml-2 text-xs ${
                          active ? "text-[#FF8B14]" : "text-gray-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RESULT HEADER */}
          <div className="mb-5 mt-9 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#19202B]">
                {category === ALL_CATEGORIES
                  ? "Tất cả sản phẩm"
                  : category}
              </h3>

              <p className="mt-1 text-sm text-[#5B6472]">
                Hiển thị{" "}
                <span className="font-bold text-[#FF8B14]">
                  {filteredProducts.length}
                </span>{" "}
                / {products.length} sản phẩm
                {search.trim() && (
                  <>
                    {" "}· Từ khóa:{" "}
                    <span className="font-semibold text-[#19202B]">
                      &quot;{search.trim()}&quot;
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#FF8B14]/60 hover:shadow-xl hover:shadow-[#19202B]/5"
                >
                  <Link
                    href={`/san-pham/${product.slug}`}
                    className="flex flex-1 flex-col"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                      <ProductImage
                        images={product.images ?? []}
                        name={product.name}
                      />

                      <span className="absolute left-3 top-3 max-w-[85%] truncate rounded-md bg-[#19202B] px-3 py-1.5 text-[10px] font-semibold text-white">
                        {product.category}
                      </span>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="flex flex-1 flex-col border-t border-gray-100 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF8B14]">
                        {product.brand || "VIVAFIRE"}
                      </p>

                      <h4 className="mt-2 line-clamp-2 min-h-[48px] text-[15px] font-bold leading-6 text-[#19202B] transition group-hover:text-[#E87808]">
                        {product.name}
                      </h4>

                      {product.title &&
                        product.title !== product.name && (
                          <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-[#5B6472]">
                            {product.title}
                          </p>
                        )}

                      <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
                        {product.model && (
                          <div className="flex justify-between gap-2 text-xs">
                            <span className="text-[#8B929C]">Model</span>
                            <span className="text-right font-medium text-[#19202B]">
                              {product.model}
                            </span>
                          </div>
                        )}

                        {product.codes?.length > 0 && (
                          <div className="flex justify-between gap-2 text-xs">
                            <span className="shrink-0 text-[#8B929C]">
                              Mã sản phẩm
                            </span>
                            <span className="line-clamp-1 text-right font-medium text-[#5B6472]">
                              {product.codes.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>

                  {/* ACTION */}
                  <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                    <Link
                      href={`/san-pham/${product.slug}`}
                      className="text-xs font-semibold text-[#19202B] transition hover:text-[#FF8B14]"
                    >
                      Xem chi tiết
                    </Link>

                    <Link
                      href="/lien-he"
                      className="rounded-md bg-[#FF8B14] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#E87808]"
                    >
                      Yêu cầu báo giá
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="rounded-xl border border-gray-200 bg-white px-5 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F6F8] text-[#5B6472]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#19202B]">
                Không tìm thấy sản phẩm
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#5B6472]">
                Không có sản phẩm phù hợp với từ khóa hoặc danh mục
                bạn đã chọn. Vui lòng thử từ khóa khác.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-lg bg-[#19202B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#FF8B14]"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
        </section>

        {/* QUOTE CTA */}
        <section className="bg-[#19202B]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF8B14]">
                Contact & consultation
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                Bạn cần tư vấn hoặc báo giá sản phẩm?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Liên hệ với VIVAFIRE để được hỗ trợ thông tin sản phẩm,
                tư vấn kỹ thuật và nhận báo giá phù hợp.
              </p>
            </div>

            <Link
              href="/lien-he"
              className="inline-flex shrink-0 items-center rounded-lg bg-[#FF8B14] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E87808]"
            >
              Liên hệ ngay
              <span className="ml-3">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
