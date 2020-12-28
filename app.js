const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
let cantidadSecuancia = 10

//las funciones se pueden crear dentro del constructor de la clase con this
//las variables escrita con this se deben declarar dentro de una funcion de esa manera esa varible puede 
//ser llamada fuera de dicha funcion

class Juego {
    constructor(){
      this.inicializar()
     
      
      this.color = {
          celeste,
          verde,
          naranja,
          violeta
      }
      
    }
      
    inicializar(){
        
        btnEmpezar.classList.add('hide');
        this.nivel = 1
        this.siguienteNivel()  
       this.eventosClick() 
        
    }

    siguienteNivel(){
        
        this.generarSecuencia()      
    }
    
    generarSecuencia(){
        
        this.secuencia = new Array(cantidadSecuancia).fill(0).map(n => {
            return Math.floor(Math.random() * 4)
         })
         this.iniciarNiveles()
         //console.log(this.secuencia)        
    }

    iniciarNiveles() { 
        
        for (let i = 0; i < this.nivel; i++) {
            
            setTimeout(() => {
                let color = this.cambiarnumeroAcolor(this.secuencia[i])
                this.iluminarColor(color)
               
            }, 1000*i);           
        }    
    }
   
    
    cambiarnumeroAcolor (numero){     
        switch(numero){
            case 0 :
                return 'celeste'
            case 1 :
                return 'violeta'
            case 2 :
                return 'naranja'
            case 3 :
                return 'verde'
        }              
    }
    iluminarColor(color){
           this.color[color].classList.add('light')
            this.apagarColor(color)
            
    }

    apagarColor(color){
       setTimeout(() => {
        this.color[color].classList.remove('light')
       }, 500);    
    }

    eventosClick(color) {
        let colorIluminado = color;
        celeste.addEventListener('click',this.seleccionColor)
        violeta.addEventListener('click',this.seleccionColor) 
        naranja.addEventListener('click',this.seleccionColor) 
        naranja.addEventListener('click',this.seleccionColor) 
        this.seleccionColor(color)   
    }

    seleccionColor(){  
             
    }
}





function empezarJuego(){
    var juego = new Juego();
}