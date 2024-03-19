import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import styleClasses from "./main-header.module.css";
import MainHeaderBackround from "./main-header-background";

function MainHeader() {
  return (
    <>
      <MainHeaderBackround />
      <header className={styleClasses.header}>
        <Link href="/" className={styleClasses.logo}>
          <Image src={AppLogo} alt="app logo" priority />
          NextLevel Food
        </Link>

        <nav className={styleClasses.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>

            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
