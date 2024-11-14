const listeMots=["Cachalot", "Pétunia","Serviette"];
let score=0;
let motUtilisateur=prompt("entre le mot:" +listeMots[0])

if(motUtilisateur===listeMots[0]){
    score++
}

if(motUtilisateur===listeMots[1]){
    score++
}
    
if(motUtilisateur===listeMots[2]){
    score++
}
console.log(score)