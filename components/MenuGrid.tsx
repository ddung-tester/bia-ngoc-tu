import Image from "next/image";

const sampleMenu = [
  {
    name: "Combo nhắm nhanh",
    detail: "Lạc luộc • Đậu lướt ván • Nem chua rán",
    price: "129.000 ₫",
    image: "/images/menu-nham-v4.webp",
  },
  {
    name: "Mực nướng",
    detail: "Nướng thơm • Rau răm • Tương ớt",
    price: "139.000 ₫",
    image: "/images/menu-muc-v4.webp",
  },
  {
    name: "Bò xào cần tỏi",
    detail: "Bò mềm • Cần tây • Hành tây",
    price: "149.000 ₫",
    image: "/images/menu-bo-v4.webp",
  },
  {
    name: "Lẩu riêu cua bắp bò",
    detail: "Riêu cua • Đậu • Bắp bò • Rau ăn kèm",
    price: "329.000 ₫",
    image: "/images/menu-lau-v4.webp",
  },
  {
    name: "Bia hơi",
    detail: "Rót tại bàn • Uống lạnh",
    price: "14.000 ₫ / cốc",
    image: "/images/hero-ngoc-tu-v3.webp",
  },
] as const;

export function MenuGrid() {
  return (
    <div className="sample-menu-grid">
      {sampleMenu.map((item) => (
        <article className="sample-menu-card" key={item.name}>
          <div className="sample-menu-image">
            <Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          </div>
          <div className="sample-menu-copy">
            <p>{item.detail}</p>
            <h3>{item.name}</h3>
            <strong>{item.price}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
