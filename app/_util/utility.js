import trillo from "@/public/hotel-trillo.png";
import weather from "@/public/weather.png";
import fastPizza from "@/public/react-fast-pizza.png";
import vacationPlans from "@/public/vactions-plan.png";
import bookLife from "@/public/book-life.png";

export const projects = [
  {
    id: 1,
    title: "Vacation Plans",
    classImg: "!w-[340px] !h-[298px]",
    description:
      "Um ótimo lugar para gerenciar as férias de seus funcionários e poder marcar as suas",
    about:
      "Vacation Plans foi criado para suprir a necessidade de gerenciar as férias dos seus funcionários. Com autenticação, formulários, real-time data essa aplicação supre boa parte da sua necessidade.",
    image: vacationPlans,
    link: "https://vactions-plan.vercel.app/",
    github: "https://github.com/maatheuus/VactionPlan",
    technologies: ["react & react query", "javaScript", "supabase", "tailwind"],
  },
  {
    id: 2,
    title: "Trillo Hotel",
    description: "Procure por hotéis em todo o Brasil",
    classImg: "!w-[334px] !h-[358px]",
    about:
      "Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois.",
    image: trillo,
    link: "https://hotelstrillo.netlify.app/",
    github: "https://github.com/maatheuus/Trillo-Hotel",
    technologies: ["javaScript", "sass & css", "html"],
  },
  {
    id: 3,
    title: "Book Life",
    classImg: "!w-[335px] !h-[251px]",
    description: "O website certo para você procurar por seus livros favoritos",
    about:
      "Book Life é um projeto pessoal onde você pode pesquisar por diversos livros e salva-los em sua conta, na qual você pode criar gratuitamente ou entra em uma já existente.",
    image: bookLife,
    link: "https://book-life.vercel.app/",
    github: "https://github.com/maatheuus/Book-Life",
    technologies: [
      "react & react query",
      "javaScript",
      "nodeJs",
      "express",
      "mongoDB",
      "tailwind",
    ],
  },
  {
    id: 4,
    title: "Fast React Pizza",
    classImg: "!h-[361px]",
    description:
      "Um lugar onde você pode passar vontade junto comigo por uma pizza ;)",
    about:
      "Fast Pizza é um site de estudo onde você pode escolher dentre diversas opções de pizzas com um layout amigável e um formulário para pegar seu endereço automaticamente (caso você permita) e seu número de celular.",
    image: fastPizza,
    link: "https://react-fastpizza.netlify.app/",
    github: "https://github.com/maatheuus/Fast-React-Pizza",
    technologies: ["react", "redux", "javaScript", "tailwind"],
  },
  {
    id: 5,
    title: "Weather App",
    classImg: "!w-[298px] !h-[318px]",
    description:
      "Procure a previsão do tempo na sua cidade ou em qualquer lugar do mundo",
    about:
      "Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)",
    image: weather,
    link: "https://maatheuus.github.io/WeatherApp/",
    github: "https://github.com/maatheuus/WeatherApp",
    technologies: ["javaScript", "html", "css"],
  },
];
/**
 *   // {
  //   id: 4,
  //   invertImage: false,
  //   numberProject: "04",
  //   title: "ReactFood",
  //   about:
  //     "ReactFood é um site aonde você pode escolher dentre diversas opções de comidas com um layout amigável e um formulário para inserir seus dados e fazer o pedido. Para mais detalhes de como iniciar, veja no github.",
  //   image: foodApp,
  //   existLiveDemo: false,
  //   github: "https://github.com/maatheuus/ReactFood",
  //   technologies: ["FaReact", "FaNodeJs"],
  // },
 */
