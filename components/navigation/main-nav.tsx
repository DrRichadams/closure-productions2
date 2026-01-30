"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <nav
      style={{
        // backgroundColor: "red",
        position: "absolute",
        zIndex: 500,
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        padding: "2rem 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          listStyle: "none",
          color: "#fff",
        }}
      >
        {!isHome && (
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        )}
        <li>
          <Link href={"/#about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Portifolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
