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
          <h1>Bia đã mát.<em>Hội mình tới thôi.</em></h1>
          <p className="hero-lead">Kéo ghế lại gần, gọi thêm đĩa mồi, nâng một cốc bia mát. Chuyện vui tối nay cứ để Ngọc Tú giữ nhịp.</p>
          <p className="location-line"><i aria-hidden="true" /> Cuối ngõ THPT Hoài Đức B, An Khánh, Hà Nội</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#dat-ban">Đặt bàn ngay <span>↓</span></a>
            <a className="text-link" href={MAP_URL} target="_blank" rel="noreferrer">Xem đường đi ↗</a>
          </div>
        </div>
        <div className="image-note">Một góc Ngọc Tú • Chờ hội mình tới</div>
      </section>

      <section className="marquee" aria-label="Đặc trưng không gian">
        <div><span>Bia mát</span><b>•</b><span>Mồi nóng</span><b>•</b><span>Bàn rộng</span><b>•</b><span>Chuyện dài</span><b>•</b></div>
      </section>

      <section className="home-intro content-pad" id="gioi-thieu">
        <div>
          <p className="section-index">01 / Giới thiệu</p>
          <h2>Không gian thoáng đãng.<br /><em>Chuyện vui quanh bàn.</em></h2>
        </div>
        <div className="home-intro-copy">
          <p>
            Chiều xuống, ánh đèn vừa lên, những cuộc hẹn cũng bắt đầu. Ghé Ngọc Tú vì cốc bia mát, ở lại vì câu chuyện chưa muốn dừng.
          </p>
          <Link className="underlined-link" href="/gioi-thieu">Ghé nghe chuyện Ngọc Tú <span>→</span></Link>
        </div>
      </section>

      <section className="feature-split" id="khong-gian">
        <div className="feature-image-wrap">
          <Image src="/images/mon-ngon-v3.webp" alt="Bàn món nhậu và bia mát tại Bia hơi Ngọc Tú" fill sizes="(max-width: 850px) 100vw, 58vw" />
        </div>
        <div className="feature-copy">
          <p className="section-index inverse">02 / Trên bàn</p>
          <h2>Mồi vừa lên nóng.<br />Bia đã rót đầy.</h2>
          <p>Món ngon đặt giữa bàn để cùng gắp, bia mát rót đầy để cùng nâng. Chỉ cần đủ mặt, cuộc vui tự khắc bắt đầu.</p>
          <Link className="button button-dark" href="/mon-ngon">Chọn món cho cả hội <span>→</span></Link>
        </div>
      </section>

      <section className="landing-menu content-pad" id="thuc-don">
        <div className="landing-section-heading">
          <div>
            <p className="section-index inverse">03 / Thực đơn</p>
            <h2>Món ngon gọi chung.<br /><em>Niềm vui chia cùng.</em></h2>
          </div>
        </div>
        <MenuGrid />
      </section>

      <section className="landing-booking content-pad" id="dat-ban">
        <div className="landing-booking-copy">
          <p className="section-index inverse">04 / Đặt bàn</p>
          <h2>Hẹn nhau một giờ.<br /><em>Ngọc Tú chờ cả hội.</em></h2>
          <p>Để lại tên, số điện thoại và ngày tới. Một lời nhắn qua Zalo là cả hội đã gần nhau thêm một bước.</p>
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
          <h2>Đường tới Ngọc Tú.<br /><em>Cứ theo niềm vui.</em></h2>
          <p>Cuối ngõ THPT Hoài Đức B, một bàn bia mát đang chờ. Mở điểm ghim, đi theo chỉ dẫn và mang theo cả hội.</p>
          <a className="button button-primary" href={MAP_URL} target="_blank" rel="noreferrer">Mở Google Maps <span>↗</span></a>
        </div>
      </section>
    </>
  );
}
