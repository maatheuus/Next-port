"use client";

import { TypeAnimation } from "react-type-animation";

function TypeTextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Olá, eu sou o Matheus.",
        1500,
        "Olá, eu sou um desenvolvedor Front-end.",
        1500,
        "Olá, eu sou um desenvolvedor Full-Stack.",
        800,
      ]}
      repeat={1}
      deletionSpeed={300}
      speed={400}
    />
  );
}

export default TypeTextAnimation;
