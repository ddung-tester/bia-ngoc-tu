import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, accent, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image className="page-hero-image" src={image} alt={imageAlt} fill priority sizes="100vw" />
      <div className="page-hero-overlay" />
      <div className="page-hero-copy">
        <p className="eyebrow"><span>{eyebrow}</span> Bia hơi Ngọc Tú</p>
        <h1>{title}<em>{accent}</em></h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
