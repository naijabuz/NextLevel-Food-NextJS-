import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  //   throw new error("Omo! The meals data could not be fetched.");

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};