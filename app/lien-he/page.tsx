
"use client";

import { useEffect, useState } from "react";

export default function LienHePage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    quantity: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product) {
      setForm((prev) => ({
        ...prev,
        product: product,
      }));
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            INTES · Contact
          </p>

          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Liên hệ & Yêu cầu báo giá
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Gửi thông tin nhu cầu của bạn để đội ngũ INTES có thể tiếp nhận
            và tư vấn sản phẩm, giải pháp phù hợp.
          </p>
        </div>
      </section>

      {/* Nội dung */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Thông tin liên hệ */}
          <aside className="rounded-2xl bg-blue-950 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-bold">
              Kết nối với INTES
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Bạn cần tư vấn thiết bị, giải pháp kỹ thuật hoặc yêu cầu
              báo giá cho dự án? Hãy gửi thông tin qua biểu mẫu.
            </p>

            <div className="mt-9 space-y-6">
              <div>
                <p className="text-sm text-blue-200">Nội dung hỗ trợ</p>
                <p className="mt-1 font-semibold">
                  Tư vấn sản phẩm và giải pháp
                </p>
              </div>

              <div>
                <p className="text-sm text-blue-200">Yêu cầu báo giá</p>
                <p className="mt-1 font-semibold">
                  Thiết bị, vật tư và dự án
                </p>
              </div>

              <div>
                <p className="text-sm text-blue-200">Phương thức liên hệ</p>
                <p className="mt-1 font-semibold">
                  Điện thoại / Email
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm leading-6 text-blue-100">
                Lưu ý: Đây là giao diện demo. Hãy cập nhật thông tin liên
                hệ chính thức của doanh nghiệp trước khi đưa website vào
                sử dụng.
              </p>
            </div>
          </aside>

          {/* Form báo giá */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <h2 className="text-2xl font-bold text-slate-900">
              Gửi yêu cầu báo giá
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Vui lòng điền các thông tin có dấu * để hoàn tất biểu mẫu.
            </p>

            {submitted ? (
              <div
                className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6"
                role="status"
              >
                <div className="text-lg font-bold text-green-800">
                  Đã ghi nhận thao tác gửi biểu mẫu!
                </div>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  Đây là bản demo nên thông tin chưa được gửi đến email
                  hoặc lưu vào cơ sở dữ liệu.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
                >
                  Quay lại biểu mẫu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Họ và tên *
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Nhập họ và tên"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-medium">
                    Công ty
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Tên công ty"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-medium">
                    Số điện thoại *
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="Nhập số điện thoại"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-medium">
                    Email
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="email@congty.com"
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Sản phẩm cần báo giá
                    <input
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      placeholder="Tên hoặc mã sản phẩm"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-medium">
                    Số lượng dự kiến
                    <input
                      name="quantity"
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium">
                  Nội dung yêu cầu *
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Mô tả nhu cầu, thông số hoặc yêu cầu của dự án..."
                    className={inputClass}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  Gửi yêu cầu báo giá →
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  Biểu mẫu hiện chỉ phục vụ trình diễn giao diện, chưa gửi
                  dữ liệu đến hệ thống thực tế.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
    