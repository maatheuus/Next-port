import trillo from "@/public/hotel-trillo.png";
import weather from "@/public/weather.png";
import fastPizza from "@/public/react-fast-pizza.png";
import vacationPlans from "@/public/vactions-plan.png";
import bookLife from "@/public/book-life.png";

export const projects = [
  {
    id: 1,
    invertImage: false,
    numberProject: "01",
    title: "Vacation Plans",
    description:
      "Vacation Plans foi criado para suprir a necessidade de gerenciar as férias dos seus funcionários. Com autenticação, formulários, real-time data essa aplicação supre boa parte da sua necessidade.",
    image: vacationPlans,
    liveDemoUrl: "https://vactions-plan.vercel.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/VactionPlan",
    technologies: ["react", "javaScript", "supabase", "tailwind"],
  },
  {
    id: 2,
    invertImage: true,
    numberProject: "02",
    title: "Trillo Hotel",
    description:
      "Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois.",
    image: trillo,
    liveDemoUrl: "https://hotelstrillo.netlify.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Trillo-Hotel",
    technologies: ["javaScript", "sass", "html"],
  },

  {
    id: 3,
    invertImage: false,
    numberProject: "03",
    title: "Book Life",
    description:
      "Book Life é um projeto pessoal onde você pode pesquisar por diversos livros e salva-los em sua conta, na qual você pode criar gratuitamente ou entra em uma já existente.",
    image: bookLife,
    liveDemoUrl: "https://book-life.vercel.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Book-Life",
    technologies: [
      "react",
      "javaScript",
      "nodeJs",
      "express",
      "mongoDB",
      "tailwind",
    ],
  },
  {
    id: 4,
    invertImage: true,
    numberProject: "04",
    title: "Fast React Pizza",
    description:
      "Fast Pizza é um site de estudo onde você pode escolher dentre diversas opções de pizzas com um layout amigável e um formulário para pegar seu endereço automaticamente (caso você permita) e seu número de celular.",
    image: fastPizza,
    liveDemoUrl: "https://react-fastpizza.netlify.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Fast-React-Pizza",
    technologies: ["react", "redux", "javaScript", "tailwind"],
  },
  {
    id: 5,
    invertImage: false,
    numberProject: "05",
    title: "Weather App",
    description:
      "Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)",
    image: weather,
    liveDemoUrl: "https://maatheuus.github.io/WeatherApp/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/WeatherApp",
    technologies: ["javaScript", "html", "css"],
  },
];
/**
 *   // {
  //   id: 4,
  //   invertImage: false,
  //   numberProject: "04",
  //   title: "ReactFood",
  //   description:
  //     "ReactFood é um site aonde você pode escolher dentre diversas opções de comidas com um layout amigável e um formulário para inserir seus dados e fazer o pedido. Para mais detalhes de como iniciar, veja no github.",
  //   image: foodApp,
  //   existLiveDemo: false,
  //   seeOnGithubUrl: "https://github.com/maatheuus/ReactFood",
  //   technologies: ["FaReact", "FaNodeJs"],
  // },
 */
