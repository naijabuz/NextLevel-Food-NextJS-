import Image from "next/image";
import styleClasses from "./page.module.css";

const MealsDetailsPage = () => {
  return (
    <>
      <header className={styleClasses.header}>
        <div className={styleClasses.image}>
          <Image fill />
        </div>

        <div className={styleClasses.headerText}>
          <h1>TITLE</h1>

          <p className={styleClasses.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>

          <p className={styleClasses.summary}>SUMMARY</p>
        </div>
      </header>

      <main>
        <p
          className={styleClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: "...",
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsDetailsPage;
