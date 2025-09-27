import React, { useState } from "react";
import styles from "./ProjetoCard.module.css";

export default function ProjetoCard({ titulo, descricao, github, img }) {
  const [expandido, setExpandido] = useState(false);

  const toggleDescricao = () => setExpandido((prev) => !prev);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        {img ? (
          <img src={img} alt={titulo} className={styles.thumb} />
        ) : (
          <div className={styles.placeholder}>[ Print aqui ]</div>
        )}
      </div>

      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>
        {expandido || descricao.length <= 90
          ? descricao
          : descricao.slice(0, 90) + "..."}
      </p>

      <div className={styles.actions}>
        <button className={styles.toggleBtn} onClick={toggleDescricao}>
          {expandido ? "Ver menos" : "Ver mais"}
        </button>
        <a href={github} target="_blank" rel="noopener noreferrer" className={styles.btn}>
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}
