import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Không gian",
  description: "Xem những góc không gian mới của Bia hơi Ngọc Tú tại An Khánh, Hà Nội.",
};

const gallery = [
  { src: "/images/space-social.webp", alt: "Sân quán đông khách buổi tối tại Bia hơi Ngọc Tú", title: "Đêm lên, bàn thêm vui", caption: "Ánh đèn vừa sáng, những chiếc ghế vàng đã xích lại gần nhau — một buổi gặp gỡ đáng nhớ lại bắt đầu." },
  { src: "/images/hero-night.webp", alt: "Nhóm bạn ngồi nhậu ban đêm tại Bia hơi Ngọc Tú", title: "Đủ bạn, đủ vui", caption: "Không gian thoáng, cốc còn đầy, câu chuyện của hội mình cứ thế dài thêm." },
  { src: "/images/hero-ngoc-tu-v3.webp", alt: "Hai cốc bia mát trong sân quán", title: "Chạm cốc thôi", caption: "Cốc bia mát vừa đặt xuống, chỉ còn chờ người đối diện cùng nâng lên." },
  { src: "/images/cau-chuyen-v3.webp", alt: "Lối vào quán khi chiều xuống", title: "Đèn lên chờ bạn", caption: "Không gian đã lên đèn, một chiếc bàn vẫn đang chờ cuộc hẹn tối nay." },
  { src: "/images/dat-ban-v3.webp", alt: "Nhóm bạn cụng bia tại quán", title: "Một bàn rộn tiếng cười", caption: "Một tiếng cụng cốc mở đầu, rồi cả bàn chẳng ai ngừng cười." },
  { src: "/images/mon-ngon-v3.webp", alt: "Bàn món nhậu và bia hơi", title: "Món nóng giữa bàn", caption: "Món nóng đặt giữa bàn, để mỗi lần gắp là một lần câu chuyện thêm vui." },
] as const;

export default function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="Bộ ảnh"
        title="Không gian"
        accent="rất Ngọc Tú."
        description="Ghế vàng dưới ánh đèn, không gian rộng và thoáng. Góc nào cũng đủ gần gũi để ngồi xuống rồi quên mất giờ về."
        image="/images/hero-ngoc-tu-v3.webp"
        imageAlt="Hai cốc bia mát trong không gian Bia hơi Ngọc Tú"
      />

      <section className="gallery-intro content-pad">
        <p className="section-index">01 / Tham quan</p>
        <h2>Một không gian.<br /><em>Muôn chuyện vui.</em></h2>
        <p>Ngắm một vòng Ngọc Tú — từ những góc yên bình ban ngày đến khi đèn lên và những chiếc bàn bắt đầu rộn tiếng cười.</p>
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
