import Footer from "./_components/Footer";

function Page() {
  return (
    <section className="h-full">
      <div className="flex justify-around flex-col">
        <div className="min-w-[40%] mx-auto">
          <article className="mt-24 flex flex-col">
            <div className="w-3/4">
              <h1 className="text-7xl uppercase ">
                <span className="block">Hey, Eu sou o </span>
                <span>Matheus.</span>
              </h1>
              <p className="text-2xl py-4">
                Desenvolvedor <strong className="uppercase">Full-Stack</strong>{" "}
                apaixonado por programação, sempre codando com entusiasmo.
              </p>
            </div>
          </article>
          <Footer label="Ver mais sobre mim" to="/about" />
        </div>
      </div>
    </section>
  );
}

export default Page;
