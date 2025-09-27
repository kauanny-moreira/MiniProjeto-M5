import React from "react";
import ProjetoCard from "./ProjetoCard";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Cardápio Digital",
      descricao:
        "Projeto em grupo no módulo 1 do curso PdA. Trabalhei com HTML, CSS e JavaScript, mas sendo responsável principalmente pela estilização dos cards de produtos.",
      github: "https://github.com/kauanny-moreira/Projeto-Final-M1.git",
      img: ""
    },
    {
      titulo: "Quiz",
      descricao:
        "Projeto em equipe no módulo 2 do curso PdA. Fiquei responsável pela lógica do quiz em JavaScript.",
      github: "https://github.com/kauanny-moreira/ProjetoFinal-M2.git",
      img: ""
    },
    {
      titulo: "Catálogo de Flores",
      descricao:
        "Projeto individual no módulo 3 do curso PdA. Desenvolvi um catálogo de flores com possível cadastro de outras, dando um passo para o e-commerce.",
      github: "https://github.com/kauanny-moreira/MiniProjeto---M3.git",
      img: ""
    },
    {
      titulo: "E-commerce com Frete",
      descricao:
        "Projeto em grupo. Fiz a lógica em JavaScript, permitindo calcular preço e prazo de entrega dos produtos via APIs.",
      github: "https://github.com/kauanny-moreira/ProjetoFinal-M3.git",
      img: ""
    }
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.titulo}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.titulo}
            {...projeto}
          />
        ))}
      </div>
    </section>
  );
}
