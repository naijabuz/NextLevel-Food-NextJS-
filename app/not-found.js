import Link from "next/link";

const notFound = () => {
  return (
    <main className="not-found">
      <h1>oops! Page Not Found</h1>
      <p>
        Unfortunately, we could not find the requested page or resource you are
        looking for
      </p>
      <Link href="/">Go back Home Here</Link>
    </main>
  );
};

export default notFound;
