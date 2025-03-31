function tlacitko(){
    alert("Ahoj")
}

var cervena

document.getElementById("barva").addEventListener("click",()=>{
    if(cervena){
        document.getElementById("div").style.backgroundColor = "red"
        cervena=false
    }else{
        document.getElementById("div").style.backgroundColor = "blue"
        cervena=true
    }   
})

var head

document.getElementById("nadpis").addEventListener("click",()=>{
    if(head){
        document.getElementById("text").style.color = "red"; document.getElementById("text").innerText="Ne"
        head=false
    }else{
        document.getElementById("text").style.color = "black"; document.getElementById("text").innerText="Nadpis"
        head=true
    }   
})