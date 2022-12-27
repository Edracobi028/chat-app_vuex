//Modulo Vuex de canales para configuarr el modelo toda la info necesaria
const module = {
    //true para hacer referencia por su nombre
    namespaced: true,

    //estado
    state(){
        return {
            channel : null,
            //canales
            channels: [
                { id:1, name: 'Canal 1', messages: null }, 
                { id:2, name: 'Canal 3', messages: null }, 
                { id:3, name: 'Canal 2', messages: null }, 
                { id:4, name: 'Canal 4', messages: null }, 
            ]
        }
    },
    getters: {
        //Recibe el estado
        //+ funcion arrow recibe valor para filtrar(filter) por nombre convierto en minusculas los valores y los valores de busqueda y verificar (includes)
        //El includes nos devuelve verdadero y falso
        getChannels: (state, getters, rootstate, rootGetters) => (search) => {
            return state.channels
            .filter(
                (channel) => channel.name
                .toLowerCase()
                .includes(search.toLowerCase())
             ).map ((channel) => { //mapear el canal devolver algo
                const messages = rootGetters['messages/getUnreadMessages'](channel.id);
                return{
                    ...channel,
                    messages
                }
             })  
        }
    },
    //Mutation para obtener el id seleccionado
    mutations: {
        setChannel: () => {

        }
    }
}

export default module
