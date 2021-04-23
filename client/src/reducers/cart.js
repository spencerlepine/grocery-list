import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "../constants/actionTypes.js"

const validStoredCart = () => {
    let stored = localStorage.getItem('cart')
    const parseCart = JSON.parse(stored) || []
    let valid = true

    if (parseCart === []) {
        return []
    } else if (parseCart) {
        const validKeys = ["quantity", "_id", "name", "purchase_price", "serving_cost"]
        
        // Validate each item contains these keys
        parseCart.forEach(item => {
            valid = validKeys.every(key => item.hasOwnProperty(key))
        })  
    }
    return valid ? parseCart : []
}

const reducer = (cartItems = validStoredCart(), action) => {
    switch(action.type) {
        case(ADD_TO_CART): {
            let newCart = [...cartItems, {quantity: 1, ...action.payload}]

            cartItems.forEach((item) => {
                if (item._id === action.payload._id) {
                    newCart = cartItems.map(item =>
                        item._id === action.payload._id ?
                        {...item, quantity: item.quantity + 1}
                        : item)
                }
            })

            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        } case(CHANGE_QUANTITY): {
            let newCart = cartItems.map((item) => (item._id === action.payload._id) ? action.payload : item)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        } case(REMOVE_FROM_CART): {
            let newCart = cartItems.filter((item) => (item._id === action.payload && item.quantity > 1) || item._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        } default:
            return cartItems      
    }
}

export default reducer