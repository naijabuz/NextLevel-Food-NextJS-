import Link from "next/link";
import styleClasses from "./page.module.css";
import ImageSlideshow from "@/components/images/ImageSlideshow";

export default function Home() {
  return (
    <>
      <header className={styleClasses.header}>
        <div className={styleClasses.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={styleClasses.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>

            <p>Taste & share the food from all over the world</p>
          </div>

          <div className={styleClasses.cta}>
            <Link href="/community">Join the Community</Link>

            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styleClasses.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other foodies & lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styleClasses.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
