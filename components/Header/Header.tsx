import Image from "next/image";
import logo from "./../../public/assets/Logo.svg";
import Link from "next/link";

import styles from "./Header.module.scss";

function Header() {
  const navItems = [
    { display: "the camp.", slug: "camp" },
    { display: "the experience.", slug: "experience" },
    { display: "the blog.", slug: "blog" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="surfingCamp" priority />
      </Link>
      <ul>
        {navItems.map((item) => (
          <li key={item.display}>
            <Link href={`/${item.slug}`}>
              <h4>{item.display}</h4>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="book">
        <button className="btn btn-black btn-small">BOOK NOW</button>
      </Link>
    </header>
  );
}
export default Header;
