"use client";
import logo from "@/public/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

function Header() {
  const path = usePathname();
  console.log(path);

  const navItems = [
    { display: "the camp.", slug: "/" },
    { display: "the experience.", slug: "/experience" },
    { display: "the blog.", slug: "/blog" },
  ];

  return (
    <header className={`${styles.header} ${path === '/experience' ? styles.light: ""}`}>
      <Link href="/">
        <Image src={logo} alt="surfingCamp" priority />
      </Link>
      <ul>
        {navItems.map((item) => (
          <li key={item.display}>
            <Link href={item.slug}>
              <h4>{item.display}</h4>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/events">
        <button className="btn btn-black btn-small">BOOK NOW</button>
      </Link>
    </header>
  );
}
export default Header;
