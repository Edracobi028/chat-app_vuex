//importamos para poder declarar objetos reactivos
import { reactive } from 'vue';

//recibe objetos para representar de forma reactiva
const store = reactive({
    username: 'Edracobi028',
    //para actualizar recibe el valor accede al actual y asigna uno nuevo
    updateUsername(username){
        this.username = username;
    }
})


//importarlo en otras partes del proyecto
export default store