"use client";

import { FormEvent, useState } from "react";
import { PHONE_DISPLAY, PHONE_URL, ZALO_URL } from "./SiteHeader";

export function BookingPlanner() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function createMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");
    const guests = String(data.get("guests") || "");
    const note = String(data.get("note") || "").trim();

    setMessage(
      `Chào Bia hơi Ngọc Tú, mình là ${name}. Mình muốn giữ bàn cho ${guests} người lúc ${time}, ngày ${date}. Số liên hệ: ${phone}.${note ? ` Ghi chú: ${note}` : ""}`,
    );
    setCopied(false);
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  return (
    <div className="booking-panel">
      <form className="booking-form" onSubmit={createMessage}>
        <label>
          Tên người đặt
          <input name="name" placeholder="Ví dụ: Anh Minh" required />
        </label>
        <label>
          Số điện thoại
          <input name="phone" type="tel" inputMode="tel" placeholder="Số để quán gọi lại" required />
        </label>
        <label>
          Ngày tới
          <input name="date" type="date" required />
        </label>
        <label>
          Giờ tới
          <input name="time" type="time" required />
        </label>
        <label>
          Số người
          <input name="guests" type="number" min="1" max="100" placeholder="6" required />
        </label>
        <label className="booking-note-field">
          Nhắn thêm cho quán
          <textarea name="note" rows={4} placeholder="Cần bàn ngoài sân, có trẻ nhỏ, tổ chức sinh nhật..." />
        </label>
        <button className="button button-primary booking-submit" type="submit">Tạo lời nhắn đặt bàn <span>→</span></button>
      </form>

      {message ? (
        <div className="booking-result" aria-live="polite">
          <p className="section-index inverse">Lời nhắn đã sẵn sàng</p>
          <p>{message}</p>
          <button className="button button-dark" type="button" onClick={copyMessage}>
            {copied ? "Đã sao chép" : "Sao chép lời nhắn"} <span>{copied ? "✓" : "↗"}</span>
          </button>
          <div className="booking-contact-actions">
            <a href={PHONE_URL}>Gọi {PHONE_DISPLAY}</a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer">Mở Zalo ↗</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
