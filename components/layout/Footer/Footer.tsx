import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "@/public/assets/Logo.svg";
import Image from "next/image";

function Footer() {
  const footerItems = [
    [
      { display: "the camp.", slug: "/" },
      { display: "the blog.", slug: "/blog" },
      { display: "the experience.", slug: "/experience" },
      { display: "the events.", slug: "/events" },
    ],
    [
      { display: "Imprint", slug: "/imprint" },
      { display: "Terms and Conditions", slug: "/terms-and-conditions" },
      { display: "Data Protection", slug: "/data-protection" },
    ],
  ];

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <Link href="/">
          <Image
            className={styles.footer__logo}
            src={logo}
            alt="logo"
            priority
          />
        </Link>

        <ul>
          {footerItems[0].map((item) => (
            <li key={item.display}>
              <Link href={item.slug}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer__policies}>
        <ul className={styles.footer__policies_nav}>
          {footerItems[1].map((item) => (
            <li key={item.display}>
              <Link className={styles.copy} href={item.slug}>
                {item.display}
              </Link>
            </li>
          ))}
        </ul>

        <p className={styles.footer__copy}>&copy; Sam's Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
