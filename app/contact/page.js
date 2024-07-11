import Input from "@/app/_components/Input";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <section className="w-full">
      <div className="w-full min-[355px]:w-4/5 flex flex-col gap-6 mr-auto p-4 sm:p-10 sm:mx-auto">
        <h1 className="text-5xl font-bold">Contato.</h1>
        <div>
          <p className="text-base min-[370px]:text-xl text-stone-600">
            Mande uma mensagem por aqui ou diretamente{" "}
            <b> matts14smkd@gmail.com</b>.
          </p>
        </div>
        <div>
          <form
            action="https://formsubmit.co/matts14smkd@gmail.com"
            method="POST"
            className="flex flex-col  justify-end h-full md:justify-start"
          >
            <Input
              name="name"
              type="text"
              autoComplete="on"
              placeholder="Nome"
            />

            <Input
              name="email"
              type="email"
              autoComplete="on"
              placeholder="Email"
            />

            <Input
              type="textarea"
              name="description"
              classInput="pb-48"
              autoComplete="on"
              placeholder="Como posso ajudar?"
            />
            <div className="mt-4">
              <button
                className="bg-stone-800 text-stone-100 text-xl px-6 py-3 w-36 transition-all duration-300 hover:bg-stone-950"
                type="submit"
              >
                Enviar
              </button>
              <input type="hidden" name="_captcha" value="false" />
            </div>
          </form>
        </div>

        {/*FOOTER */}

        <Footer label="Voltar para home" to="/" />

        <footer className="h-full flex items-end justify-end">
          <p className="mr-2">@2024 Matheus</p>
          <p>&copy; All the right reserved</p>
        </footer>
      </div>
    </section>
  );
}

export default Page;
