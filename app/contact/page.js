"use client";

import Heading from "@/landingPage/pages/Heading";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../_layout";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

function Page() {
  return (
    <Layout label="Yes! Contact me">
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
      >
        <motion.div
          transition={transition}
          variants={variants}
          className="flex flex-col gap-4"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div>
                  <Heading
                    label="Contato."
                    className="text-pretty text-4xl font-semibold tracking-tight "
                  />
                  <p className="mt-4 text-base/7 ">
                    Mande uma mensagem diretamente.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <CardInformation
                    title="Email"
                    label="Email"
                    text="Meu email"
                    href="mailto:matts14smkd@gmail.com"
                  />{" "}
                  <CardInformation
                    title="LinkedIn"
                    label="LinkedIn"
                    isLink
                    text="Meu linkedIn"
                    href="https://www.linkedin.com/in/matheusmaat/"
                  />{" "}
                  <CardInformation
                    title="GitHub"
                    label="GitHub"
                    text="Meu github"
                    href="https://github.com/maatheuus"
                  />
                </div>
              </div>
            </div>
          </div>

          <footer className="h-full flex items-end justify-end">
            <p className="mr-2">@{new Date().getFullYear()} Matheus</p>
            <p>&copy; Todos os direitos reservados</p>
          </footer>
        </motion.div>
      </motion.section>
    </Layout>
  );
}

function CardInformation({ title, label, text, href }) {
  return (
    <>
      <div className="rounded-2xl bg-gray-50 p-10">
        <h3 className="text-base/7 font-semibold text-gray-900">{title}</h3>
        <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
          <div>
            <dt className="sr-only">{label}</dt>
            <dd>
              <Link
                target="_blank"
                href={href}
                className="font-semibold text-indigo-600"
              >
                {text}
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
export default Page;
