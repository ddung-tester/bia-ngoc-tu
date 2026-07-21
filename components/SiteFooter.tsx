import Link from "next/link";
import { PHONE_DISPLAY, PHONE_URL } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">Bia hơi <strong>Ngọc Tú</strong></p>
        <p>Điểm gặp gỡ cuối ngõ THPT Hoài Đức B, An Khánh, Hà Nội.</p>
      </div>
      <nav aria-label="Điều hướng cuối trang">
        <Link href="/gioi-thieu">Giới thiệu</Link>
        <Link href="/khong-gian">Không gian</Link>
        <Link href="/mon-ngon">Món ngon</Link>
        <Link href="/dat-ban">Đặt bàn</Link>
        <Link href="/lien-he">Liên hệ</Link>
      </nav>
      <a className="footer-map" href={PHONE_URL}>
        Đặt bàn: {PHONE_DISPLAY}
      </a>
    </footer>
  );
}
