const letrasAcertos = document.querySelector(".letrasAcertos")
const letrasErradas = document.querySelector(".letrasErradas")
const vidasD = document.querySelector(".vidasD")
let palavras = ["scratch","python","java","mathlab","javascript"]
let palavraAle = palavras[Math.floor(Math.random()*palavras.length)]
console.log(palavraAle)
let acertos = 0
let erros = 0
let vidas = 7
let pc = []
let pe =  []

// const letraMostrar = document.querySelector(".containerLetra")

vidasD.innerHTML = vidas
function trocarImg(){
    const img = document.querySelector(".img")
    if(vidas == 6){
        img.setAttribute("src","forca1.png")
    }
    if(vidas == 5){
        img.setAttribute("src","forca2.png")
    }
    if(vidas == 4){
        img.setAttribute("src","forca3.png")
    }
    if(vidas == 3){
        img.setAttribute("src","forca4.png")
    }
    if(vidas == 2){
        img.setAttribute("src","forca5.png")
    }
    if(vidas == 1){
        img.setAttribute("src","forca6.png")
    }

}
function perderVida(){
    vidas=vidas-1
    console.log("vidas restantes: " + vidas)
    if(vidas==0){
        window.alert("voce perdeu")
        window.location.reload()
    }
    vidasD.innerHTML = vidas
}
function mostrarLetra(){                
    const letraMostrar = document.querySelector(".containerLetra")
    letraMostrar.innerHTML = ""
    palavraAle.split("").forEach(letraU =>{
        if(pc.includes(letraU)){
            letraMostrar.innerHTML += `<span> ${letraU} </span>`
        }else{
            letraMostrar.innerHTML += `<span> _ </span>`
        }
    })
    }

document.addEventListener("keydown",function(e){
    let letraU = e.key
    console.log(letraU)
    
    if(palavraAle.includes(letraU)){
        let p = document.createElement("p")
        p.innerHTML=letraU
        letrasAcertos.appendChild(p)
        console.log("vapo")
        acertos=acertos+1
        pc.push(letraU)   
        console.log(pc)      
    }
    if(acertos === palavraAle.length){
        console.log("parabens inseto")
        window.alert("voce acertou a palavra parabeins")
        window.location.reload()
    }
    if(!palavraAle.includes(letraU)){
        let p = document.createElement("p")
        p.innerHTML=letraU
        letrasErradas.appendChild(p)
        perderVida()
        pe.push(letraU)   
        console.log(pe)
        trocarImg()
    }
    mostrarLetra()
})
    