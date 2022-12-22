import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
    //variable booleana para activar que el modulo tenga la propiedad para nombrarlo y poder acceder a sus funciones y estados
    namespaced: true,
    state(){
        return {
            username : 'Edracobi.028',
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
    //actions para actualizar nombre de usuario, las action se invocan con dispatch
    actions: {
        async updateUsername( { commit, state }, username ){
            console.log('update username action!', state.username, username)
            const user = await getUser(1)
            console.log(user)
            commit( COMMIT_UPDATE_USERNAME , user.username)
        }
    },
}

export default module