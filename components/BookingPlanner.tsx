"use client";

import { FormEvent } from "react";
import { ZALO_URL } from "./SiteHeader";

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function BookingPlanner() {
  function openZalo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "");
    const note = String(data.get("note") || "").trim();

    const dateFormatted = date
      ? new Date(date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })
      : "";

    const message = `Chào Bia hơi Ngọc Tú, mình là ${name}. Hội mình muốn ghé quán vào ngày ${dateFormatted}. Quán liên hệ mình qua số ${phone} nhé.${note ? ` Nhắn thêm với quán: ${note}` : ""}`;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message).catch(() => fallbackCopy(message));
    } else {
      fallbackCopy(message);
    }

    window.open(ZALO_URL, "_blank", "noreferrer");
  }

  return (
    <div className="booking-panel">
      <form className="booking-form" onSubmit={openZalo}>
        <label>
          Tên người hẹn cả hội
          <input name="name" placeholder="Ví dụ: Anh Minh" required />
        </label>
        <label>
          Số điện thoại
          <input name="phone" type="tel" inputMode="tel" placeholder="Số để Ngọc Tú giữ liên lạc" required />
        </label>
        <label>
          Ngày hội mình gặp nhau
          <input name="date" type="date" required />
        </label>
        <label className="booking-note-field">
          Có gì muốn nhắn riêng?
          <textarea name="note" rows={3} placeholder="Muốn chọn vị trí ngồi, có trẻ nhỏ, tổ chức sinh nhật..." />
        </label>
        <button className="button button-primary booking-submit" type="submit">
          Sao chép lời nhắn và mở Zalo <span>↗</span>
        </button>
        <p className="booking-helper">
          Nội dung đặt bàn sẽ được sao chép. Khi Zalo mở, chọn nhắn tin rồi nhấn giữ ô chat để dán.
        </p>
      </form>
    </div>
  );
}
