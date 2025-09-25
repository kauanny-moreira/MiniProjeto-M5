import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer(){
    

    return(
   <footer className={styles.footer} id="contato">
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Mais que desenvolver, construo pontes entre o digital e o humano.
        </p>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/kauanny-moreira"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub className={styles.socialIcon} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kauanny-moreira-865342352/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin className={styles.socialIcon} />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/kauannytws/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram className={styles.socialIcon} />
            Instagram
          </a>
        </div>

        <p className={styles.footerNote}>© 2025 Kauanny Moreira Candido</p>
      </div>
    </footer>
    );
    }


 