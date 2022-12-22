//funcion para crear un sistema de almacenaje de datos
import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

//Opciones de configuración del sistema de datos 
//aqui definimos el modelo de datos que se usará en al app a nivel global
const store = createStore({
    state () {
        return {}
    },
    //objeto que contiene todas las funciones que seran nuestros getters que permiten manipular los datos sin modificar la forma en que estan almacenados y disponibles
    getters: {},
    mutations: {},
    //actions para actualizar nombre de usuario, las action se invocan con dispatch
    actions: {},
    //json de configuración
    modules: {
        profile
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store