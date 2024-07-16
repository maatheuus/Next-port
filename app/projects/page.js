import { Suspense } from "react";
import Footer from "@/app/_components/Footer";
import Spinner from "@/app/_components/Spinner";
import HandleProjects from "@/app/_components/HandleProjects";

export const metadata = {
  title: "Projects",
};

function Page() {
  return (
    <div className="w-full h-full">
      <h1 className="text-5xl font-bold">Projetos.</h1>
      <section className="w-full columns-1 mt-12 min-[785px]:columns-2">
        <Suspense fallback={<Spinner />}>
          <HandleProjects />
        </Suspense>
      </section>
      <Footer label="Entre em contato comigo" to="/contact" />
    </div>
  );
}

export default Page;
