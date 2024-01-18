
export default function mainReducer(state=[], action) {
    switch(action.type){
        case 'ADD_FAVOURITE':
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case 'REMOVE_FAVOURITE':
            return{
                ...state,
                favourites: state.favourites.filter(a => a.company_name !== action.payload.company_name)
            }
            default:
                break;
    }

  return state
}
