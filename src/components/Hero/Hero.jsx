import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU A 👋</p>
        <h1 className={styles.title}>
          Kauanny <br /> Moreira
        </h1>
        <h2 className={styles.role}>
          Desenvolvedora Front-End em formação 
        </h2>
        <p className={styles.description}>
          Mais que desenvolver, construo pontes entre o digital e o humano. Quer que eu transforme suas ideias em realidade?
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
          <a href="/curriculo.pdf" className={styles.secondaryBtn}>
            Meu currículo
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/foto.png" // 👉 coloque sua imagem aqui na pasta public
          alt="Tábata Macedo sorrindo com microfone e computador ao fundo"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>Email: <strong>kauannymoreira82@gmail.com</strong></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
          
        </div>
      )}
    </section>
    
  );
}
