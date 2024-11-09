// let titulo= document.getElementById("titulo");
// let a = document.getElementById("a")
// let b = document.getElementById("b")
// let buttonSumar= document.getElementById("buttonSumar")
// let c = document.getElementById("c")
// buttonSumar.addEventListener("click",(ev)=>{
//     let num1=Number(a.value)
//     let num2=Number(b.value)
//     alert(num1+num2)
//     c.value=num1+num2

// })


// script.js

// script.js

function agregarSimbolo(simbolo) {
  const pantalla = document.getElementById("pantalla");
  
  // Permitir solo un punto después de un número o después de un operador
  if (simbolo === '.') {
      const lastChar = pantalla.value[pantalla.value.length - 1];
      const operators = ['+', '-', '*', '/'];

      // Permitir el punto si es el primer número o si el último carácter es un operador
      if (pantalla.value.includes('.') || (operators.includes(lastChar) && lastChar !== '.')) {
          return; // No hacer nada si ya hay un punto o si se intenta poner un punto sin un número antes
      }
  }

  pantalla.value += simbolo;
}

// Función para limpiar toda la pantalla
function limpiar() {
  document.getElementById("pantalla").value = "";
}

// Función para borrar el último carácter ingresado
function borrar() {
  let pantalla = document.getElementById("pantalla");
  pantalla.value = pantalla.value.slice(0, -1);
}

// Función para calcular el resultado
function calcular() {
  let pantalla = document.getElementById("pantalla");
  try {
      pantalla.value = eval(pantalla.value);
  } catch (error) {
      pantalla.value = "Error";
  }
}
  