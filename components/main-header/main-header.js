import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import styleClasses from "./main-header.module.css";
import MainHeaderBackround from "./main-header-background";
import NavLinks from "./NavLinks";

function MainHeader() {
  const routes = { meals: "/meals", community: "/community" };

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
              <NavLinks href={routes.meals}>Browse Meals</NavLinks>
            </li>

            <li>
              <NavLinks href={routes.community}>Foodies Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
