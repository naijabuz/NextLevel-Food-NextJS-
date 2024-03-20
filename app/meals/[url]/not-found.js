import Link from "next/link";

const notFound = () => {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>
        Unfortunately, we could not find the requested page or meal you are
        looking for
      </p>
      <Link href="/meals">Go back to meals page Here</Link>
    </main>
  );
};

export default notFound;
