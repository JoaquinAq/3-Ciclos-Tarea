import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Tarea - Clase Vie 29-04</h1>
<div>
<br> Resolución de ejercicios propuestos
<br> A-Eureka 
<br> B-Tablas de multiplicación
<br> C-Suma entre números
<br> D-Par/Impar
</div>`;

//---Funciones---

function parImpar(): string {
  console.clear();

  let num1: number | null = Number(prompt(`Ingrese un número`));

  if (num1 % 2 === 0) {
    console.log(`El número ${num1} es par`);
  } else {
    console.log(`El número ${num1} es impar`);
  }
  console.log("End of algorithm");
}

function sumaEntreNumeros(): string {
  console.clear();

  let number1: number | null = Number(prompt(`Ingrese primer número`));
  let number2: number | null = Number(
    prompt(`Ingrese segundo número (mayor que el primero)`)
  );
  let difference: number = number2 - number1;
  let final: number = 0;
  let extra: number = 0;

  while (extra <= difference) {
    var summatory: number = number1 + extra;
    final = final + summatory;
    extra = extra + 1;
  }
  console.log(`Final result: ${final}`);
  console.log(`End of algorithm`);
}

function tablaDeMultiplicacion(): string {
  console.clear();

  let number1: number | null = prompt(`Indique primer factor`);
  let number2: number | null = prompt(`Indique segundo factor`);
  let factor: number = 0;

  while (factor <= number2) {
    let result: number = number1 * factor;
    let msg: string = `${number1} x ${factor} = ${result}`;
    console.log(msg);
    factor = factor + 1;
  }
  console.log("End of algorithm");
}

function password(): string {
  console.clear();

  const CORRECT_PASS: string = "eureka";
  let attempt: number = 0;

  while (attempt < 3) {
    let password: string | null = prompt("Write password");
    if (password === CORRECT_PASS) {
      console.log("Password accepted");
      break;
    } else {
      attempt = attempt + 1;
      console.log(`Wrong password. Attempts left: ${3 - attempt}`);
    }
  }

  console.log("End of algorithm");
}

//---Ejecución---

let MSJ: string = `Elija opción (mayúscula)\n A-Eureka \n B-Tablas de multiplicaion\n C-Suma entre números\n D-Par/Impar `;
let option: string | null = String(prompt(MSJ));

switch (option) {
  case `A`:
    {
      password();
    }
    break;
  case `B`:
    tablaDeMultiplicacion();
    break;
  case `C`:
    sumaEntreNumeros();
    break;
  case `D`:
    parImpar();
    break;
  default:
    console.log("No es una opción válida");
}
