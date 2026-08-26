import Image from "next/image";
import Link from "next/link";
import { BookingPlanner } from "@/components/BookingPlanner";
import { MenuGrid } from "@/components/MenuGrid";
import { MAP_EMBED_URL, MAP_URL, PHONE_DISPLAY, PHONE_URL, ZALO_URL } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" id="home">
        <Image
          className="home-hero-image"
          src="/images/background-hero.webp"
          alt="Không gian Bia hơi Ngọc Tú buổi tối"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-copy">
          <p className="eyebrow"><span>Bia hơi</span> Ngọc Tú • An Khánh</p>
          <h1>Bia mát rồi.<em>Tới thôi.</em></h1>
          <p className="hero-lead">Gọi thêm đĩa mồi, kéo ghế ngồi sát lại. Một buổi tối vui ở Ngọc Tú chỉ cần có thế.</p>
          <p className="location-line"><i aria-hidden="true" /> Cuối ngõ THPT Hoài Đức B, An Khánh, Hà Nội</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#dat-ban">Đặt bàn ngay <span>↓</span></a>
            <a className="text-link" href={MAP_URL} target="_blank" rel="noreferrer">Xem đường đi ↗</a>
          </div>
        </div>
        <div className="image-note">Ảnh không gian mới • Bia hơi Ngọc Tú</div>
      </section>

      <section className="marquee" aria-label="Đặc trưng không gian">
        <div><span>Bia mát</span><b>•</b><span>Mồi nóng</span><b>•</b><span>Bàn rộng</span><b>•</b><span>Chuyện dài</span><b>•</b></div>
      </section>

      <section className="home-intro content-pad" id="gioi-thieu">
        <div>
          <p className="section-index">01 / Giới thiệu</p>
          <h2>Ngồi ngoài sân.<br /><em>Gió mát hơn.</em></h2>
        </div>
        <div className="home-intro-copy">
          <p>
            Chiều xuống, đèn bật lên, ghế vàng kín dần. Người ta ghé Ngọc Tú vì một cốc bia mát, rồi thường ngồi lâu hơn vì câu chuyện đang vui.
          </p>
          <Link className="underlined-link" href="/gioi-thieu">Đọc câu chuyện quán <span>→</span></Link>
        </div>
      </section>

      <section className="feature-split" id="khong-gian">
        <div className="feature-image-wrap">
          <Image src="/images/mon-ngon-v3.webp" alt="Bàn món nhậu và bia mát tại Bia hơi Ngọc Tú" fill sizes="(max-width: 850px) 100vw, 58vw" />
        </div>
        <div className="feature-copy">
          <p className="section-index inverse">02 / Trên bàn</p>
          <h2>Mồi lên nóng.<br />Bia rót đầy.</h2>
          <p>Món để cả bàn cùng gắp, bia để cả hội cùng nâng. Kèo tối nay cứ để Ngọc Tú lo chỗ ngồi.</p>
          <Link className="button button-dark" href="/mon-ngon">Xem món ngon <span>→</span></Link>
        </div>
      </section>

      <section className="landing-menu content-pad" id="thuc-don">
        <div className="landing-section-heading">
          <div>
            <p className="section-index inverse">03 / Thực đơn mẫu</p>
            <h2>Chọn món trước.<br /><em>Đến bàn sau.</em></h2>
          </div>
        </div>
        <MenuGrid />
      </section>

      <section className="landing-booking content-pad" id="dat-ban">
        <div className="landing-booking-copy">
          <p className="section-index inverse">04 / Đặt bàn</p>
          <h2>Chốt giờ tới.<br /><em>Ngọc Tú giữ bàn.</em></h2>
          <p>Điền tên, số người và giờ tới. Sau đó gọi trực tiếp hoặc sao chép lời nhắn để gửi qua Zalo.</p>
          <div className="booking-direct-contact">
            <a href={PHONE_URL}><small>Gọi đặt bàn</small><strong>{PHONE_DISPLAY}</strong></a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer"><small>Nhắn qua</small><strong>Zalo ↗</strong></a>
          </div>
        </div>
        <BookingPlanner />
      </section>

      <section className="home-location content-pad" id="lien-he">
        <div className="real-map-wrap">
          <iframe
            src={MAP_EMBED_URL}
            title="Google Maps - Bia hơi Ngọc Tú"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="location-copy">
          <p className="section-index">05 / Tìm đến quán</p>
          <h2>Đường tới quán.<br /><em>Đã có Maps lo.</em></h2>
          <p>Quán ở cuối ngõ THPT Hoài Đức B, An Khánh. Bấm vào điểm ghim, đi theo chỉ dẫn là tới đúng Bia hơi Ngọc Tú.</p>
          <a className="button button-primary" href={MAP_URL} target="_blank" rel="noreferrer">Mở Google Maps <span>↗</span></a>
        </div>
      </section>
    </>
  );
}
