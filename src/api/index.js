//constante para recibir nombre de usuario y dentro ejecutar una funcion asincrona de tipo export para utilizarla en otro lugar
export const getUser = async (userId) => {
    //utilizar fetch() y almacenar respuesta de backend en variable de una api de ejemplo indicando que traiga el id 1
    //convertir el string de la url en tmplate string  (``) para recibir el valor como una variable y convertir en json
    const res = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();      
    return res;
}
