//funcion para crear un sistema de almacenaje de datos
import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import channels from '@/store/modules/channels'
import messages from '@/store/modules/messages'
import contacts from '@/store/modules/contacts'
import { COMMIT_SET_STATUS } from '@/common/mutation-types'

//Opciones de configuración del sistema de datos 
//aqui definimos el modelo de datos que se usará en al app a nivel global
const store = createStore({
    state () {
        return {
            status: null,
        }
    },
    getters: {},
    mutations: {
        [COMMIT_SET_STATUS]( state, value){
            state.status = value
        }
    },
    actions: {},
    //Despues de importar se agregan aqui los nuevos modulos
    modules: {
        profile,
        channels,
        messages,
        contacts,
    }
})

//Exportarlo para que vuejs importarlo y utilizarlo
export default store