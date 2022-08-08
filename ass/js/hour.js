/*
Isso aqui serve para dar bom dia para a pesssoa, baseado no horário atual da máquina
*/

var time = new Date()
var hora = time.getHours()

console,log(`agora são exatamente ${hora}`)
if(hora < 12) {
    console.log("Bom dia")
} else if(hora <= 18){
    console.log("Boa tarde")
} else {
console.log("Boa noite")
}