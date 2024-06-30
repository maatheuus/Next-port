export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <section className={`section-contact `}>
      <div>
        <div className="content-form">
          <form
            action="https://formsubmit.co/matts14smkd@gmail.com"
            method="POST"
            className="form"
          >
            <input
              name="name"
              type="text"
              autoComplete="on"
              placeholder="Seu nome"
            />

            <input
              name="email"
              type="email"
              autoComplete="on"
              placeholder="Email"
            />

            <input
              type="textarea"
              name="description"
              autoComplete="on"
              placeholder="Como posso ajudar?"
            />
            <div className="btn-submit">
              <button
                className="btn-submit__button noticia-text-regular"
                type="submit"
              >
                Enviar
              </button>
              <input type="hidden" name="_captcha" value="false" />
            </div>
          </form>
        </div>
        <div className="information">
          <h1 className="information__title baloo-bhaijaan ">
            Vamos <span className="span-talk">conversar</span> para{" "}
            <span className="span-line">Algo especial</span>
          </h1>
          <p className="information__email baloo-bhaijaan ">
            matts14smkd@gmail.com
          </p>

          <footer className="footer ">
            <p className="baloo-bhaijaan ">@2024 Matheus</p>
            <p>&copy; All the right reserved</p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Page;
