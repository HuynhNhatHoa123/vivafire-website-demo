"use client";

import { useEffect, useState, type FormEvent, type ChangeEvent } from "react";
import Header from "@/components/Header";

const ORANGE = "#F58220";
const DARK = "#20242B";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILES = ".pdf,.xlsx,.xls,.dwg,.zip";

export default function LienHePage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const service = params.get("need");

    if (product) {
      setNeed("Báo giá thiết bị");
      setMessage(`Tôi quan tâm đến sản phẩm: ${product}\\n\\nNội dung yêu cầu: `);
    } else if (service) {
      const normalized = service.toLowerCase();
      if (normalized.includes("thiết kế")) setNeed("Tư vấn thiết kế");
      else if (normalized.includes("bảo trì")) setNeed("Bảo trì – nghiệm thu");
      else if (normalized.includes("thi công")) setNeed("Thi công lắp đặt");
      else setNeed("Khác");
    }
  }, []);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFileError("");

    if (!selected) {
      setFile(null);
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setFileError("Tệp vượt quá dung lượng tối đa 10 MB. Vui lòng chọn tệp khác.");
      setFile(null);
      e.target.value = "";
      return;
    }

    const allowed = [".pdf", ".xlsx", ".xls", ".dwg", ".zip"];
    const extension = selected.name.slice(selected.name.lastIndexOf(".")).toLowerCase();
    if (!allowed.includes(extension)) {
      setFileError("Định dạng chưa được hỗ trợ. Vui lòng chọn PDF, XLSX, XLS, DWG hoặc ZIP.");
      setFile(null);
      e.target.value = "";
      return;
    }

    setFile(selected);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F7F7F6]">
      <Header />

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: ORANGE }}>
            VIVAFIRE · CONTACT
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: DARK }}>
            LIÊN HỆ VIVAFIRE
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Gửi thông tin dự án, danh mục thiết bị hoặc hồ sơ kỹ thuật.
            VIVAFIRE phản hồi trong vòng 24h.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-14">
        {/* Cột trái: thông tin doanh nghiệp và bản đồ */}
        <div className="space-y-7">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="mb-5 h-1 w-14 rounded-full" style={{ backgroundColor: ORANGE }} />
            <h2 className="text-xl font-bold" style={{ color: DARK }}>Thông tin doanh nghiệp</h2>
            <div className="mt-5">
              <p className="text-sm font-bold leading-6" style={{ color: DARK }}>
                CÔNG TY CỔ PHẦN DỊCH VỤ CÔNG NGHỆ VIVAFIRE
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                VIVAFIRE TECHNOLOGY SERVICES JOINT STOCK COMPANY
              </p>
            </div>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Địa chỉ</p>
                <p className="leading-6 text-gray-700">
                  Văn phòng giao dịch: VIVA UNITY HOLDING, 27/4 Trường Chinh,
                  Phường Đông Hưng Thuận, Thành Phố Hồ Chí Minh
                </p>
              </div>
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Điện thoại bàn</p>
                <a href="tel:02838832345" className="text-gray-700 transition hover:text-[#F58220]">
                  028 3883 2345
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Hotline</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+84948466606" className="text-gray-700 transition hover:text-[#F58220]">(+84) 948 466 606</a>
                  <a href="tel:+84357888246" className="text-gray-700 transition hover:text-[#F58220]">(+84) 35 788 8246</a>
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Email</p>
                <a href="mailto:commercial@vivafires.com" className="break-all text-gray-700 transition hover:text-[#F58220]">
                  commercial@vivafires.com
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Website</p>
                <a href="https://www.vivafire.vn" target="_blank" rel="noreferrer" className="text-gray-700 transition hover:text-[#F58220]">
                  www.vivafire.vn
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold" style={{ color: ORANGE }}>Mã số thuế</p>
                <p className="text-gray-700">0316732553</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:+84948466606" className="rounded-lg px-5 py-3 text-sm font-bold text-white transition hover:opacity-90" style={{ backgroundColor: ORANGE }}>
                Gọi ngay
              </a>
              <a href="mailto:commercial@vivafires.com" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#F58220] hover:text-[#F58220]">
                Gửi email
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="p-5">
              <h2 className="font-bold" style={{ color: DARK }}>Vị trí trên bản đồ</h2>
              <p className="mt-1 text-sm text-gray-500">
                94 Lê Thị Ánh, Phường Đông Hưng Thuận, TP. Hồ Chí Minh
              </p>
            </div>
            <iframe
              title="Bản đồ VIVAFIRE"
              src="https://www.google.com/maps?q=94%20L%C3%AA%20Th%E1%BB%8B%20%C3%81nh%2C%20Ph%C6%B0%E1%BB%9Dng%20%C4%90%C3%B4ng%20H%C6%B0ng%20Thu%E1%BA%ADn%2C%20TP.HCM&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-gray-100 px-5 py-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=94%20Le%20Thi%20Anh%2C%20Dong%20Hung%20Thuan%2C%20Ho%20Chi%20Minh"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold hover:underline"
                style={{ color: ORANGE }}
              >
                Xem chỉ đường trên Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Cột phải: biểu mẫu */}
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="py-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold" style={{ backgroundColor: "#FFF1E5", color: ORANGE }}>
                ✓
              </div>
              <h2 className="text-2xl font-bold" style={{ color: DARK }}>Cảm ơn bạn!</h2>
              <p className="mt-3 leading-7 text-gray-600">
                VIVAFIRE đã nhận yêu cầu trên giao diện demo và sẽ liên hệ lại sớm.
                Biểu mẫu hiện chưa kết nối hệ thống gửi email hoặc lưu dữ liệu thực tế.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg px-6 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: ORANGE }}
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
                BUSINESS INQUIRY
              </p>
              <h2 className="text-2xl font-bold" style={{ color: DARK }}>GỬI YÊU CẦU</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Vui lòng điền thông tin bên dưới. Các trường có dấu * là bắt buộc.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-gray-700">Họ và tên *</label>
                    <input id="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Họ và tên người liên hệ" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">Số điện thoại *</label>
                    <input id="phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại liên hệ" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-gray-700">Công ty</label>
                    <input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Tên công ty / đơn vị" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email của bạn" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100" />
                  </div>
                </div>

                <div>
                  <label htmlFor="need" className="mb-2 block text-sm font-semibold text-gray-700">Nhu cầu</label>
                  <select id="need" value={need} onChange={(e) => setNeed(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100">
                    <option value="">-- Chọn nhu cầu --</option>
                    <option value="Báo giá thiết bị">Báo giá thiết bị</option>
                    <option value="Tư vấn thiết kế">Tư vấn thiết kế</option>
                    <option value="Thi công lắp đặt">Thi công lắp đặt</option>
                    <option value="Bảo trì – nghiệm thu">Bảo trì – nghiệm thu</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">Nội dung yêu cầu</label>
                  <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mô tả công trình, danh mục thiết bị hoặc nội dung cần VIVAFIRE hỗ trợ..." className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-orange-100" />
                </div>

                <div>
                  <label htmlFor="attachment" className="mb-2 block text-sm font-semibold text-gray-700">Đính kèm hồ sơ</label>
                  <input id="attachment" type="file" accept={ACCEPTED_FILES} onChange={handleFileChange} className="block w-full rounded-lg border border-gray-200 bg-white text-sm text-gray-600 file:mr-4 file:border-0 file:bg-[#FFF1E5] file:px-4 file:py-3 file:font-semibold file:text-[#C85E0A] hover:file:bg-orange-100" />
                  <p className="mt-2 text-xs leading-5 text-gray-500">Hỗ trợ PDF, XLSX, XLS, DWG, ZIP · Tối đa 10 MB.</p>
                  {file && <p className="mt-2 text-xs text-gray-600">Tệp đã chọn: {file.name}</p>}
                  {fileError && <p className="mt-2 text-xs text-red-600">{fileError}</p>}
                </div>

                <button type="submit" className="w-full rounded-lg px-7 py-4 text-sm font-bold tracking-wide text-white transition hover:opacity-90 sm:w-auto" style={{ backgroundColor: ORANGE }}>
                  GỬI YÊU CẦU
                </button>
                <p className="text-xs leading-5 text-gray-400">
                  Thông tin của bạn được dùng để VIVAFIRE liên hệ tư vấn. Biểu mẫu hiện là bản giao diện demo, chưa gửi email hoặc tải tệp lên máy chủ.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
