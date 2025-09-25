import { useState } from "react";

export default function ExemploEstado() {
  // cria uma variável de estado chamada contador
  const [contador, setContador] = useState(0);

  return (
    <div id="projetos">
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
      <section id="projetos">
      <h2>Meus Projetos</h2>
      <p>Aqui vão os cards dos projetos...</p>
    </section>
    </div>
    
  );
}
