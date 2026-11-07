"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/data/products";

type Props = { product: CatalogProduct };

export default function ProductDetailClient({ product }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedCode, setSelectedCode] = useState(
    product.codes[0] ?? product.model,
  );

  const gallery = useMemo(() => product.images ?? [], [product.images]);
  const quoteHref = `/lien-he?product=${encodeURIComponent(selectedCode)}&group=${encodeURIComponent(product.slug)}`;
  const detailRows = [
    ["Danh mục", product.category],
    ["Thương hiệu", product.brand],
    ["Mã sản phẩm", product.model],
    ...(product.specification
      ? [["Thông số theo mã hàng", product.specification]]
      : []),
  ];

  return (
    <>
      <div className="border-b border-[#E3E6EB] bg-[#F5F6F8]">
        <div className="mx-auto max-w-7xl px-5 py-5 text-sm text-[#6B7280] lg:px-8">
          <Link href="/" className="transition hover:text-[#E66F00]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="transition hover:text-[#E66F00]">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#19202B]">{product.name}</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        {/* PRODUCT IMAGE GALLERY */}
        <div className="min-w-0">
          <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl border border-[#E3E6EB] bg-[#F5F6F8] sm:min-h-[520px]">
            {gallery.length > 0 ? (
              <Image
                src={gallery[activeImage] ?? gallery[0]}
                alt={`${product.name} – hình ${activeImage + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-5 sm:p-8"
              />
            ) : (
              <div className="px-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl text-[#FF8B14]">
                  ◇
                </div>
                <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                  Hình ảnh sản phẩm đang được cập nhật
                </p>
                <p className="mt-1 text-xs text-[#9AA1AA]">
                  Vui lòng liên hệ để nhận hình ảnh và catalogue.
                </p>
              </div>
            )}
            <span className="absolute left-4 top-4 rounded-lg border border-white/70 bg-white/95 px-4 py-2 text-xs font-bold text-[#19202B] shadow-sm">
              {product.category}
            </span>
            {gallery.length > 1 && (
              <span className="absolute bottom-4 right-4 rounded-full bg-[#19202B]/80 px-3 py-1.5 text-xs font-semibold text-white">
                {activeImage + 1} / {gallery.length}
              </span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
              {gallery.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Xem hình sản phẩm ${index + 1}`}
                  aria-pressed={activeImage === index}
                  className={`relative aspect-square overflow-hidden rounded-xl border bg-[#F5F6F8] transition ${
                    activeImage === index
                      ? "border-[#FF8B14] ring-2 ring-[#FF8B14]/20"
                      : "border-[#E3E6EB] hover:border-[#FFB45C]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} – ảnh ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Hình ảnh thực tế", "Thông số sản phẩm", "Tư vấn & báo giá"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#E3E6EB] px-2 py-4 text-center text-xs font-semibold text-[#5B6472] sm:px-3 sm:text-sm"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="flex min-w-0 flex-col">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">
            Product information
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#19202B] sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-md bg-[#F5F6F8] px-3 py-2 text-[#5B6472]">
              Nhóm mã: <strong className="text-[#19202B]">{product.model}</strong>
            </span>
            <span className="rounded-md bg-[#FFF1E3] px-3 py-2 text-[#A94D00]">
              {product.brand}
            </span>
          </div>

          <p className="mt-7 whitespace-pre-line text-base leading-8 text-[#5B6472]">
            {product.description || "Thông tin giới thiệu đang được cập nhật."}
          </p>

          {/* VARIANT / SKU SELECTOR */}
          {product.codes.length > 0 && (
            <div className="mt-7 rounded-2xl border border-[#E3E6EB] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-[#19202B]">
                  Chọn mã sản phẩm
                </h2>
                <span className="text-xs text-[#8A919C]">
                  {product.codes.length} mã / biến thể
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.codes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    aria-pressed={selectedCode === code}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      selectedCode === code
                        ? "border-[#FF8B14] bg-[#FFF1E3] text-[#A94D00]"
                        : "border-[#E3E6EB] bg-white text-[#5B6472] hover:border-[#FFB45C] hover:text-[#A94D00]"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-[#8A919C]">
                Mã đang chọn: <strong className="text-[#19202B]">{selectedCode}</strong>. Mã này sẽ được đính kèm khi bạn gửi yêu cầu báo giá.
              </p>
            </div>
          )}

          <div className="mt-7 rounded-2xl border border-[#E3E6EB] p-5 sm:p-6">
            <div className="text-sm font-bold text-[#19202B]">
              Bạn cần báo giá sản phẩm này?
            </div>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Chọn đúng mã hàng phía trên, sau đó gửi yêu cầu để đội ngũ phụ trách tiếp nhận và tư vấn.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={quoteHref}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#FF8B14] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#E66F00]"
              >
                Yêu cầu báo giá ↗
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center rounded-lg border border-[#E3E6EB] px-5 py-4 text-sm font-bold text-[#19202B] transition hover:bg-[#F5F6F8]"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#19202B]">Thông tin nổi bật</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 text-sm leading-6 text-[#5B6472]">
                <span className="mt-0.5 text-[#FF8B14]">✓</span>
                <span>Thông tin và mã hàng được tổng hợp theo danh mục sản phẩm.</span>
              </div>
              <div className="flex items-start gap-3 text-sm leading-6 text-[#5B6472]">
                <span className="mt-0.5 text-[#FF8B14]">✓</span>
                <span>Có thể chọn từng mã biến thể trước khi gửi yêu cầu báo giá.</span>
              </div>
              <div className="flex items-start gap-3 text-sm leading-6 text-[#5B6472]">
                <span className="mt-0.5 text-[#FF8B14]">✓</span>
                <span>Thư viện ảnh hiển thị các hình ảnh được liên kết trong file Excel.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="border-y border-[#E3E6EB] bg-[#F5F6F8]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">
                Technical information
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-[#19202B]">
                Thông số & tài liệu
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                Thông tin kỹ thuật dưới đây được lấy từ nội dung Excel. Các thông số chưa có trong nguồn sẽ không tự suy diễn.
              </p>
              {product.source && (
                <div className="mt-6 rounded-xl border border-[#FFD6AD] bg-[#FFF8F1] p-4 text-sm leading-6 text-[#8A4B12]">
                  <strong>Nguồn tham chiếu:</strong>
                  <p className="mt-1">{product.source}</p>
                </div>
              )}
              {product.note && (
                <div className="mt-3 rounded-xl border border-[#E3E6EB] bg-white p-4 text-sm leading-6 text-[#6B7280]">
                  <strong className="text-[#19202B]">Ghi chú:</strong> {product.note}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E3E6EB] bg-white">
              {detailRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid gap-2 px-5 py-4 sm:grid-cols-[190px_1fr] ${
                    index !== detailRows.length - 1 ? "border-b border-[#E3E6EB]" : ""
                  }`}
                >
                  <div className="text-sm text-[#6B7280]">{label}</div>
                  <div className="whitespace-pre-line break-words text-sm font-medium leading-6 text-[#19202B]">
                    {value}
                  </div>
                </div>
              ))}
              {product.generalSpecifications && (
                <div className="border-t border-[#E3E6EB] px-5 py-5">
                  <h3 className="mb-3 text-sm font-bold text-[#19202B]">
                    Thông số chung của dòng sản phẩm
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-7 text-[#5B6472]">
                    {product.generalSpecifications}
                  </p>
                </div>
              )}
              <div className="border-t border-[#E3E6EB] bg-[#F5F6F8] p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-bold text-[#19202B]">Cần catalogue hoặc tài liệu kỹ thuật?</div>
                    <p className="mt-1 text-sm text-[#6B7280]">
                      Gửi yêu cầu kèm mã hàng để được hỗ trợ hồ sơ phù hợp.
                    </p>
                  </div>
                  <Link
                    href={quoteHref}
                    className="rounded-lg border border-[#FFB45C] px-4 py-3 text-center text-sm font-bold text-[#A94D00] transition hover:bg-[#FFF1E3]"
                  >
                    Yêu cầu tài liệu ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-5 rounded-2xl bg-[#19202B] p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold">Cần hỗ trợ lựa chọn thiết bị?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Gửi mã sản phẩm và nhu cầu công trình để trao đổi về cấu hình, tài liệu và phương án báo giá.
            </p>
          </div>
          <Link
            href={quoteHref}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#FF8B14] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E66F00]"
          >
            Liên hệ tư vấn ↗
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/san-pham" className="text-sm font-bold text-[#19202B] transition hover:text-[#E66F00]">
            ← Quay lại danh mục sản phẩm
          </Link>
        </div>
      </section>
    </>
  );
}
