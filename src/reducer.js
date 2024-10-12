export const initialState = {

    basket: [],
    user: null,   //initial state for user
  };
  
  // Selector to calculate total basket price
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);  //debugging action
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        case "REMOVE_FROM_BASKET":
         const index = state.basket. findIndex(
          (basketItem) => basketItem.id === action.id
         );
         let newBasket = [...state.basket];

         if (index >= 0) {
          newBasket.splice(index, 1);  //remove the item of it exists

         } else {
          console.warn(
             `Cant remove product (id: ${action.id}) as its not in basket!`

          )
         }
         
         return{
          ...state,
          basket: newBasket 
         };

         //add the "SET_USER" case to handle user authentication
         case "SET_USER":
          return {
            ...state,
            user: action.user,  //update user state with the action payload
          }

      default:
        return state;
    }
  };
  export default reducer;