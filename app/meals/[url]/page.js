import Image from "next/image";
import styleClasses from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.url);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealsDetailsPage = ({ params }) => {
  const slug = params.url;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  const { title, image, summary, creator, creator_email } = meal;

  const instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styleClasses.header}>
        <div className={styleClasses.image}>
          <Image src={image} fill />
        </div>

        <div className={styleClasses.headerText}>
          <h1>{title}</h1>

          <p className={styleClasses.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>

          <p className={styleClasses.summary}>{summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styleClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsDetailsPage;
