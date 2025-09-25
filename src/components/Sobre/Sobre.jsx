import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
  <div className={styles.container}>
    <h2 className={styles.titulo}>Sobre mim</h2>
    <p className={styles.texto}>
      Olá! Meu nome é <strong>Kauanny Moreira</strong> e sou uma desenvolvedora front-end em formação, apaixonada por transformar ideias em projetos reais através da programação. Acredito que, com código, posso tirar ideias da imaginação e criar soluções que impactam pessoas e comunidades.
    </p>
    <p className={styles.texto}>
      O que me inspira na programação é a possibilidade de aplicar a tecnologia para causas sociais, ajudando pessoas e criando experiências digitais significativas. Além disso, vejo no mercado de tecnologia uma oportunidade promissora para crescer profissionalmente e desenvolver habilidades constantemente.
    </p>
    <p className={styles.texto}>
      Um dos meus projetos favoritos foi desenvolver, durante um trabalho de curso, uma aplicação que utiliza uma API para disponibilizar informações sobre mulheres que sofreram abusos. Esse projeto me permitiu unir tecnologia e impacto social, reforçando minha paixão por criar soluções que façam diferença.
    </p>
    <p className={styles.texto}>
      Me considero criativa, resiliente e paciente — qualidades que me ajudam a enfrentar desafios e encontrar soluções eficientes. Estou sempre pesquisando, aprendendo e explorando novas tecnologias, entendendo que esse aprendizado constante é essencial para o mercado tecnológico.
    </p>
    <p className={styles.texto}>
      Meu objetivo é trabalhar em uma empresa de tecnologia de excelência, onde possa aplicar meus conhecimentos, desenvolver minhas habilidades e continuar crescendo profissionalmente, contribuindo com projetos inovadores e impactantes.
    </p>
  </div>
</section>
  );
}
