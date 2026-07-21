import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Không gian",
  description: "Xem những góc không gian mới của Bia hơi Ngọc Tú tại An Khánh, Hà Nội.",
};

const gallery = [
  { src: "/images/space-social.webp", alt: "Sân quán đông khách buổi tối tại Bia hơi Ngọc Tú", title: "Tối nào cũng vui", caption: "Ghế vàng kín bàn, đèn lồng sáng rực — cái không khí chỉ có ở Ngọc Tú." },
  { src: "/images/hero-night.webp", alt: "Nhóm bạn ngồi nhậu ban đêm tại Bia hơi Ngọc Tú", title: "Hội bạn tụ về", caption: "Câu chuyện dài hơn khi sân thoáng và bia còn đầy cốc." },
  { src: "/images/hero-ngoc-tu-v3.webp", alt: "Hai cốc bia mát trong sân quán", title: "Bia vừa rót", caption: "Cốc lạnh đặt xuống bàn, chờ người bạn đối diện nâng lên." },
  { src: "/images/cau-chuyen-v3.webp", alt: "Lối vào quán khi chiều xuống", title: "Quán chờ khách", caption: "Khoảng sân lên đèn, bàn ghế sẵn sàng cho cuộc hẹn tối." },
  { src: "/images/dat-ban-v3.webp", alt: "Nhóm bạn cụng bia tại quán", title: "Bàn đang vui", caption: "Câu chuyện rôm rả hơn sau một tiếng cụng cốc." },
  { src: "/images/mon-ngon-v3.webp", alt: "Bàn món nhậu và bia hơi", title: "Mồi lên đủ bàn", caption: "Món nóng đặt giữa bàn để ai cũng tiện gắp." },
] as const;

export default function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="Bộ ảnh"
        title="Không gian"
        accent="rất Ngọc Tú."
        description="Ghế vàng, sân xanh, đèn sáng. Mỗi góc một vẻ, nhưng đều có cái không khí rất dễ ngồi lâu."
        image="/images/hero-ngoc-tu-v3.webp"
        imageAlt="Hai cốc bia mát trong không gian Bia hơi Ngọc Tú"
      />

      <section className="gallery-intro content-pad">
        <p className="section-index">01 / Tham quan</p>
        <h2>Một không gian.<br /><em>Nhiều góc nhìn.</em></h2>
        <p>Bộ ảnh gồm ảnh mới bạn cung cấp và những khung cảnh AI được tạo riêng theo không khí của quán.</p>
      </section>

      <section className="gallery-grid content-pad">
        {gallery.map((item, index) => (
          <figure className={`gallery-card gallery-card-${index + 1}`} key={item.src}>
            <div className="gallery-image">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 55vw" />
            </div>
            <figcaption><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.caption}</p></div></figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
