import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuGrid } from "@/components/MenuGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Món ngon",
  description: "Không khí bàn bia và những gợi ý gọi món tại Bia hơi Ngọc Tú.",
};

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Món ngon"
        title="Mồi lên nóng."
        accent="Bia rót đầy."
        description="Một bàn ngon chẳng cần cầu kỳ: món nóng để cùng gắp, bia mát để cùng nâng và quanh bàn là những người mình muốn gặp."
        image="/images/mon-ngon-v3.webp"
        imageAlt="Bàn món nhậu nóng và bia mát tại Bia hơi Ngọc Tú"
      />

      <section className="food-intro content-pad">
        <div>
          <p className="section-index">01 / Gọi cho cả bàn</p>
          <h2>Gắp chung một món.<br /><em>Kể thêm một chuyện.</em></h2>
        </div>
        <div>
          <p className="food-lead">Mỗi người một khẩu vị, nhưng món ngon nhất vẫn là món đặt giữa bàn — để cả hội cùng gắp, cùng mời và cùng cười.</p>
        </div>
      </section>

      <section className="menu-page-grid content-pad">
        <MenuGrid />
      </section>

      <section className="food-feature">
        <div className="food-feature-photo">
          <Image src="/images/hero-ngoc-tu-v3.webp" alt="Hai cốc bia mát chờ trên bàn" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="food-feature-copy">
          <p className="section-index inverse">02 / Hẹn bàn</p>
          <h2>Món có thể gọi thêm.<br />Bạn bè phải gọi đủ.</h2>
          <p>Gọi đủ người mình quý, chọn một ngày gặp nhau. Khi cốc bia đầu tiên được nâng lên, cuộc vui sẽ tự biết cách bắt đầu.</p>
          <Link className="button button-primary" href="/#dat-ban">Gọi hội mình tới <span>→</span></Link>
        </div>
      </section>
    </>
  );
}
