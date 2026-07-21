import type { Metadata } from "next";
import { BookingPlanner } from "@/components/BookingPlanner";
import { PageHero } from "@/components/PageHero";
import { MAP_URL, PHONE_DISPLAY, PHONE_URL, ZALO_URL } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Đặt bàn",
  description: "Chuẩn bị thông tin đặt bàn tại Bia hơi Ngọc Tú, An Khánh, Hà Nội.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Đặt bàn"
        title="Gọi đủ hội."
        accent="Ngọc Tú giữ chỗ."
        description="Chọn ngày, giờ và số người. Một lời nhắn gọn gàng sẽ được chuẩn bị để bạn gửi cho quán."
        image="/images/dat-ban-v3.webp"
        imageAlt="Nhóm bạn cụng bia trong sân Bia hơi Ngọc Tú"
      />

      <section className="booking-section content-pad">
        <div className="booking-heading">
          <p className="section-index inverse">01 / Thông tin bàn</p>
          <h2>Kèo mấy người?<br /><em>Mấy giờ tới?</em></h2>
          <p>Điền một lần để khỏi nhắn qua lại nhiều. Sau đó gọi trực tiếp hoặc sao chép lời nhắn rồi gửi qua Zalo cho quán.</p>
          <div className="booking-direct-contact">
            <a href={PHONE_URL}><small>Gọi đặt bàn</small><strong>{PHONE_DISPLAY}</strong></a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer"><small>Nhắn qua</small><strong>Zalo ↗</strong></a>
          </div>
          <a className="underlined-link booking-map-link" href={MAP_URL} target="_blank" rel="noreferrer">Xem quán trên Google Maps <span>↗</span></a>
        </div>
        <BookingPlanner />
      </section>

      <section className="booking-steps content-pad">
        <article><span>01</span><h3>Chốt người</h3><p>Ước lượng số ghế để quán xếp bàn vừa đủ, không phải ngồi tách hội.</p></article>
        <article><span>02</span><h3>Chốt giờ</h3><p>Báo giờ tới để bàn được giữ đúng lúc, nhất là những buổi đông khách.</p></article>
        <article><span>03</span><h3>Nhắn trước</h3><p>Có sinh nhật, trẻ nhỏ hay muốn ngồi ngoài sân thì cứ ghi rõ cho quán.</p></article>
      </section>
    </>
  );
}
