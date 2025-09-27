import React from "react";
import ProjetoCard from "./ProjetoCard";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const projetos = [
    {
    titulo: "Cardápio Digital",
    descricao:
      "Desenvolvi a estrutura e o design dos cards de produtos usando HTML e CSS, criando uma interface limpa e funcional para o cardápio digital em grupo.",
    github: "https://github.com/kauanny-moreira/Projeto-Final-M1.git",
    img: "cardapio.png"
  },
  {
    titulo: "Quiz Interativo",
    descricao:
      "Implementei toda a lógica em JavaScript: perguntas, respostas certas e erradas, validação de acertos e término automático do quiz em caso de erro.",
    github: "https://github.com/kauanny-moreira/ProjetoFinal-M2.git",
    img: "quiz.png"
  },
  {
    titulo: "Catálogo de Flores",
    descricao:
      "Desenvolvi um sistema de catálogo para administração de loja: cadastro de flores com nome, preço e tamanho, além de toda a estilização com CSS.",
    github: "https://github.com/kauanny-moreira/MiniProjeto---M3.git",
    img: "flores.png"
  },
  {
    titulo: "E-commerce com Frete",
    descricao:
      "Implementei a lógica de cálculo de frete e prazo de entrega por produto, integrando com API externa de CEP para obter dados precisos de entrega.",
    github: "https://github.com/kauanny-moreira/ProjetoFinal-M3.git",
    img: "frete.png"
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
