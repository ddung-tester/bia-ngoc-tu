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
        description="Hội đã gọi đủ, câu chuyện đã sẵn sàng. Chỉ cần mở điểm ghim và để con đường dẫn mình tới một bàn bia mát."
        image="/images/cau-chuyen-v3.webp"
        imageAlt="Lối vào Bia hơi Ngọc Tú khi trời chạng vạng"
      />

      <section className="contact-grid content-pad">
        <div className="contact-copy">
          <p className="section-index">01 / Chỉ đường</p>
          <h2>Hội mình đủ rồi.<br /><em>Tới Ngọc Tú thôi.</em></h2>
          <div className="address-card">
            <span>Địa điểm</span>
            <strong>Bia hơi Ngọc Tú</strong>
            <p>Cuối ngõ THPT Hoài Đức B,<br />An Khánh, Hà Nội</p>
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
          <a href={MAP_URL} target="_blank" rel="noreferrer">Theo đường tới cuộc vui ↗</a>
        </div>
      </section>

      <section className="contact-note content-pad">
        <p><strong>Để Ngọc Tú chừa sẵn một bàn nhé?</strong> Gọi hoặc nhắn Zalo số {PHONE_DISPLAY}. Chỉ vài phút hẹn trước để khi cả hội tới là có thể ngồi gần nhau ngay.</p>
        <Link className="button button-dark" href="/dat-ban">Giữ bàn cho hội <span>→</span></Link>
      </section>
    </>
  );
}
