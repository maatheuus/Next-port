import Footer from "@/components/Footer";
import HandleProjects from "@/components/HandleProjects";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import Layout from "../_layout";

export const metadata = {
  title: "Projects",
};

function Page() {
  return (
    <Layout label="My works">
      <div className="w-full h-full">
        <h1 className="text-xl font-bold">Projetos.</h1>
        <section className="w-full columns-1 mt-12 min-[785px]:columns-2">
          <Suspense fallback={<Spinner />}>
            <HandleProjects />
          </Suspense>
        </section>
        <Footer label="Entre em contato comigo" to="/contact" />
      </div>
    </Layout>
  );
}

export default Page;
