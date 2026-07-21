"use client";

import { FormEvent } from "react";
import { ZALO_URL } from "./SiteHeader";

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

    const message = `Chào Bia hơi Ngọc Tú, mình là ${name}. Mình muốn đặt bàn ngày ${dateFormatted}. Số liên hệ: ${phone}.${note ? ` Ghi chú: ${note}` : ""}`;

    window.open(`${ZALO_URL}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
  }

  return (
    <div className="booking-panel">
      <form className="booking-form" onSubmit={openZalo}>
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
        <label className="booking-note-field">
          Nhắn thêm cho quán
          <textarea name="note" rows={3} placeholder="Cần bàn ngoài sân, có trẻ nhỏ, tổ chức sinh nhật..." />
        </label>
        <button className="button button-primary booking-submit" type="submit">
          Đặt bàn qua Zalo <span>↗</span>
        </button>
      </form>
    </div>
  );
}
