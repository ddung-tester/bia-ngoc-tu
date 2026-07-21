import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu không gian và tinh thần của Bia hơi Ngọc Tú tại An Khánh, Hà Nội.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Câu chuyện"
        title="Bia hơi"
        accent="Ngọc Tú."
        description="Một quán bia sân vườn để người quen ghé lại, người lạ ngồi một lúc rồi cũng thành quen."
        image="/images/hero-night.webp"
        imageAlt="Không gian Bia hơi Ngọc Tú đêm đèn sáng, khách đông vui"
      />

      <section className="story-grid content-pad">
        <div>
          <p className="section-index">01 / Nhận diện</p>
          <h2>Nhìn là nhớ.<br /><em>Ngồi là quen.</em></h2>
        </div>
        <div className="story-copy">
          <p className="story-lead">Ngọc Tú không cần sang trọng. Chỉ cần sân thoáng, bia đủ mát và một chiếc bàn vừa đủ cho cả hội.</p>
          <p>
            Ban ngày là khoảng sân xanh yên ả. Tối đến, đèn sáng, chong chóng lên màu, tiếng cụng cốc và chuyện trò làm cả khu sân rộn lên.
          </p>
          <p>
            Có thể ghé sau giờ làm, hẹn bạn cũ, ngồi cùng gia đình hay gom một bàn đông người. Ở đây, vui nhất vẫn là lúc chẳng ai vội về.
          </p>
        </div>
      </section>

      <section className="values-row content-pad">
        <article><span>01</span><h3>Dễ ngồi</h3><p>Kéo ghế vào bàn, gọi cốc bia rồi cứ thế bắt đầu câu chuyện.</p></article>
        <article><span>02</span><h3>Dễ vui</h3><p>Không gian mở, bàn rộng, hợp cả cuộc hẹn nhỏ lẫn một hội đông.</p></article>
        <article><span>03</span><h3>Dễ nhớ</h3><p>Ghế vàng, sân xanh và những dải chong chóng sáng lên khi trời tối.</p></article>
      </section>

      <section className="image-story content-pad">
        <div className="image-story-copy">
          <p className="section-index inverse">02 / Khi đêm xuống</p>
          <h2>Đèn vừa sáng.<br />Bạn vừa tới.</h2>
          <Link className="button button-primary" href="/dat-ban">Giữ một bàn <span>→</span></Link>
        </div>
        <div className="image-story-photo">
          <Image src="/images/space-social.webp" alt="Sân quán đông khách, đèn lồng sáng rực tại Bia hơi Ngọc Tú" fill sizes="(max-width: 850px) 100vw, 60vw" />
        </div>
      </section>
    </>
  );
}
