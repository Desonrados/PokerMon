function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // Enquanto o index atual não for igual a zero
  // ele continua mixando os index
  while (currentIndex != 0) 
  {
  // Pega elementos restantes
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // E troca de lugar com outro elemento aleatório 
  //(btw mt legal essa função, não é nem muito complexa).
  [array[currentIndex], array[randomIndex]] = [
  array[randomIndex], array[currentIndex]];
  }

  return array;
}
// Declaração das cartas
const cards = 
(
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0,
    1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1,
    1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2, 12.2, 13.2,
    1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3,]
)


// Mixa a posição das cartas em um array, usando a função anterior
let sh_card = shuffle(cards);    
console.log(sh_card);


let numberPlayers =parseInt(prompt( 'number of players?')) 
document.writeln(`Número de Jogadores: ${numberPlayers}`)
if (numberPlayers < 2)  
{ 
  // verifica se ha menos de 2 players
  alert('Numero de players abaixo do minimo ("2")')

  location.reload()
}
  mesa_inicio = numberPlayers * 2

  
if (numberPlayers >22)  
{  
  //verifica se ha mais de 22 players 
  alert('Numero de players acima do limite ("22")')
  location.reload()
}

if (numberPlayers == NaN)
{ // detecta se não for um número (not a number)
  alert("Isso não é um número!")
  location.reload()
}
mesa = numberPlayers * 2 //define onde no deck começara a pegar cartas da mesa, considerando que ha 1 carta de descarte

let mesa_3 = sh_card.splice(mesa+1,3) //separa em uma array as 3 cartas iniciais da mesa
let mesa_4 = sh_card.splice(mesa+2,1) //separa a 4ª carta da mesa, considerando 1 descarte
let mesa_5 = sh_card.splice(mesa+3,1) //separa a 5ª carta da mesa, considerando 1 descarte

// Gera o Dealer/Small/Big Blind
let dealer = parseInt(Math.random() * (numberPlayers));
let smallblind=dealer+1
let bigblind=smallblind+1
if (bigblind>numberPlayers)
{
  bigblind=bigblind-numberPlayers
}

document.writeln(`<br>O Dealer é o ${dealer}`)
document.writeln(`<br>O smallblind é o ${smallblind}`)
document.writeln(`<br>O bigblind é o ${bigblind}`)

document.writeln(`Primeiras cartas da mesa ${mesa_3}`)
console.log(mesa_4)
console.log(mesa_5)

// Função que utilizaremos mais tarde hehe
/*function makeCard(someNumber, image) {
  return {
    someNumber,
    image
  }
}

const card1 = makeCard(1, "./cool.png")
card1.someNumber*?*/