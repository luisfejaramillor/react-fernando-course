
export const getImagen = async() => {

    try {

        const apiKey = '4U1wJoa0A8xJQMETcrXgRO1jdWQcwNd0';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



