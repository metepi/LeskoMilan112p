const nev1 = document.getElementById("nev1")
const nev2 = document.getElementById("nev2")
const gol1 = document.getElementById("gol1")
const gol2 = document.getElementById("gol2")
const out = document.getElementById("out")

function calc(){

    console.log(gol1.value, + "", gol2.value)

    if(gol1.value > gol2.value){
        
        out.innerText = `A ${nev1.value} nevű csapat nyert, ${gol1.value-gol2.value} góllal.`
    }     

    else if(gol2.value > gol1.value){
        out.innerText = `A ${nev2.value} nevű csapat nyert, ${gol2.value-gol1.value} góllal.`
    }

    else{
        out.innerText = "Döntetlen lett a mérkőzés."
    }
   
}