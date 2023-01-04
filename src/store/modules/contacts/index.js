const module = {
    namespaced: true,
    state() {
        return {
            contacts:[
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
            ]
        }
    },
    getters: {
        //Getter para acceder desde la vista
        getContacts: (state) => {
            return state.contacts 
        },
        getContactById: (state, getters, rootState) => (contactId) => {
            const profileId = rootState.profile.id //Traer el perfil para la validacion
            
            if (contactId === profileId) return rootState.profile.details
            return state.contacts.find( (contact) => {
                //traer el contacto que me representa como mi perfil 
                return contact.id === contactId
            });
        }
    }
}

export default module