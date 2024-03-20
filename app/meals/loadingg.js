import styleClasses from "./loading.module.css";

export default function LoadingMealsPage() {
  return <p className={styleClasses.loading}>Fetching Meals...</p>;
}
