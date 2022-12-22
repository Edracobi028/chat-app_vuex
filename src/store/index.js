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
        //tambien es posible pasarle y recibir argumentos por medio de una funcion arrow  nombrado por una c
        firstName: (state) => (c) => {
            return state.username.split('').join(c) //unirlos por el caracter que recibamos
        }
    },
    mutations: {
        updateUsername(state, username){
            //hacemos uso del state para actualizar el nombre de usuario con el nuevo nombre de usuario
            state.username = username
        }
    },
    //actions para actualizar nombre de usuario, las action se invocan con dispatch
    actions: {
        updateUsername( { commit, state }, username ){
            console.log('update username action!', state.username, username)
            commit('updateUsername', username)
        }
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store