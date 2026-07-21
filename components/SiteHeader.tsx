import Link from "next/link";

export const MAP_URL = "https://maps.app.goo.gl/oBZ6M6FXPe7GjUzn6";
export const MAP_EMBED_URL = "https://www.google.com/maps?q=20.9882557,105.724623&z=17&output=embed";
export const PHONE_DISPLAY = "0911 721 113";
export const PHONE_URL = "tel:+84911721113";
export const ZALO_URL = "https://zalo.me/0911721113";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/khong-gian", label: "Không gian" },
  { href: "/#thuc-don", label: "Thực đơn" },
  { href: "/#dat-ban", label: "Đặt bàn" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Bia hơi Ngọc Tú - Trang chủ">
        <span>Bia hơi</span>
        <strong>Ngọc Tú</strong>
      </Link>

      <nav className="desktop-nav" aria-label="Điều hướng chính">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </nav>

      <Link className="header-map" href="/#dat-ban">
        Đặt bàn <span aria-hidden="true">→</span>
      </Link>

      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <a href={MAP_URL} target="_blank" rel="noreferrer">Mở Google Maps ↗</a>
        </div>
      </details>
    </header>
  );
}
