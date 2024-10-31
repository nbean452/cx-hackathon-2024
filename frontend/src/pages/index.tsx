const HomePage = () => {
  // print env
  console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);

  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>content goes here...</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>footer here...</p>
      </footer>
    </>
  );
};

export default HomePage;
