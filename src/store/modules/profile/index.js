import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
    //variable booleana para activar que el modulo tenga la propiedad para nombrarlo y poder acceder a sus funciones y estados
    namespaced: true,
    state(){
        return {
            username : '',
        }
    },
    //objeto que contiene todas las funciones que seran nuestros getters que permiten manipular los datos sin modificar la forma en que estan almacenados y disponibles
    getters: {
        //Vuex Por ser computada deberia llevar como 1er argumento el state para acceder a esos valores
        //tambien es posible pasarle y recibir argumentos por medio de una funcion arrow  nombrado por una c
        firstName: (state) => (c) => {
            return state.username.split('').join(c)  //unirlos por el caracter que recibamos
        }
    },
    mutations: {
        [COMMIT_UPDATE_USERNAME](state, username){
            state.username = username
        }
    },
    //API actions para actualizar nombre de usuario, las action se invocan con dispatch
    //Agregamos rootstate para saber si esta activo o no
    actions: {
        async updateUsername( { commit, state, rootState }, username ){
            console.log('update username action!', state.username, username)
            const user = await getUser(1)
            console.log(user)
            //cambiar a activo si el username no esta nulo, utilizando una "mutation" cambiar el status con ayuda de commit 
            
            commit( COMMIT_UPDATE_USERNAME , user.username)
            if(state.username){
                //(mutation, valor, envio a padre)
                //La convertimos en una variable
                commit(COMMIT_SET_STATUS, 'active', { root:true} )
                console.log('status', rootState.status)
            }
        }
    },
}

export default module