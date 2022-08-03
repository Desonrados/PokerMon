function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}








const cards = (

  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0,
    1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1,
    1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2, 12.2, 13.2,
    1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3,]
)



let sh_card = shuffle(cards);    //cria um array (sh_cards, com os valores de cards com posições aleatorias
console.log(sh_card);


let player =parseInt(prompt( 'number of players?')) 

if (player < 2)  {         // verifica se ha menos de 2 players

  alert('Numero de players abaixo do minimo ("2")')

  location.reload()}
  mesa_inicio = player * 2

  
if (player >22)  {   //verifica se ha mais de 22 players 
  alert('Numero de players acima do limite ("22")')
  
  
  location.reload()
  
  
  }
  mesa_inicio = player * 2
  

if (player == NaN){ // detecta se não for um número (not a number)
  alert("Isso não é um número!")
  location.reload()
}
mesa_inicio = player * 2


let mesa = sh_card.splice(mesa_inicio,5) //separa em uma rray as cartas da mesa




console.log(mesa)

alert('')



