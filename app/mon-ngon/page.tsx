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
        description="Một bàn ngon không cần cầu kỳ: có món để gắp chung, có bia mát và có đủ người mình muốn gặp."
        image="/images/mon-ngon-v3.webp"
        imageAlt="Bàn món nhậu nóng và bia mát tại Bia hơi Ngọc Tú"
      />

      <section className="food-intro content-pad">
        <div>
          <p className="section-index">01 / Gọi cho cả bàn</p>
          <h2>Ăn cùng nhau.<br /><em>Vui lâu hơn.</em></h2>
        </div>
        <div>
          <p className="food-lead">Mỗi người thích một món, nhưng ngon nhất vẫn là mấy đĩa đặt giữa bàn để cả hội cùng gắp.</p>
          <p>Thực đơn và giá chính thức đang chờ quán xác nhận. Phần dưới là cách gợi ý gọi món cho một bàn bia, không phải danh sách món bán cố định.</p>
        </div>
      </section>

      <section className="menu-page-grid content-pad">
        <div className="sample-badge">Menu và giá mẫu • Có thể chỉnh sửa sau</div>
        <MenuGrid />
      </section>

      <section className="food-feature">
        <div className="food-feature-photo">
          <Image src="/images/hero-ngoc-tu-v3.webp" alt="Hai cốc bia mát chờ trên bàn" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="food-feature-copy">
          <p className="section-index inverse">02 / Hẹn bàn</p>
          <h2>Bàn có thể thiếu món.<br />Đừng thiếu người.</h2>
          <p>Chốt số người và giờ tới trước, phần còn lại cứ để cuộc vui tự nhiên bắt đầu.</p>
          <Link className="button button-primary" href="/#dat-ban">Đặt bàn cho hội <span>→</span></Link>
        </div>
      </section>
    </>
  );
}
