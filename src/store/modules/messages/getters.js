const getters = {
    //Para no mostrar todos los mensajes, lo transformamos en un getter que pueda recibir un argumento
    //con filter() comparamos que se retorne cada mensaje que sea igual al id canal recibido
    getMessages: (state) => (channelId) => { 
        return state.messages.filter((message) => message.channelId === parseInt(channelId))
    }
}

export default getters