import * as Types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product , quantity} = action;//var product = action.product
    var index = -1; 
    switch(action.type) {
        case Types.ADD_TO_CART:
            index = findProductIncart(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductIncart(state, product);
            if(index !== -1){//tim thay
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductIncart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity     
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        default: return[...state];
    }
}
            var findProductIncart = ( cart, product ) => {
                var index = -1;
                if ( cart.length > 0 ) {
                    for ( var i = 0; i < cart.length ; i++) {
                        if( cart[i].product.id === product.id){
                            index = i;
                            break;
                        }
                    }
                }
                return index;

            }
export default cart;