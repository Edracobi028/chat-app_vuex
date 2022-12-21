//funcion para crear un sistema de almacenaje de datos
import { createStore } from 'vuex'

//Opciones de configuración del sistema de datos 
//aqui definimos el modelo de datos que se usará en al app a nivel global
const store = createStore({
    state () {
        return{
            username:'Edracobi028'     
        }
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store