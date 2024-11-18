const listeMots=["Cachalot", "Pétunia","Serviette"];
const listePhrases=["exercice en js", "axercice en css","exercice en html"];
let score=0 ;

let choix=prompt("veuillez liste des mots ou des phrases")
while(choix!=="mots"&& choix!=="phrases"){
    choix=prompt("veuillez liste des mots ou des phrases")
}
if(choix!="phrases"){
    for (let i=0 ;i<=listeMots.length ; i++ ){
        let motUtilisateur=prompt("le mot est:" +listeMots[i])
        if(motUtilisateur===listeMots[i])
        score++ 
    }
    console.log("le score est " + score + " sur " +listeMots.length);
}else{
    
    for (let j=0 ;j<=listePhrases.length ; j++ ){
        let motUtilisateur=prompt("le mot est:" +listePhrases[j])
        if(motUtilisateur===listePhrases[j])
        score++ 
    }
    console.log("le score est " + score + " sur " +listePhrases.length);
}


    

