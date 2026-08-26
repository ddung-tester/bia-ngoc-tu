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
        description="Một nơi để người quen tìm về, người lạ ngồi xuống rồi chẳng mấy chốc cũng chung một câu chuyện."
        image="/images/hero-night.webp"
        imageAlt="Không gian Bia hơi Ngọc Tú đêm đèn sáng, khách đông vui"
      />

      <section className="story-grid content-pad">
        <div>
          <p className="section-index">01 / Chuyện của quán</p>
          <h2>Một lần ghé nhớ.<br /><em>Vài lần thành quen.</em></h2>
        </div>
        <div className="story-copy">
          <p className="story-lead">Ngọc Tú chọn sự gần gũi: không gian thoáng đãng, bia luôn mát và những chiếc bàn đủ gần để cả hội sẻ chia câu chuyện.</p>
          <p>
            Ban ngày, không gian nhẹ nhàng và thoáng đãng. Tối xuống, ánh đèn bật sáng, tiếng cụng cốc hòa cùng câu chuyện làm cả quán thêm rộn ràng.
          </p>
          <p>
            Ghé sau giờ làm, hẹn lại người bạn cũ hay gom đủ một bàn đông vui. Ở Ngọc Tú, khoảnh khắc đáng nhớ nhất là khi câu chuyện còn dài và chẳng ai muốn đứng lên trước.
          </p>
        </div>
      </section>

      <section className="values-row content-pad">
        <article><span>01</span><h3>Dễ ngồi</h3><p>Kéo ghế sát vào bàn, nâng cốc bia lên — câu chuyện tự nhiên bắt đầu.</p></article>
        <article><span>02</span><h3>Dễ vui</h3><p>Một bàn nhỏ để tâm tình, một bàn dài để cả hội cười vang.</p></article>
        <article><span>03</span><h3>Dễ nhớ</h3><p>Ghế vàng, sắc xanh và ánh đèn ấm — những dấu ấn bình dị mà ghé rồi dễ nhớ.</p></article>
      </section>

      <section className="image-story content-pad">
        <div className="image-story-copy">
          <p className="section-index inverse">02 / Khi đêm xuống</p>
          <h2>Đèn vừa lên.<br />Hội mình vừa đủ.</h2>
          <Link className="button button-primary" href="/dat-ban">Chừa một bàn cho hội <span>→</span></Link>
        </div>
        <div className="image-story-photo">
          <Image src="/images/space-social.webp" alt="Sân quán đông khách, đèn lồng sáng rực tại Bia hơi Ngọc Tú" fill sizes="(max-width: 850px) 100vw, 60vw" />
        </div>
      </section>
    </>
  );
}
