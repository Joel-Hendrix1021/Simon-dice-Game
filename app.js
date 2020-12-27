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
      this.generarSecuencia()    
      
      this.color = {
          celeste,
          verde,
          naranja,
          violeta
      }
      
    }
      
    inicializar(){
        btnEmpezar.classList.add('hide');
        this.nivel = 3
       
    }
    

    generarSecuencia(){
        this.secuencia = new Array(cantidadSecuancia).fill(0).map(n => {
            return Math.floor(Math.random() * 4)
         })
         this.iniciarNiveles()
         console.log(this.secuencia)
         
    }
    iniciarNiveles() { 
        console.log(this.nivel)
        console.log(this.secuencia[0])
    }
   
    
    cambiarnumeroAcolor (numero){     
        switch(numero){
            case 1 :
                return 'violeta'
            case 2 :
                return 'verde'
            case 3 :
                return 'naranja'
            case 4 :
                return 'celeste'
        }
        console.log(this.color)
        this.iluminarColor(this.color)
    }

}





function empezarJuego(){
    var juego = new Juego();
}