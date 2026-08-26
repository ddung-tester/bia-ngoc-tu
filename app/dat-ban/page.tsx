import type { Metadata } from "next";
import { BookingPlanner } from "@/components/BookingPlanner";
import { PageHero } from "@/components/PageHero";
import { MAP_URL, PHONE_DISPLAY, PHONE_URL, ZALO_URL } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Đặt bàn",
  description: "Hẹn một bàn vui tại Bia hơi Ngọc Tú, An Khánh, Hà Nội.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Đặt bàn"
        title="Gọi nhau một tiếng."
        accent="Ngọc Tú chờ cả hội."
        description="Chọn một ngày đẹp, để lại lời nhắn. Ngọc Tú sẽ chờ hội mình ghé tới và cùng mở đầu một tối thật vui."
        image="/images/dat-ban-v3.webp"
        imageAlt="Nhóm bạn cụng bia trong sân Bia hơi Ngọc Tú"
      />

      <section className="booking-section content-pad">
        <div className="booking-heading">
          <p className="section-index inverse">01 / Thông tin bàn</p>
          <h2>Hẹn ngày gặp nhau.<br /><em>Giữ bàn cho cả hội.</em></h2>
          <p>Để lại tên, số điện thoại và ngày tới. Một lời nhắn gọn qua Zalo là đủ để cuộc hẹn bắt đầu.</p>
          <div className="booking-direct-contact">
            <a href={PHONE_URL}><small>Gọi đặt bàn</small><strong>{PHONE_DISPLAY}</strong></a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer"><small>Nhắn qua</small><strong>Zalo ↗</strong></a>
          </div>
          <a className="underlined-link booking-map-link" href={MAP_URL} target="_blank" rel="noreferrer">Xem quán trên Google Maps <span>↗</span></a>
        </div>
        <BookingPlanner />
      </section>

      <section className="booking-steps content-pad">
        <article><span>01</span><h3>Chốt người</h3><p>Nhắn trước để quán chuẩn bị một chiếc bàn vừa vặn cho niềm vui của cả hội.</p></article>
        <article><span>02</span><h3>Chốt giờ</h3><p>Chọn ngày ghé quán, để chiếc bàn ấy sẵn sàng khi mọi người cùng tới.</p></article>
        <article><span>03</span><h3>Nhắn trước</h3><p>Có điều gì muốn quán chuẩn bị riêng, cứ nhắn thêm để cuộc hẹn được trọn vẹn hơn.</p></article>
      </section>
    </>
  );
}
