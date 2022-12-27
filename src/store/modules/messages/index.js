/* Modulo vuex */

import getters from './getters' //Importar el json que define el getter

const module = {
    namespaced: true,
    state(){
        return{
            messages: [
                {   id: 1, 
                    author: 1, 
                    message: 'Hola 👀', 
                    timestamp: new Date().toLocaleTimeString(), /* nos da la hora local cada vez que se generé el dato  */
                    read: false/* boolean para discriminar mensajes vistos */
                },
            ]
        }
    },
    getters //importados desde el getters.js
}

export default module