'use strict'

function calcular () {
  const numeroElegido1 = Number(document.getElementById('numero_elegido1').value)
  console.log(numeroElegido1)

  const numeroElegido2 = Number(document.getElementById('numero_elegido2').value)
  console.log(numeroElegido2)

  const resultado = document.getElementById('numero_resultado')

  resultado.value = numeroElegido1 * numeroElegido2
}
