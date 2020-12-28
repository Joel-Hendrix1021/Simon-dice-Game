const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
let cantidadNiveles = 2


//las funciones se pueden crear dentro del constructor de la clase con this
//las variables escrita con this se deben declarar dentro de una funcion de esa manera esa varible puede 
//ser llamada fuera de dicha funcion

///this pierde la referencia puedes volver a retomarla con funcion.bing(this)

class Juego {
    constructor(){
      this.inicializar()
      this.generarSecuencia()
      this.siguienteNivel()    
    }
      
    inicializar(){      
        btnEmpezar.classList.add('hide');
        this.seleccionColor = this.seleccionColor.bind(this)
        
        this.nivel = 1
        this.color = {
            celeste,
            verde,
            naranja,
            violeta
        }       
    }
    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        }else{
            btnEmpezar.classList.add('hide')
        }
    }

    siguienteNivel(){       
       setTimeout(() => {
        this.iluminarSecuencia() 
       }, 500);     
        this.eventosClick()
        this.subnivel = 0
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

    colorAnumero(color){     
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }    
    }
    
    generarSecuencia(){
        this.secuencia = new Array(cantidadNiveles).fill(0).map(n => {
            return Math.floor(Math.random() * 4)
         })
         //console.log(this.secuencia)        
    }

    iluminarSecuencia() { 
        
        for (let i = 0; i < this.nivel; i++) {           
            setTimeout(() => {
                let color = this.cambiarnumeroAcolor(this.secuencia[i])
                this.iluminarColor(color)
                              
            }, 1000*i);           
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

    eventosClick() {     
        this.color.celeste.addEventListener('click', this.seleccionColor)
        this.color.violeta.addEventListener('click' ,this.seleccionColor) 
        this.color.naranja.addEventListener('click' ,this.seleccionColor) 
        this.color.verde.addEventListener('click' ,this.seleccionColor)   
    }
    desactivarEventosClick(){
        this.color.celeste.removeEventListener('click', this.seleccionColor)
        this.color.violeta.removeEventListener('click' ,this.seleccionColor) 
        this.color.naranja.removeEventListener('click' ,this.seleccionColor) 
        this.color.verde.removeEventListener('click' ,this.seleccionColor)  
    }

    seleccionColor(event){  
             const nombreColor = event.target.dataset.color
             let numeroColor = this.colorAnumero(nombreColor)
             this.iluminarColor(nombreColor) 
             if(numeroColor === this.secuencia[this.subnivel]){
                 this.subnivel++

                 if (this.nivel === this.subnivel ) {
                     this.nivel++
                     console.log('nivel ' + this.nivel)
                     this.desactivarEventosClick()
                   
                     if (this.subnivel === cantidadNiveles) {                   
                         this.ganasteJuego()                       
                     }else{
                        
                        setTimeout(() => {
                            this.siguienteNivel()
                        }, 800); 
                     }
                 }
                      
             }else{
                 this.perdisteJuego()
                 this.desactivarEventosClick()
             }                
    }
     ganasteJuego(){
        swal ( "Oops" ,  "Something went wrong!" ,  "success" )
        .then(()=>{
            
            this.toggleBtnEmpezar()
        })
        
     }

    perdisteJuego(){
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        .then(()=>{
            this.toggleBtnEmpezar()
        })
    }


    comporacionColor(){         
          
    }
    
}





function empezarJuego(){
    var juego = new Juego();
}