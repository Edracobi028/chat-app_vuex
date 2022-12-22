//funcion para crear un sistema de almacenaje de datos
import { createStore } from 'vuex'
import profile from '@/store/modules/profile'

//Opciones de configuración del sistema de datos 
//aqui definimos el modelo de datos que se usará en al app a nivel global
const store = createStore({
    state () {
        return {
            status: 'active',
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        profile
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store