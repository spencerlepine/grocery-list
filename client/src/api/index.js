import axios from "axios"
const baseUrl = 'http://localhost:5000'
// const baseUrl = "https://grocery-server-sl.herokuapp.com"

// Grocery API calls
export const fetchGroceries = (idObj, offsetObj) => axios.get(`${baseUrl}/groceries/${offsetObj.offset}/`, {withCredentials: true})

export const fetchGroceryCount = (idObj) => axios.get(`${baseUrl}/count/`, idObj)

export const fetchCart = (keyObj) => axios.get(`${baseUrl}/cart/${keyObj.key}`)

export const fetchCartItem = (keyObj, id) => axios.get(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const removeCartItem = (keyObj, id) => axios.delete(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const updateCartItem = (keyObj, updatedCartItem) => axios.patch(`${baseUrl}/cart/${keyObj.key}/${updatedCartItem._id}`, updatedCartItem)

export const fetchRecommended = (keyObj) => axios.get(baseUrl + `/recommended/${keyObj.key}`)

export const createGrocery = (keyObj, newGrocery) => axios.post(baseUrl + `/groceries/${keyObj.key}`, newGrocery)

export const addToCart = (keyObj, itemToAdd) => axios.post(`${baseUrl}/cart/${keyObj.key}`, itemToAdd)

export const updateGrocery = (keyObj, updatedGrocery) => axios.patch(`${baseUrl}/${keyObj.key}/${updatedGrocery["_id"]}`, updatedGrocery)

export const deleteGrocery = (keyObj, id) => axios.delete(`${baseUrl}/${keyObj.key}/${id}`) 

export const deleteAllGroceries = (keyObj) => axios.delete(`${baseUrl}/groceries/${keyObj.key}`) 

export const fetchCategories = () => axios.get(`${baseUrl}/categories`)

export const loginUser = (loginInfoObj) => axios.post(`${baseUrl}/auth/login`, { email: loginInfoObj["email"], password: loginInfoObj["password"]}, { withCredentials: true })

export const isUserLoggedIn = () => axios.get(`${baseUrl}/auth/loggedIn`, {}, { withCredentials: true })

export const logoutUser = () => axios.get(`${baseUrl}/auth/logout`, {}, { withCredentials: true })
