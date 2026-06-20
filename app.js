function calcularAreaEPerimetroCirculo(raio) {
    let pi = 3.14
    let area = pi*raio*raio
    let perimetro = 2*pi*raio
    return console.log (`A area é ${area} e o perimetro é ${perimetro}`);
}
calcularAreaEPerimetroCirculo(5);
  
function mostrarTabuada(numero) {
    for (let i=1 ; i<=10;i++){ 
       tabuada = i* numero
       console.log (`${i} X ${numero} = ${tabuada}`);
    }
}
mostrarTabuada(5);