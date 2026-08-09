import { useState } from "react";

const Ejercicios = () => {
  // --- EJERCICIO 1: Área del cuadrado ---
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcularAreaCuadrado(base, altura) {
    return base * altura;
  }

  // --- EJERCICIO 2: Suma de elementos de un arreglo ---
  const arregloSuma = [10, 20, 30, 40];
  function sumarArreglo(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    return total;
  }

  // --- EJERCICIO 3: Dividir arreglo entre 5 usando Map ---
  const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloDividido = arregloOriginal.map(function(numero) {
    return numero / 5;
  });

  // --- EJERCICIO 4: Promedio de alumnos ---
  const [notaViviana, setNotaViviana] = useState(10);
  const [notaWendy, setNotaWendy] = useState(8);
  const [notaGerson, setNotaGerson] = useState(9);

  function calcularPromedio(nota1: number, nota2: number, nota3: number) {
  let sumaCalificaciones = nota1 + nota2 + nota3;
  let promedio = sumaCalificaciones / 3;
  return promedio;
}

  // --- EJERCICIO 5: Acumulador con useState ---
  const [contador, setContador] = useState(5);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  // --- Mostrar todo en pantalla (HTML) ---
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1> EJERCICIOS TYPESCRIPT - REACT</h1>

      <hr />
      <h2>1. Área del cuadrado</h2>
      <div>
        <label>Base: </label>
        <input 
          type="number" 
          value={base} 
          onChange={(e) => setBase(Number(e.target.value))} 
          style={{ margin: "5px" }}
        />
        <br />
        <label>Altura: </label>
        <input 
          type="number" 
          value={altura} 
          onChange={(e) => setAltura(Number(e.target.value))} 
          style={{ margin: "5px" }}
        />
        <p>Resultado del área: <strong>{calcularAreaCuadrado(base, altura)}</strong></p>
      </div>

      <hr />
      <h2>2. Suma del arreglo</h2>
      <p>Arreglo: [ {arregloSuma.join(", ")} ]</p>
      <p>Resultado de la suma: <strong>{sumarArreglo(arregloSuma)}</strong></p>

      <hr />
      <h2>3. Arreglo dividido para 5 (con map)</h2>
      <p>Original: [ {arregloOriginal.join(", ")} ]</p>
      <p>Dividido: [ {arregloDividido.join(", ")} ]</p>

      <hr />
      <h2>4. Promedio de los alumnos</h2>
      <div>
        <label>Viviana (19 años) - Nota: </label>
        <input 
          type="number" 
          value={notaViviana} 
          onChange={(e) => setNotaViviana(Number(e.target.value))} 
          style={{ margin: "5px" }}
        />
        <br />
        <label>Wendy (20 años) - Nota: </label>
        <input 
          type="number" 
          value={notaWendy} 
          onChange={(e) => setNotaWendy(Number(e.target.value))} 
          style={{ margin: "5px" }}
        />
        <br />
        <label>Gerson (18 años) - Nota: </label>
        <input 
          type="number" 
          value={notaGerson} 
          onChange={(e) => setNotaGerson(Number(e.target.value))} 
          style={{ margin: "5px" }}
        />
        <p>El promedio de notas es: <strong>{calcularPromedio(notaViviana, notaWendy, notaGerson)}</strong></p>
      </div>

      <hr />
      <h2>5. Acumulador (useState)</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button onClick={disminuir} style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}>
          - Disminuir
        </button>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>{contador}</span>
        <button onClick={aumentar} style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}>
          + Aumentar
        </button>
      </div>
    </div>
  );
};

export default Ejercicios;