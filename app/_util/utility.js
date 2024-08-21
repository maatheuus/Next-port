import trillo from "@/public/hotel-trillo.png";
import weather from "@/public/weather.png";
import fastPizza from "@/public/react-fast-pizza.png";
import vacationPlans from "@/public/vactions-plan.png";
import bookLife from "@/public/book-life-2.png";
import movieLife from "@/public/movie-life.png";

export const projects = [
  {
    id: 1,
    title: "Vacation Plans",
    classImg: " !h-[298px]",
    description:
      "Um ótimo lugar para gerenciar as férias de seus funcionários e poder marcar as suas férias",
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
    classImg: "!h-[358px]",
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
    classImg: " !h-[251px]",
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
    title: "Movie Life",
    classImg: "!h-[361px]",
    description:
      "Movie Life é uma plataforma para explorar e favoritar filmes e séries, com uma interface simples e intuitiva.",
    about:
      "O Movie Life é uma aplicação moderna que permite aos usuários explorar uma vasta coleção de filmes e séries. Com uma interface intuitiva, você pode buscar e favoritar seus títulos preferidos, além de gerenciar sua própria lista de conteúdos. Utilizando tecnologia de ponta, como MongoDB e React Query, o Movie Life proporciona uma experiência de usuário fluida e personalizada, ideal para os amantes de cinema e televisão.",
    image: movieLife,
    link: "https://movie-life-ml.vercel.app",
    github: "https://github.com/maatheuus/Movie-Life",
    technologies: [
      "react & react query",
      "redux",
      "javascript",
      "mongoDB",
      "express",
      "nodeJs",
      "tailwind",
    ],
  },
  {
    id: 6,
    title: "Weather App",
    classImg: " !h-[318px]",
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

export const COURSES_DATA = [
  {
    id: 1,
    title: "Backend.",
    location: "Udemy",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp",
    date: "2023",
    description:
      "Um bootcamp completo de backend com NodeJS, Express e MongoDB. Construção de API RESTful, autenticações, seguranças com Node.js, profundo conhecimento em moongose e mais.",
  },
  {
    id: 2,
    title: "Frontend (JavaScript).",
    location: "Udemy",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
    date: "2022",
    description:
      "Muitos desenvolvedores enfrentam dificuldade em JavaScript com cursos que não ensinam bem ou não ensinam o suficiente na faculdade. Principalmente com lógica dentro do JavaScript, a  famigerada POO (Programação Orientada a Objetos), moderno ES6+ e etc...",
  },
  {
    id: 3,
    title: "Frontend (Bibliotecas e Frameworks).",
    location: "Udemy",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
    date: "2024",
    description:
      "Curso completo de tudo o que eu preciso saber sobre React.js, Next.js e Redux para fazer os sites mais lindos e com as melhores práticas de código atualmente. Como bônus o curs também vem com mini-cursos de estilização, tais como: Tailwind CSS, CSS Modules, Styled Components (CSS-in-JS).",
  },
  {
    id: 4,
    title: "Estrutura de dados e algoritmo.",
    location: "Udemy",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
    date: "2023",
    description:
      "Muitos desenvolvedores que são &quot;autodidatas&quot; sentem que uma das principais desvantagens que enfrentam em comparação com graduados universitários em ciência da computação é o fato de não terem conhecimento sobre algoritmos, estruturas de dados e notação Big-O.",
  },
];
