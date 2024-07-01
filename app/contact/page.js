import Input from "@/app/_components/Input";

export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <section className="w-full h-[86vh] flex justify-center">
      <div className="w-4/5 flex items-center flex-col justify-around gap-10 md:flex-row ">
        <div className="h-[27rem] w-[25rem]">
          <form
            action="https://formsubmit.co/matts14smkd@gmail.com"
            method="POST"
            className="flex flex-col p-1 justify-end h-full md:justify-start"
          >
            <Input
              name="name"
              type="text"
              autoComplete="on"
              placeholder="Seu nome"
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
              autoComplete="on"
              placeholder="Como posso ajudar?"
            />
            <div className="my-4">
              <button
                className="bg-stone-950 text-stone-50 p-2 w-32 border-none transition-all 
                duration-300 hover:-translate-y-1"
                type="submit"
              >
                Enviar
              </button>
              <input type="hidden" name="_captcha" value="false" />
            </div>
          </form>
        </div>

        {/*FOOTER */}
        <div className="flex-1 h-[27rem] w-[34rem] flex flex-col p-2 gap-3 order-1">
          <h1 className="text-4xl">
            Vamos <span className="font-900 text-zinc-500">conversar</span> para{" "}
            <span className="block">Algo especial</span>
          </h1>
          <p className="font-800 text-2xl text-zinc-400">
            matts14smkd@gmail.com
          </p>
        </div>
        <footer className="h-full flex items-end justify-end">
          <p className="mr-2">@2024 Matheus</p>
          <p>&copy; All the right reserved</p>
        </footer>
      </div>
    </section>
  );
}

export default Page;
