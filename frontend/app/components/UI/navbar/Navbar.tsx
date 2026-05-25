import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Button, Dropdown } from "@heroui/react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image 
          src="/assets/Logo_Aubergine.png" 
          alt="Logo" 
          width={80} 
          height={80} />
      </Link>
      <div>

        <Dropdown>
          <Button className={styles.button}>Services</Button>
        </Dropdown>
        <Link href="/contact">Free Consultation</Link>
      </div>
    </nav>
  )
}