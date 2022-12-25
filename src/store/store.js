//importamos para poder declarar objetos reactivos
import { reactive } from 'vue';

//recibe objetos para representar de forma reactiva
const store = reactive({
    /* persona que esta usando la app */
    profile: {
        username: ''
    },
    contacts: [
        {
            id: 1,
            username: 'User 1',
        },
        {
            id: 2,
            username: 'User 2',
        }
    ],
    messages: [
        {
            id: 1,
            msg: 'Hola:D',
            author: 1

        },
        {
            id: 2,
            msg: 'keondas!!',
            author: 2
        },
        {
            id: 3,
            msg: 'Hola:D',
            author: 1

        },
        {
            id: 4,
            msg: 'keondas!!',
            author: 2
        }

    ],
    /* Lista de Conversasiones */
    channels: [
        /* conversacion */
        {
            id: 1,
            name: 'Canal 1',
            messages: [ 1,2 ]
        },
        {
            id: 2,
            name: 'Canal 2',
            messages: [ 3,4 ]
        }
    ]
})


//importarlo en otras partes del proyecto
export default store