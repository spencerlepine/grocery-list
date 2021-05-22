import * as api from "../api/index.js"
import {
  FETCH_ALL_GROCERIES,
  UPDATE,
  DELETE,
  SET_GROCERY_CONNECTION,
  FETCH_COUNT,
  SET_CURRENT_ERROR,
} from "../constants/actionTypes.js"

// action creators
export const getGroceries = (userId, lastGrocery=0) => async (dispatch) => {
  try {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "pending" })

    const { data } = await api.fetchGroceries({ userId }, { lastGrocery })
 
    await dispatch({ type: FETCH_ALL_GROCERIES, payload: data })

    await dispatch({ type: SET_GROCERY_CONNECTION, payload: "connected" })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })
  } catch (error) {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "disconnected" })
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const saveLocalGrocery = (groceryItem)  => async (dispatch) => {
  try {
    await dispatch({ type: FETCH_ALL_GROCERIES, payload: [groceryItem] })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const getGroceryItem = (userId, groceryName) => async (dispatch) => {
  try {
    const { data } = await api.fetchGroceryItem({ userId }, { groceryName })
    
    await dispatch({ type: FETCH_ALL_GROCERIES, payload: data })
  } catch (error) {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "disconnected" })
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const createGrocery = (userId, newGrocery) => async (dispatch) => {
  try {
    await api.createGrocery({ userId }, newGrocery)

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })

    // Let the user know the grocery creation was successful
    const successMessage = {
      name: "Added!",
      message: `saved '${newGrocery.name}' to list`,
      type: "success"
    }
    dispatch({ type: SET_CURRENT_ERROR, payload: successMessage });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const updateGrocery = (userId, groceryItem) => async (dispatch) => {
  try {
    await api.updateGrocery({ userId }, groceryItem)

    dispatch({ type: UPDATE, payload: groceryItem })

    const successMessage = {
      name: "Updated!",
      message: `saved data for ${groceryItem.name}`,
      type: "success"
    }
    dispatch({ type: SET_CURRENT_ERROR, payload: successMessage });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const deleteGrocery = (userId, groceryName) => async (dispatch) => {
  try {
    await api.deleteGrocery({ userId }, { name: groceryName })

    dispatch({ type: DELETE, payload: groceryName })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })

    const successMessage = {
      name: "Removed",
      message: `deleted ${groceryName} from list`,
      type: "warning"
    }
    dispatch({ type: SET_CURRENT_ERROR, payload: successMessage });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}
