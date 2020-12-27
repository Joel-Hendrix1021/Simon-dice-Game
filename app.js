const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
let niveles = 10

class Juego {
    constructor(){
      this.deleteBtn()
      this.generarSecuencia()
     
      this.nivel = 1
      
    }
    
    
    deleteBtn(){
        btnEmpezar.classList.add('hide');
    }

    generarSecuencia(){
        let arrays = new Array(niveles)
       
        let secuencia = arrays.fill(0).map(n =>{
           return Math.floor(Math.random() * 4)
        })
        console.log(secuencia)   
       this.establecerSecuencia(secuencia)
    }

    establecerSecuencia(n){ 
        for (let i = 0; i < n.length; i++) {   
             let num 
            setTimeout(function(){ 
                 num = n[i]
                 
             }, 1000 * i);
             this.cambiarnumeroAcolor(n[i])           
        }
         
    }
    cambiarnumeroAcolor (numero){
       
        switch(numero){
            case 1 :
                this.color = violeta;
            case 2 :
                this.color = verde;
            case 3 :
                this.color = naranja;
            case 4 :
                this.color = celeste;
        }
        console.log(this.color)
        this.iluminarColor(this.color)
    }

    iluminarColor(n){
          if (n == violeta) {
            setTimeout(function(){ 
                violeta.classList.add('light')
             }, 1000 * i);
               violeta.classList.remove(' light')               
             
          } else {
              
          }
    }
}





function empezarJuego(){
    var juego = new Juego();
}