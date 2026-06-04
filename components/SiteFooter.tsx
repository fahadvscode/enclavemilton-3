import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.brand}>The Enclave Milton</p>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/floor-plans">All floor plans</Link>
          <a href="#faq">FAQ</a>
          <a href="#register">Register</a>
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} The Enclave Milton. Built by Sundial Homes. Prices and
          availability subject to change.
        </p>
      </div>
    </footer>
  );
}
