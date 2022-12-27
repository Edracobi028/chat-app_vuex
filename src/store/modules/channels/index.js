//Modulo Vuex de canales para configuarr el modelo toda la info necesaria
const module = {
    //true para hacer referencia por su nombre
    namespaced: true,

    //estado
    state(){
        return {
            //canales
            channels: [
                { id:1, name: 'Canal 1', messages: [] }, 
                { id:2, name: 'Canal 2', messages: [] }, 
                { id:3, name: 'Canal 3', messages: [] }, 
                { id:4, name: 'Canal 4', messages: [] }, 
            ]
        }
    },
    getters: {
        //Recibe el estado
        //+ funcion arrow recibe valor para filtrar(filter) por nombre convierto en minusculas los valores y los valores de busqueda y verificar (includes)
        //El includes nos devuelve verdadero y falso
        getChannels: (state) => (search) => {
            return state.channels.filter((channel) => channel.name.toLowerCase().includes(search.toLowerCase()))
        }
    }
}

export default module
