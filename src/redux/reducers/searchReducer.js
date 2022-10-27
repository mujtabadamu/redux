import { CARTS } from "../constants";

const searchReducer = (state = "", action) => {
    if(action.type === CARTS.SEARCH){
        return state = action.payload
    }
    return state
}

export default searchReducer
