import {ADD_ITEM_TO_CART_REQUEST} from './Action.Type';
const initialState = {
    cart:null,
    loading:false,
    error:null,
    cartItems:[]
}
export const cartReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_ITEM_TO_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
        case GET_CART_REQUEST:
            return {...state,loading:true, error:null};
        
        
        case ADD_ITEM_TO_CART_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case GET_CART_FAILURE:
            return {...state, loading:false,error:action.payload};


        case ADD_ITEM_TO_CART_SUCCESS:
            return {...state,cartItems:[...cartItems,action.payload.cartItems], loading:false};
        
        case GET_CART_SUCCESS:
            return {...state, cart:action.payload, cartItems:action.payload.cartItems , loading:false};
        
            
        case UPDATE_CART_ITEM_SUCCESS:
            return {...state,loading:false,cartItems: state.cartItems.map((item)=> item.id === action.payload.id ? action.payload: item)}
        case REMOVE_CART_ITEM_SUCCESS:
            return {...state,loading:false, cartItems: state.cartItems?.filter((item) => item.id !== action.payload ) }
    
        default: 
            return state;
    }

}