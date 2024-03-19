import Link from "next/link";
import styleClasses from "./page.module.css";

const meals = () => {
  return (
    <>
      <header className={styleClasses.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styleClasses.highlight}>by you</span>
        </h1>

        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>

        <p className={styleClasses.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main className={styleClasses.main}></main>
    </>
  );
};

export default meals;
