export const addFavourite = (azienda) => {
    return {type: 'ADD_FAVOURITE', payload: azienda }
}

export const removeFavourite = (azienda) => {
    return {type: 'REMOVE_FAVOURITE', payload: azienda }
}