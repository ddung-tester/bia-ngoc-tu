import type { Metadata } from "next";
import Link from "next/link";
import { MAP_EMBED_URL, MAP_URL, PHONE_DISPLAY, PHONE_URL, ZALO_URL } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Liên hệ và chỉ đường",
  description: "Điểm ghim Google Maps và thông tin vị trí của Bia hơi Ngọc Tú tại An Khánh, Hà Nội.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Vị trí"
        title="Hẹn nhau"
        accent="ở Ngọc Tú."
        description="Hẹn được người rồi thì chỉ còn việc tới quán. Mở đúng điểm ghim dưới đây là tới Ngọc Tú."
        image="/images/cau-chuyen-v3.webp"
        imageAlt="Lối vào Bia hơi Ngọc Tú khi trời chạng vạng"
      />

      <section className="contact-grid content-pad">
        <div className="contact-copy">
          <p className="section-index">01 / Chỉ đường</p>
          <h2>Đã lên kèo.<br /><em>Đi thôi.</em></h2>
          <div className="address-card">
            <span>Địa điểm</span>
            <strong>Bia hơi Ngọc Tú</strong>
            <p>Khu vực Phố Nam Ngãi Cầu,<br />An Khánh, Hà Nội</p>
            <small>Tọa độ điểm ghim: 20.9882557, 105.724623</small>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={PHONE_URL}>Gọi {PHONE_DISPLAY} <span>☎</span></a>
            <a className="button button-dark" href={ZALO_URL} target="_blank" rel="noreferrer">Nhắn Zalo <span>↗</span></a>
          </div>
        </div>

        <div className="real-map-wrap contact-real-map">
          <iframe
            src={MAP_EMBED_URL}
            title="Google Maps - vị trí Bia hơi Ngọc Tú"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={MAP_URL} target="_blank" rel="noreferrer">Mở chỉ đường trên Google Maps ↗</a>
        </div>
      </section>

      <section className="contact-note content-pad">
        <p><strong>Muốn giữ bàn trước?</strong> Gọi hoặc nhắn Zalo số {PHONE_DISPLAY}. Bạn cũng có thể sang trang Đặt bàn để chuẩn bị sẵn tên, giờ tới và số người.</p>
        <Link className="button button-dark" href="/dat-ban">Đặt bàn <span>→</span></Link>
      </section>
    </>
  );
}
