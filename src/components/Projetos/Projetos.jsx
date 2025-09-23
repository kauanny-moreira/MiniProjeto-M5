import { useState } from "react";

export default function ExemploEstado() {
  // cria uma variável de estado chamada contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}
