
"use client";

import { useEffect, useState, type FormEvent } from "react";
import Header from "@/components/Header";

const ORANGE = "#FF8B14";
const DARK = "#19202B";

export default function LienHePage() {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product) {
      setMessage(`Tôi quan tâm đến sản phẩm: ${product}\n\nNội dung yêu cầu: `);
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Tiêu đề */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            VIVAFIRE · BUSINESS INQUIRY
          </p>

          <h1 className="text-3xl font-bold text-[#19202B] md:text-4xl">
            Gửi yêu cầu tư vấn
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Quý doanh nghiệp vui lòng để lại thông tin và nhu cầu của mình.
            Đội ngũ VIVAFIRE sẽ tiếp nhận và liên hệ tư vấn trong thời gian sớm nhất.
          </p>
        </div>
      </section>

      {/* Nội dung */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[1fr_320px] md:py-16">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8">
              <h2 className="text-xl font-bold text-green-800">
                Cảm ơn quý doanh nghiệp!
              </h2>
              <p className="mt-3 leading-7 text-green-700">
                Yêu cầu của quý khách đã được ghi nhận trên giao diện demo.
                VIVAFIRE sẽ liên hệ sau khi biểu mẫu được kết nối với hệ thống tiếp nhận thực tế.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-green-800 underline"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <>
              <h2 className="mb-2 text-xl font-bold text-[#19202B]">
                Thông tin liên hệ
              </h2>
              <p className="mb-8 text-sm text-gray-500">
                Các trường có dấu * là thông tin bắt buộc.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Tên công ty *
                    </label>
                    <input
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Tên doanh nghiệp"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF8B14]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Người liên hệ *
                    </label>
                    <input
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Họ và tên"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF8B14]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Số điện thoại *
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Số điện thoại liên hệ"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF8B14]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email doanh nghiệp"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF8B14]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Nội dung yêu cầu *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Quý doanh nghiệp đang cần tư vấn sản phẩm, giải pháp hoặc dịch vụ nào? Vui lòng mô tả nhu cầu..."
                    className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#FF8B14]"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg px-8 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  GỬI YÊU CẦU
                </button>
              </form>
            </>
          )}
        </div>

        {/* Thông tin doanh nghiệp */}
        <aside className="h-fit rounded-xl bg-[#19202B] p-7 text-white">
          <div className="mb-6">
            <div className="mb-3 h-1 w-12" style={{ backgroundColor: ORANGE }} />
            <h2 className="text-xl font-bold">VIVAFIRE</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Công ty Cổ phần Dịch vụ Công nghệ VIVAFIRE
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <div>
              <p className="mb-1 font-semibold" style={{ color: ORANGE }}>
                Địa chỉ
              </p>
              <p className="leading-6 text-gray-300">
                94 Lê Thị Ánh, Phường Đông Hưng Thuận, TP. Hồ Chí Minh
              </p>
            </div>

            <div>
              <p className="mb-1 font-semibold" style={{ color: ORANGE }}>
                Điện thoại
              </p>
              <a
                href="tel:02838832325"
                className="text-gray-300 hover:text-white"
              >
                028.38832325
              </a>
            </div>

            <div>
              <p className="mb-1 font-semibold" style={{ color: ORANGE }}>
                Email
              </p>
              <a
                href="mailto:commercial@vivafires.com"
                className="break-all text-gray-300 hover:text-white"
              >
                commercial@vivafires.com
              </a>
            </div>

            <div>
              <p className="mb-1 font-semibold" style={{ color: ORANGE }}>
                Website
              </p>
              <a
                href="https://www.vivafire.vn"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                www.vivafire.vn
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-xs leading-6 text-gray-500">
              VIVAFIRE sẵn sàng đồng hành cùng quý doanh nghiệp trong các
              giải pháp và dịch vụ kỹ thuật.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
