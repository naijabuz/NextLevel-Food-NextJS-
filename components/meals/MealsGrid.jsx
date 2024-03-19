import MealItem from "./MealItem";
import styleClasses from "./MealsGrid.module.css";

export default function MealsGrid(meals) {
  return (
    <ul className={styleClasses.meals}>
      {meals.map((meal) => {
        const { id } = meal;

        return (
          <li key={id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
