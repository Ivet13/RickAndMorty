'use strict'

function calcular () {
  const loteriaElegida = document.getElementById('loteria_elegida').value
  console.log(loteriaElegida)
  switch (loteriaElegida) {
    case 'euromillones':
      euromillones()
      break
    case 'eurojackpot':
      eurojackpot()
      break
  }
}

function euromillones () {
  const resultados = document.getElementById('resultado')
  const tieneResultados = document.getElementById('resultado').hasChildNodes()
  if (tieneResultados) {
    while (resultados.firstChild) {
      resultados.removeChild(resultados.firstChild)
    }
  }
  for (let i = 0; i < 7; i++) {
    console.log('som v for')
    const resultado = document.getElementById('resultado')
    const numeroNuevo = document.createElement('p')
    numeroNuevo.innerHTML = Math.floor(Math.random() * 35) + 1

    resultado.appendChild(numeroNuevo)
  }
}

function eurojackpot () {
  const resultados = document.getElementById('resultado')
  const tieneResultados = document.getElementById('resultado').hasChildNodes()
  if (tieneResultados) {
    while (resultados.firstChild) {
      resultados.removeChild(resultados.firstChild)
    }
  }
  for (let i = 0; i < 5; i++) {
    console.log('som v for')
    const resultado = document.getElementById('resultado')
    const numeroNuevo = document.createElement('p')
    numeroNuevo.innerHTML = Math.floor(Math.random() * 50) + 1

    resultado.appendChild(numeroNuevo)
  }
}
