const getters = {
    //Para no mostrar todos los mensajes, lo transformamos en un getter que pueda recibir un argumento
    //con filter() comparamos que se retorne cada mensaje que sea igual al id canal recibido
    getMessages: (state) => (channelId) => { 
        return state.messages.filter((message) => message.channelId === parseInt(channelId))
    },
    //Crear un getter para los acceder a los mensajes,  
    //1er argumento state para acceder a los datos otros "getters" y "rootState" para otros modulos y "rootGetters" para canales
    //2do argumentorecibiendo el canal de los mensajes no leidos
    getUnreadMessages: (state, getters) => (channelId) => {
        //Obtener la lista de msjs de este canal y filtramos si los mensajes estan en el estado read en falso
        return getters.getMessages(channelId).filter((message) => message.read === false).length
    }

}

export default getters