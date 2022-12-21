//funcion para crear un sistema de almacenaje de datos
import { createStore } from 'vuex'

//Opciones de configuración del sistema de datos 
//aqui definimos el modelo de datos que se usará en al app a nivel global
const store = createStore({
    state () {
        return{
            username:'Edracobi.028'     
        }
    },
    //objeto que contiene todas las funciones que seran nuestros getters que permiten manipular los datos sin modificar la forma en que estan almacenados y disponibles
    getters: {
        //Vuex Por ser computada deberia llevar como 1er argumento el state para acceder a esos valores
       /*  firstName(state){
            //dividirlo por el punto y accedemos por emdio de su indice
            return state.username.split('').reverse().join('')
        } */

        //tambien es posible pasarle y recibir argumentos por medio de una funcion arrow  nombrado por una c
        firstName: (state) => (c) => {
            return state.username.split('').reverse().join(c) //unirlos por el caracter que recibamos
        }
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store